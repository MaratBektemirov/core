import { Injectable } from '@angular/core';
import { ApiService } from '@app/services/api.service';
import { HttpClient } from '@angular/common/http';
import { CabinetRealtyUICard, RealtyUI, UserRealtyShareUI } from '@interfaces/ui';
import { realtyApiEndpoints } from '@endpoints/realty';

@Injectable()
export class RealtyService {
  constructor(private apiService: ApiService,
              private http: HttpClient) {
  }

  public async user() {
    const url = this.apiService.host(realtyApiEndpoints.client.userObjects);

    return await this.http.get<UserRealtyShareUI[]>(url).toPromise();
  }

  public async all() {
    const url = this.apiService.host(realtyApiEndpoints.client.all);

    return await this.http.get<RealtyUI[]>(url).toPromise();
  }

  public async byId(id: number) {
    const url = this.apiService.host(realtyApiEndpoints.client.byId);

    return await this.http.get<CabinetRealtyUICard>(url, {params: {id: id.toString()}}).toPromise();
  }

  public async reserve(userRealtyId: number) {
    const url = this.apiService.host(realtyApiEndpoints.client.reserve);

    return await this.http.post(url, {userRealtyId}).toPromise();
  }

  // getUserProfitPerMonth(realty: UserRealtyShareUI): number {
  //   const rentRatePerPriceSpace = realty.rentRate / realty.space;
  //
  //   return Math.floor(rentRatePerPriceSpace * realty.userSpace);
  // }
  //
  // remaining(realty: UserRealtyShareUI): number {
  //   return Math.floor((realty.userInvestments - realty.profitAllTime) / this.getUserProfitPerMonth(realty));
  // }
}
