import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ServicesComponent} from "./pages/services/services.component";
import {ProjectsComponent} from "./pages/projects/projects.component";
import {ContactComponent} from "./pages/contact/contact.component";

const routes: Routes = [
  {path :'', redirectTo : '/home', pathMatch: 'full'},
  {path :'home', component: HomeComponent},
  {path :'services', component: ServicesComponent},
  {path :'projects', component: ProjectsComponent},
  {path :'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
