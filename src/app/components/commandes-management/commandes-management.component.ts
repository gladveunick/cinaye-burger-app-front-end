import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../../services/commande.service';

@Component({
  selector: 'app-commandes-management',
  templateUrl: './commandes-management.component.html',
  styleUrls: ['./commandes-management.component.css']
})
export class CommandesManagementComponent implements OnInit {
  commandes: any[] = [];
  statistiques: any = {};
  selectedStatistique: string = '';
  filters = {
    burger_id: '',
    date: '',
    status: '',
    client: ''
  };


  p: number = 1;
 
  commandesEnCours: any[] = [];
  constructor(private commandeService: CommandeService , private statistiquesService: CommandeService) { }

  ngOnInit(): void {
    this.loadCommandes();
    // this.loadStatistiques();
    this.loadStatistiques();
    this.loadCommandesEnCours();
  }



  loadCommandes() {
    this.commandeService.getAllCommandes().subscribe(data => {
      this.commandes = data;
    });
  }

  applyFilters() {
    this.commandeService.getFilteredCommandes(this.filters).subscribe(data => {
      this.commandes = data;
    });
  }
  
  annulerCommande(id: number) {
    this.commandeService.annulerCommande(id).subscribe(response => {
      console.log('Commande annulée avec succès', response);
      this.loadCommandes(); // Recharger les commandes après l'annulation
    }, error => {
      console.error('Erreur lors de l\'annulation de la commande', error);
    });
  }

  terminerCommande(id: number) {
    this.commandeService.terminerCommande(id).subscribe(response => {
      console.log('Commande terminée avec succès', response);
      this.loadCommandes(); // Recharger les commandes après la mise à jour
    }, error => {
      console.error('Erreur lors de la terminaison de la commande', error);
    });
  }

  payerCommande(id: number) {
    this.commandeService.payerCommande(id).subscribe(response => {
      console.log('Commande marquée comme payée', response);
      this.loadCommandes(); // Recharger les commandes après le paiement
    }, error => {
      console.error('Erreur lors du paiement de la commande', error);
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

  
}
