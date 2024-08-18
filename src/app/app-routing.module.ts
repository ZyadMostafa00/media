import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegiesterComponent } from './regiester/regiester.component';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
import { PeopleComponent } from './people/people.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
// import { AuthGuard } from './auth.guard';
import { DetailsComponent } from './details/details.component';
import { CommonModule } from '@angular/common';



// canActivate:[AuthGuard]
const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full' },
  {path:'home',   component:HomeComponent},
  {path:'about'  , component:AboutComponent},
  {path:'movies' , component:MoviesComponent},
  {path:'tv' , component:TvComponent},
  {path:'people' , component:PeopleComponent},
  {path:'details/:id/:media_type'  , component:DetailsComponent},
  {path:'login' , component:LoginComponent},
  { path: 'regiester', component: RegiesterComponent },
  { path: '**', component: NotfoundComponent },


]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
