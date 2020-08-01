import { ApiEndpoint } from '@classes/api.endpoint';

export const usersApiEndpoints = new ApiEndpoint('user', {
  registration: 'registration',
  login: 'login',
  logout: 'logout',
});
