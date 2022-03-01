import {Injectable} from '@angular/core';
import {AuthStorageModel} from '@app/core/models/auth-storage-model';

@Injectable({
  providedIn: 'root'
})
export class AuthStorageService {

  authEnum = 'auth';

  constructor() {
  }

  private saveToStorage(authInfo: AuthStorageModel): void {
    window.localStorage[this.authEnum] = JSON.stringify(authInfo);
  }

  getFromStorage(): AuthStorageModel {
    const authInfo = window.localStorage[this.authEnum];

    return authInfo ? JSON.parse(authInfo) as AuthStorageModel : undefined;
  }

  saveAuthInformation(authInfo: AuthStorageModel): void {
    this.saveToStorage(authInfo);
  }

  removeAuthInformation(): void {
    window.localStorage.removeItem('auth');
  }

  getToken(): string {
    const authInfo = this.getFromStorage();

    return authInfo ? authInfo.token : '';
  }

  updateToken(token: string): void {
    const authInfo = this.getFromStorage();
    this.saveToStorage({...authInfo, token});
  }
}
