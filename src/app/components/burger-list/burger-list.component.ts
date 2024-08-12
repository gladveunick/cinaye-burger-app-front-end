import { Component, OnInit } from '@angular/core';
import { BurgerService } from 'src/app/services/burger.service';
import  Swal from 'sweetalert2';
import { CommandeService } from 'src/app/services/commande.service';



@Component({
  selector: 'app-burger-list',
  templateUrl: './burger-list.component.html',
  styleUrls: ['./burger-list.component.css']
})
export class BurgerListComponent implements OnInit {
  burgers: any[] = [];
  p: number = 1;

  statistiques: any = {};
  commandesEnCours: any[] = [];

  constructor(private burgerService: BurgerService, private statistiquesService: CommandeService) { }

  ngOnInit(): void {
    this.loadBurgers();
    this.loadStatistiques();
    this.loadCommandesEnCours();
  }

  loadBurgers(): void {
    this.burgerService.getAllBurgersList().subscribe(
      (data) => {
        this.burgers = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des burgers:', error);
      }
    );
  }

  archiveBurger(id: number): void {
    Swal.fire({
      title: "Êtes-vous sûr ?",
      text: "Vous ne pourrez pas annuler cette action !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, archivez-le !"
    }).then((result) => {
      if (result.isConfirmed) {
        this.burgerService.archiveBurger(id).subscribe(
          () => {
            this.loadBurgers(); // Recharger la liste après archivage
            Swal.fire({
              title: "Archivé !",
              text: "Votre burger a été archivé.",
              icon: "success"
            });
          },
          (error) => {
            console.error('Erreur lors de l\'archivage du burger:', error);
            Swal.fire({
              title: "Error!",
              text: "There was an error deleting the file.",
              icon: "error"
            });
          }
        );
      }
    });
  }
  

  restoreBurger(id: number): void {
    this.burgerService.restoreBurger(id).subscribe(
      () => {
        this.loadBurgers(); // Recharger la liste après restauration
      },
      (error) => {
        console.error('Erreur lors de la restauration du burger:', error);
      }
    );
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
