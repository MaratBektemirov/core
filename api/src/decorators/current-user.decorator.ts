import { createParamDecorator } from '@nestjs/common';

export const CurrentUser = createParamDecorator(async (data: any, req) => {
  return req.user;
});
