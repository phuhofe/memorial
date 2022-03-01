import { AuthStorageService } from './auth-storage.service';
import { SessionStorageService, LocalStorageService } from '../web-storage';
import { JwtService } from './jwt.service';

export {
  AuthStorageService,
  SessionStorageService,
  LocalStorageService,
  JwtService
};

export const SERVICES = [
  AuthStorageService,
  SessionStorageService,
  LocalStorageService,
  JwtService
];
