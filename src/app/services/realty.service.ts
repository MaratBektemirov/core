import { Injectable } from '@angular/core';
import { ApiService } from '@app/services/api.service';
import { HttpClient } from '@angular/common/http';
import { RealtyUI, UserRealtyUI } from '@interfaces/ui';
import { realtyApiEndpoints } from '@endpoints/realty';

@Injectable()
export class RealtyService {
  constructor(private apiService: ApiService,
              private http: HttpClient) {
  }

  public async user() {
    const url = this.apiService.host(realtyApiEndpoints.client.user);

    return await this.http.get<UserRealtyUI[]>(url).toPromise();
  }

  public async all() {
    const url = this.apiService.host(realtyApiEndpoints.client.all);

    return await this.http.get<RealtyUI[]>(url).toPromise();
  }
}
