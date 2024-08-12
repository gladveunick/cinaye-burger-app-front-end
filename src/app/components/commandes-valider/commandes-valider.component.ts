import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/services/commande.service';


@Component({
  selector: 'app-commandes-valider',
  templateUrl: './commandes-valider.component.html',
  styleUrls: ['./commandes-valider.component.css']
})
export class CommandesValiderComponent implements OnInit {

  statistiques: any = {};
  commandesValider: any[] = [];
  p: number = 1;

  constructor(private statistiquesService: CommandeService) { }


  
  ngOnInit() {
    this.loadStatistiques();
    this.loadCommandesValider();
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
  
  loadCommandesValider() {
    this.statistiquesService.getCommandesValider().subscribe(
      data => {
        console.log('Commandes validees reçues:', data);
        this.commandesValider = data;
      },
      error => {
        console.error('Erreur lors du chargement des commandes validees', error);
      }
    );
  }

}
