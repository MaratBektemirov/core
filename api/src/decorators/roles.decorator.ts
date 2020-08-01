import { SetMetadata } from '@nestjs/common';
import { UserRoles } from '@interfaces/user';

export const Roles = (...roles: UserRoles[]) => SetMetadata('roles', roles);
