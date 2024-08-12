import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BurgerService } from 'src/app/services/burger.service';
import { Burger } from 'src/app/model/burger.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-burger-edit',
  templateUrl: './burger-edit.component.html',
  styleUrls: ['./burger-edit.component.css'],
})
export class BurgerEditComponent implements OnInit {
  burger: Burger = {
    nom: '',
    prix: 0,
    description: '',
    archive: false,
  };
  imageUrl: string | ArrayBuffer | null = '';

  constructor(
    private burgerService: BurgerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.burgerService.getBurger(id).subscribe(
      (burger) => {
        this.burger = burger;
        this.imageUrl = `http://localhost:8000/images/${burger.image}`;
      },
      (error) =>
        console.error('Erreur lors de la récupération du burger:', error)
    );
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.burger.image = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result;
      };
      reader.readAsDataURL(file);
      console.log('Nouvelle image sélectionnée:', file);
    }
  }

  onSubmit() {
    if (!this.burger.id) {
      console.error('L\'id du burger est manquant.');
      Swal.fire({
        position: "center",
        title: "Erreur !",
        text: "L'identifiant du burger est manquant.",
        icon: "error"
      });
      return;
    }
  
    const formData = new FormData();
    formData.append('nom', this.burger.nom);
    formData.append('prix', this.burger.prix.toString());
    formData.append('description', this.burger.description || '');
  
    if (this.burger.image instanceof File) {
      formData.append('image', this.burger.image, this.burger.image.name);
    }
  
    this.burgerService.updateBurger(this.burger.id, formData).subscribe(
      (response) => {
        console.log('Burger mis à jour:', response);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Burger mis à jour avec succès",
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          this.router.navigate(['/burgers']); // Redirection vers la page des burgers
        });
      },
      (error) => {
        console.error('Erreur lors de la mise à jour du burger:', error);
        Swal.fire({
          position: "center",
          title: "Erreur !",
          text: "Une erreur est survenue lors de la mise à jour du burger.",
          icon: "error"
        });
      }
    );

  }
}
