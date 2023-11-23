import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ReadlistComponent } from './readlist/readlist.component';
import { GlimpseComponent } from './glimpse/glimpse.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'readlist', component: ReadlistComponent },
  { path: 'glimpse', component: GlimpseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
