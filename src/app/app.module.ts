import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
import { NotfoundComponent } from './notfound/notfound.component';
// import { PeopleComponent } from './people/people.component';
import { RegiesterComponent } from './regiester/regiester.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
// import { WatchPipe } from './watch.pipe';
import { pipe } from 'rxjs';
import { MedaiItemComponent } from './medai-item/medai-item.component';
import { SeePipe } from './see.pipe';
import { SeemorePipe } from './seemore.pipe';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BtnupComponent } from './btnup/btnup.component';
import { SearchPipe } from './search.pipe';






// import { MoviedetailsComponent } from './moviedetails/moviedetails.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    MoviesComponent,
    TvComponent,
    MedaiItemComponent,
    NotfoundComponent,
    // PeopleComponent,
    RegiesterComponent,
    DetailsComponent,
    SeePipe,
    SeemorePipe,
    HeaderComponent,
    BtnupComponent,
    SearchPipe,

    // WatchPipe,




  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    CarouselModule,



    // WatchPipe,


],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
