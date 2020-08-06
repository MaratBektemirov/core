import { Body, Controller, Get, Req } from '@nestjs/common';
import { DbService } from '@api/services/db.service';
import { UsersService } from '@api/services/users.service';
import { TokenService } from '@api/services/token.service';
import { realtyApiEndpoints } from '@endpoints/realty';
import { RealtyUI, UserRealtyUI } from '@interfaces/ui';
import { Tables } from '@api/tables';
import { IRealty } from '@interfaces/realty';

@Controller(realtyApiEndpoints.prefix)
export class RealtyController {
  constructor(private db: DbService,
              private tokenService: TokenService,
              private usersService: UsersService) {
  }

  @Get(realtyApiEndpoints.api.user)
  public async user(@Body() body, @Req() req) {
    const user = await this.usersService.getUserByTokenId(req.headers['token-id']);

    return await this.db.query<UserRealtyUI[]>(`SELECT *, r.space as "fullSpace" FROM
      ${Tables.realty} r
      INNER JOIN ${Tables.userRealty} ur
        ON r.id = ur."realtyId"
        WHERE ur."userId" = $1;`,
      [user.id]
    );
  }

  @Get(realtyApiEndpoints.api.all)
  public async all(@Body() body: any) {
    return await this.db.query<UserRealtyUI[]>(`SELECT
          ur.*,
          ur.space as "userSpace",
          realty.*,
          us.name,
          us.surname,
          us.phone,
          realty."pricePerSpaceItem" * ur.space AS price,
          realty."pricePerSpaceItem" * realty.space AS "fullPrice"
        FROM
          ${Tables.userRealty} ur
          INNER JOIN ${Tables.realty} realty
            ON ur."realtyId" = realty.id
          INNER JOIN ${Tables.user} us
            ON ur."userId" = us.id`,
      []
    );
  }
}
