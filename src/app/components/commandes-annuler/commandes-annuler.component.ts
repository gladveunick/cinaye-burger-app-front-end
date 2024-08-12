import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-commandes-annuler',
  templateUrl: './commandes-annuler.component.html',
  styleUrls: ['./commandes-annuler.component.css']
})
export class CommandesAnnulerComponent implements OnInit {

  statistiques: any = {};
  commandesAnnuler: any[] = [];
  p: number = 1;

  constructor(private statistiquesService: CommandeService) { }


  
  ngOnInit() {
    this.loadStatistiques();
    this.loadCommandesAnnuler();
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
  
  loadCommandesAnnuler() {
    this.statistiquesService.getCommandesAnnuler().subscribe(
      data => {
        console.log('Commandes en cours reçues:', data);
        this.commandesAnnuler = data;
      },
      error => {
        console.error('Erreur lors du chargement des commandes en cours', error);
      }
    );
  }
}
