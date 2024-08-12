import { Component, OnInit} from '@angular/core';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-commandes-en-cours',
  templateUrl: './commandes-en-cours.component.html',
  styleUrls: ['./commandes-en-cours.component.css']
})
export class CommandesEnCoursComponent  implements OnInit{

  statistiques: any = {};
  commandesEnCours: any[] = [];
  p: number = 1;

  constructor(private statistiquesService: CommandeService) { }

  ngOnInit() {
    this.loadStatistiques();
    this.loadCommandesEnCours();
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
}
