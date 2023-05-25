import { Injectable, CanActivate } from '@nestjs/common';

@Injectable()
export class RolesGuard implements CanActivate {
  async canActivate(): Promise<boolean> {
    return true;
  }
}