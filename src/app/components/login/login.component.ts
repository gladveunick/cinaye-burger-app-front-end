import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  passwordVisible: boolean = false; // Pour gérer la visibilité du mot de passe

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      mot_de_passe: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, mot_de_passe } = this.loginForm.value;
      this.authService.login(email, mot_de_passe).subscribe({
        next: response => {
          console.log('Login response', response);
          this.authService.setToken(response.token);
          this.router.navigate(['/dashboard']);
        },
        error: err => {
          console.error('Erreur lors de la connexion', err);
          alert('Erreur lors de la connexion. Veuillez vérifier vos informations.');
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

  goToRegister(): void {
    this.router.navigate(['/register']);
  }
}
