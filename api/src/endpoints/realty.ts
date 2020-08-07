import { ApiEndpoint } from '@classes/api.endpoint';

export const realtyApiEndpoints = new ApiEndpoint('realty', {
  userObjects: 'userObjects',
  all: 'all',
  byId: 'byId',
  reserve: 'reserve',
  pdf: 'pdf',
  sign: 'sign',
});
