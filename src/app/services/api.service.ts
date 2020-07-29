import { Injectable } from '@angular/core';
import { API_PORT } from '@constants/common';

@Injectable()
export class ApiService {
  public host(path) {
    return `http://${window.location.hostname}:${API_PORT}/${path}`;
  }
}
