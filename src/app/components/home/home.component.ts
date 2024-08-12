import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BurgerService } from '../../services/burger.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  burgers: any[] = [];  // Ajoutez un tableau pour stocker les burgers

  constructor(private burgerService: BurgerService, private router: Router) {}

  ngOnInit(): void {
    this.loadBurgers();
  }

  loadBurgers(): void {
    this.burgerService.getAllBurgers().subscribe(
      (data: any[]) => {
        this.burgers = data;  // Assignez les données obtenues à la variable burgers
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des burgers', error);
      }
    );
  }

  viewDetails(burgerId: number): void {
    // Redirige vers la page de détails ou commande avec l'ID du burger
    this.router.navigate(['/burger', burgerId]);
  }


}
