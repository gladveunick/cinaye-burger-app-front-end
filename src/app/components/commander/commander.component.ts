import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommandeService } from '../../services/commande.service';
import { BurgerService } from '../../services/burger.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-commander',
  templateUrl: './commander.component.html',
  styleUrls: ['./commander.component.css']
})
export class CommanderComponent implements OnInit {
  burger: any;
  commandeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private commandeService: CommandeService,
    private route: ActivatedRoute,
    private burgerService: BurgerService,
    private router: Router
  ) {
    this.commandeForm = this.fb.group({
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      quantite: [1, [Validators.required, Validators.min(1)]],
      prix_total: [0, Validators.required]
    });
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.burgerService.getBurger(id).subscribe(data => {
      this.burger = data;
      this.commandeForm.patchValue({
        prix_total: this.burger.prix
      });
    });
  }

  passerCommande() {
    if (this.commandeForm.valid) {
      const commandeData = {
        ...this.commandeForm.value,
        burger_id: this.burger.id,
        prix_total: this.burger.prix * this.commandeForm.value.quantite
      };
  
      this.commandeService.passerCommande(commandeData).subscribe(
        response => {
          // Traiter la réponse, par exemple afficher un message de succès
          console.log('Commande passée avec succès', response);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Commande passée avec succès",
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            this.router.navigate(['/']); // Redirection vers la racine
          });
        },
        error => {
          // Gérer les erreurs, par exemple afficher un message d'erreur
          console.error('Erreur lors de la commande', error);
          Swal.fire({
            position: "center",
            title: "Erreur !",
            text: "Une erreur est survenue lors de la passation de la commande.",
            icon: "error"
          });
        }
      );
    } else {
      Swal.fire({
        position: "center",
        title: "Formulaire invalide",
        text: "Veuillez remplir tous les champs correctement.",
        icon: "warning"
      });
    }
  }
}
