import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  MonthlyRevenue } from 'src/app/model/monthly-revenue';


@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  private apiUrl = 'http://localhost:8000/api/commandes';
  private apiUrl1 = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  getAllCommandes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  passerCommande(commande: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, commande);
  }

  annulerCommande(id: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${id}/annuler`, {});
  }

  terminerCommande(id: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${id}/terminer`, {});
  }

  payerCommande(id: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${id}/payer`, {});
  }


  getFilteredCommandes(filters: any): Observable<any[]> {
    let params = new HttpParams();
    if (filters.burger_id) {
      params = params.set('burger_id', filters.burger_id);
    }
    if (filters.date) {
      params = params.set('date', filters.date);
    }
    if (filters.status) {
      params = params.set('status', filters.status);
    }
    if (filters.client) {
      params = params.set('nom', filters.client); // Notez que nous utilisons 'nom' ici pour correspondre à votre backend
    }
    return this.http.get<any[]>(`${this.apiUrl1}/filtrer-commandes`, { params });
  }



// Methodes pour obtenir les stats

getStatistiquesJournalieres(): Observable<any> {
  return this.http.get(`${this.apiUrl1}/statistiques-journalieres`);
}

getCommandesEnCours(): Observable<any> {
  return this.http.get(`${this.apiUrl1}/en-cours`);
}


getCommandesAnnuler(): Observable<any> {
  return this.http.get(`${this.apiUrl1}/annuler`);
}

getCommandesValider(): Observable<any> {
  return this.http.get(`${this.apiUrl1}/valider`);
}

getMonthlyRevenue(): Observable<MonthlyRevenue[]> {
  return this.http.get<MonthlyRevenue[]>(`${this.apiUrl1}/monthly-revenue`);
}

}
