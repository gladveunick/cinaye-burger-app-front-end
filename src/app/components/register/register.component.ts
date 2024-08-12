import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  passwordVisible: boolean = false; // Pour gérer la visibilité du mot de passe

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      telephone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mot_de_passe: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.registerForm.valid) {
      const { nom, prenom, telephone, email, mot_de_passe } = this.registerForm.value;
      this.authService.register(nom, prenom, telephone, email, mot_de_passe).subscribe({
        next: response => {
          console.log('Inscription réussie', response);
          this.router.navigate(['/login']);
        },
        error: err => {
          console.error('Erreur lors de l\'inscription', err);
          alert('Erreur lors de l\'inscription. Veuillez vérifier vos informations.');
        }
      });
    } else {
      console.log('Form invalid');
      alert('Veuillez remplir correctement tous les champs.');
    }
  }

  closeForm(): void {
    // Logic to close the form (if needed)
    console.log('Form closed');
  }

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
