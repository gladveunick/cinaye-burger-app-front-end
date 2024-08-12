import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { BurgerListComponent } from './components/burger-list/burger-list.component';
import { BurgerAddComponent } from './components/burger-add/burger-add.component';
import { BurgerEditComponent } from './components/burger-edit/burger-edit.component';
import { DetailsBurgerComponent} from './components/details-burger/details-burger.component';
import { CommanderComponent} from './components/commander/commander.component';
import { CommandesManagementComponent } from './components/commandes-management/commandes-management.component';
import { CommandesEnCoursComponent } from './components/commandes-en-cours/commandes-en-cours.component';
import { CommandesAnnulerComponent } from 'src/app/components/commandes-annuler/commandes-annuler.component';
import { CommandesValiderComponent } from 'src/app/components/commandes-valider/commandes-valider.component';


const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'burgers', component: BurgerListComponent, canActivate: [AuthGuard]},
  { path: 'add', component: BurgerAddComponent , canActivate: [AuthGuard]},
  { path: 'edit/:id', component: BurgerEditComponent , canActivate: [AuthGuard]},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'burger/:id', component: DetailsBurgerComponent },
  { path: 'commander/:id', component: CommanderComponent },
  { path: 'commandes-management', component: CommandesManagementComponent , canActivate: [AuthGuard]},
  { path: 'commandes-en-cours', component: CommandesEnCoursComponent , canActivate: [AuthGuard]},
  { path: 'commandes-annuler', component: CommandesAnnulerComponent , canActivate: [AuthGuard]},
  { path: 'commandes-valider', component: CommandesValiderComponent , canActivate: [AuthGuard]},

  //{ path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
