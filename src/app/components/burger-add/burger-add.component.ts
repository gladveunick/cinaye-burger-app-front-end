import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BurgerService } from 'src/app/services/burger.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-burger-add',
  templateUrl: './burger-add.component.html',
  styleUrls: ['./burger-add.component.css']
})
export class BurgerAddComponent {
  burger: any = {
    nom: '',
    prix: '',
    image: null,
    description: ''
  };
  imageUrl: string | ArrayBuffer | null = '';

  constructor(private burgerService: BurgerService, private router: Router) {}

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.burger.image = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    this.burgerService.addBurger(this.burger).subscribe(
      () => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Burger ajouté",
          showConfirmButton: false,
          timer: 500
        });
        this.router.navigate(['/burgers']);
      },
      error => {
        console.error(error);
        Swal.fire({
          title: "Erreur !",
          text: "Une erreur est survenue lors de l'ajout du burger.",
          icon: "error"
        });
      }
    );
  }

}

