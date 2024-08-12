import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  register(nom: string, prenom: string, telephone: string, email: string, mot_de_passe: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, { nom, prenom, telephone, email, mot_de_passe });
  }

  login(email: string, mot_de_passe: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, mot_de_passe });
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  // logout(): void {
  //   localStorage.removeItem('token');
  // }


  logout(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.post<any>(`${this.apiUrl}/logout`, {}, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
  }

  clearToken(): void {
    localStorage.removeItem('token');
  }
}
