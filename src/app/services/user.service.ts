import { Injectable } from '@angular/core';
import { ApiService } from '@app/services/api.service';
import { HttpClient } from '@angular/common/http';
import { LoginRegistration, LoginRequest, LoginResponse } from '@interfaces/api';
import { IUserAccessToken } from '@interfaces/user';
import { GUEST_USER } from '@constants/common';
import { UserUI } from '@interfaces/ui';
import { usersApiEndpoints } from '@endpoints/users';
import { Router } from '@angular/router';
import paths from '@paths/client';

@Injectable()
export class UserService {
  get user(): UserUI {
    const user = localStorage.getItem('user');

    return JSON.parse(user);
  }

  set user(user: UserUI) {
    const $user = JSON.stringify(user);

    localStorage.setItem('user', $user);
  }

  get token(): IUserAccessToken {
    const token = localStorage.getItem('token');

    return JSON.parse(token);
  }

  set token(token: IUserAccessToken) {
    const $token = JSON.stringify(token);

    localStorage.setItem('token', $token);
  }

  constructor(private apiService: ApiService,
              private router: Router,
              private http: HttpClient) {
    if (!this.user) {
      this.user = Object.assign({}, GUEST_USER);
    }
  }

  public isAuth() {
    return this.user.userName !== GUEST_USER.userName;
  }

  public async login(data: LoginRequest) {
    const url = this.apiService.host(usersApiEndpoints.client.login);
    const resp = await this.http.post<LoginResponse>(url, data).toPromise();

    this.token = resp.token;
    this.user = resp.user;
  }

  public async logout() {
    const url = this.apiService.host(usersApiEndpoints.client.logout);
    await this.http.post(url, {}).toPromise();

    localStorage.removeItem('user');
    localStorage.removeItem('token');

    this.user = Object.assign({}, GUEST_USER);
    this.router.navigateByUrl(paths.login.getAbsoluteUrl());
  }

  public async registration(data: LoginRegistration) {
    const url = this.apiService.host(usersApiEndpoints.client.registration);
    const resp = await this.http.post<LoginResponse>(url, data).toPromise();

    this.token = resp.token;
    this.user = resp.user;
  }
}
