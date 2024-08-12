import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Importer ReactiveFormsModule
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { BurgerListComponent } from './components/burger-list/burger-list.component';
import { BurgerAddComponent } from './components/burger-add/burger-add.component';
import { BurgerEditComponent } from './components/burger-edit/burger-edit.component';
import Swal from 'sweetalert2';
import { DetailsBurgerComponent } from './components/details-burger/details-burger.component';
import { CommanderComponent } from './components/commander/commander.component';
import { CommandesManagementComponent } from './components/commandes-management/commandes-management.component';
import { CommandesEnCoursComponent } from './components/commandes-en-cours/commandes-en-cours.component';
import { CommandesValiderComponent } from './components/commandes-valider/commandes-valider.component';
import { CommandesAnnulerComponent } from './components/commandes-annuler/commandes-annuler.component';
import { RecettesJournalieresComponent } from './components/recettes-journalieres/recettes-journalieres.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    BurgerListComponent,
    BurgerAddComponent,
    BurgerEditComponent,
    DetailsBurgerComponent,
    CommanderComponent,
    CommandesManagementComponent,
    CommandesEnCoursComponent,
    CommandesValiderComponent,
    CommandesAnnulerComponent,
    RecettesJournalieresComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, // Ajouter ReactiveFormsModule ici
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
