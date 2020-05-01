import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogingComponent } from './loging/loging.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'home', loadChildren: './home/home.module#HomeModule'},
  {path: 'login', component: LogingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
