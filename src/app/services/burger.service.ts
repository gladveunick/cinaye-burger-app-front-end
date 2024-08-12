import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap, filter } from 'rxjs/operators';
import { Burger } from 'src/app/model/burger.model';

@Injectable({
  providedIn: 'root'
})
export class BurgerService {
  private apiUrl = 'http://localhost:8000/api/burgers'; // URL de l'API
  private apiUrl2 = 'http://localhost:8000/api/test-burger-list'; // URL de l'API

  constructor(private http: HttpClient, private httpClient: HttpClient) { }

  getAllBurgers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getAllBurgersList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl2);
  }

  getBurger(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addBurger(burger: any): Observable<any> {
    const formData = new FormData();
    formData.append('nom', burger.nom);
    formData.append('prix', burger.prix);
    if (burger.image instanceof File) {
      formData.append('image', burger.image);
    }
    formData.append('description', burger.description);

    return this.http.post<any>(this.apiUrl, formData);
  }
  

  deleteBurger(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  archiveBurger(id: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${id}/archive`, {});
  }

  restoreBurger(id: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${id}/restore`, {});
  }

  updateBurger(id: number, formData: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${id}?_method=PUT`, formData);
  }



}
