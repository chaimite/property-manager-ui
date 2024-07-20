import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginCredentials, LoginResponse, RegisterCredentials } from './interfaces/auth.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000/auth';
  private loginUrl = this.baseUrl+'/login';
  private registerUrl = this.baseUrl + '/register'

  constructor(private http: HttpClient) { }

  login(credentials: LoginCredentials): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.loginUrl, credentials);
  }

  register(registerCredentials: RegisterCredentials): Observable<any> {
    return this.http.post<any>(this.registerUrl, registerCredentials);
  }
}
