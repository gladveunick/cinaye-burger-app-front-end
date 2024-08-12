import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommandeService } from 'src/app/services/commande.service';
import {Chart, registerables} from 'chart.js/auto';
import { HttpClient } from '@angular/common/http';
import { MonthlyRevenue } from 'src/app/model/monthly-revenue';
import { AuthService } from 'src/app/services/auth.service';


Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  chart: any;

  statistiques: any = {};
  commandesEnCours: any[] = [];

  constructor(private commandeService: CommandeService, private http: HttpClient, private statistiquesService: CommandeService, private authService: AuthService) { }

  ngOnInit(): void {
    this.getRevenueData();
    this.loadStatistiques();
    this.loadCommandesEnCours();
  }


  getRevenueData() {
    this.commandeService.getMonthlyRevenue().subscribe(
      (data) => {
        const months = data.map(item => item.month);
        const revenues = data.map(item => item.revenue);
        this.createChart(months, revenues);
      },
      (error) => {
        console.error('Erreur lors de la récupération des données:', error);
      }
    );
  }

  createChart(labels: string[], data: number[]) {
    this.chart = new Chart('revenueChart', {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'CA Mensuel',
          data: data,
          backgroundColor:[
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor:  [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }


  loadStatistiques() {
    this.statistiquesService.getStatistiquesJournalieres().subscribe(
      data => {
        console.log('Statistiques reçues:', data);
        this.statistiques = data;
      },
      error => {
        console.error('Erreur lors du chargement des statistiques', error);
      }
    );
  }
  
  loadCommandesEnCours() {
    this.statistiquesService.getCommandesEnCours().subscribe(
      data => {
        console.log('Commandes en cours reçues:', data);
        this.commandesEnCours = data;
      },
      error => {
        console.error('Erreur lors du chargement des commandes en cours', error);
      }
    );
  }

  
  onLogout(): void {
    this.authService.logout().subscribe(
      response => {
        console.log('Déconnexion réussie', response);
        this.authService.clearToken();
        // Rediriger vers la page de connexion ou une autre page
      },
      error => {
        console.error('Erreur de déconnexion', error);
      }
    );
  }
}




