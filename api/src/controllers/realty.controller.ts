import { BadRequestException, Body, Controller, Get, Header, HttpCode, HttpStatus, Post, Query, Req, Res } from '@nestjs/common';
import { DbService } from '@api/services/db.service';
import { UsersService } from '@api/services/users.service';
import { TokenService } from '@api/services/token.service';
import { realtyApiEndpoints } from '@endpoints/realty';
import { RealtyUI, UserRealtyShareUI } from '@interfaces/ui';
import { Tables } from '@api/tables';
import { IUser } from '@interfaces/user';

@Controller(realtyApiEndpoints.prefix)
export class RealtyController {
  constructor(private db: DbService,
              private tokenService: TokenService,
              private usersService: UsersService) {
  }

  @Post(realtyApiEndpoints.api.sign)
  public async sign(@Body() body, @Req() req) {
    const user = await this.usersService.getUserByTokenId(req.headers['token-id']);

    const res = await this.db.insert(Tables.userDeal, {
      userId: user.id, realtyId: body.realtyId, checksum: 'e53815e8c095e270c6560be1bb76a65d',
    });

    return res[0];
  }

  @Post(realtyApiEndpoints.api.reserve)
  public async reserve(@Body() body, @Req() req) {
    const user = await this.usersService.getUserByTokenId(req.headers['token-id']);

    const res = await this.db.query(`SELECT realty."pricePerSpaceItem" * ur."space" AS price
     FROM ${Tables.userRealty} ur
		 INNER JOIN ${Tables.realty} realty
		    ON realty.id = ur."realtyId"
		 WHERE ur."id" = $1`,
      [body.userRealtyId]
    );

    this.db.query(`UPDATE ${Tables.user}
      SET "onHoldBalance" = "onHoldBalance" + $1
      WHERE id = $2`, [res[0].price]);

    return await this.db.query<any>(`UPDATE ${Tables.userRealty}
      SET "reservedUserId" = $1
      WHERE id = $2`,
      [user.id, body.userRealtyId]
    );
  }

  @Get(realtyApiEndpoints.api.userObjects)
  public async userObjects(@Body() body, @Req() req) {
    const user = await this.usersService.getUserByTokenId(req.headers['token-id']);

    return await this.db.query<RealtyUI[]>(`SELECT
        realty.*,
        realty."pricePerSpaceItem" * realty.space AS "fullPrice"
      FROM
          ${Tables.realty}
      WHERE (SELECT "userId" FROM ${Tables.userRealty} ur WHERE realty.id = ur."realtyId" LIMIT 1) = $1`,
      [user.id]
    );
  }

  @Get(realtyApiEndpoints.api.byId)
  public async byId(@Query('id') id, @Req() req) {
    const res = await this.db.query<RealtyUI[]>(`SELECT
        realty.*,
        realty."pricePerSpaceItem" * realty.space AS "fullPrice"
      FROM
          ${Tables.realty}
      WHERE realty.id = $1`,
      [id]
    );

    const realty = res[0];

    if (realty) {
      const shares = await this.db.query(`SELECT
        ur.*,
        u.name AS "reservedName",
        u.surname AS "reservedSurname",
        u.phone AS "reservedPhone",
        ($1 * ur.space) AS "price"
      FROM
        ${Tables.userRealty} ur
      LEFT JOIN ${Tables.user} u
        ON u.id = ur."reservedUserId"
      WHERE ur."realtyId" = $2`, [realty.pricePerSpaceItem, realty.id]);

      const deals = await this.db.find(Tables.userDeal, {realtyId: realty.id});

      return {
        realty: res[0],
        shares,
        deals,
      };
    } else {
      throw new BadRequestException('Realty not found');
    }
  }

  @Get(realtyApiEndpoints.api.all)
  public async all(@Body() body: any, @Req() req) {
    const queryParams = [];
    let query = `SELECT
          ur.*,
          ur.space as "userSpace",
          realty.*,
          us.name,
          us.surname,
          us.phone,
          realty."pricePerSpaceItem" * ur.space AS price,
          realty."pricePerSpaceItem" * realty.space AS "fullPrice",
          ROUND(((ur.space::float / realty.space) * 100.0)::numeric,2)::float AS percentage
        FROM
          ${Tables.userRealty} ur
          INNER JOIN ${Tables.realty} realty
            ON ur."realtyId" = realty.id
          INNER JOIN ${Tables.user} us
            ON ur."userId" = us.id`;

    try {
      const user = await this.usersService.getUserByTokenId(req.headers['token-id']);

      if (user) {
        queryParams.push(user.id);
        query += ` AND ur."userId" != $1`;
      }
    } catch (e) {

    }

    return await this.db.query<UserRealtyShareUI[]>(query, queryParams);
  }

  @Get(realtyApiEndpoints.api.pdf)
  @HttpCode(HttpStatus.OK)
  @Header('Content-Type', 'application/pdf')
  @Header('Content-Disposition', 'attachment; filename=document.pdf')
  async pdf(
    @Query('realtyId') realtyId,
    @Res() res,
  ) {
    const realty = await this.db.find(Tables.realty, {id: realtyId});
    const userRealtyList = await this.db.find(Tables.userRealty, {realtyId});
    const owner = await this.db.find(Tables.user, {id: userRealtyList[0].userId});

    const customersWhere = userRealtyList.map((ur) => 'u.id = ' + ur.reservedUserId).join(' OR ');
    const customers = await this.db.query<IUser[]>(`SELECT * FROM ${Tables.user} u WHERE ${customersWhere}`, []);

    this.usersService.createAgreement(owner[0], customers, realty[0], res);
  }
}
