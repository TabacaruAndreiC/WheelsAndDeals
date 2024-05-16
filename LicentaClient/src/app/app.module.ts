import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CardComponent } from './cars/car-card/card.component';
import { CardListComponent } from './cars/cars-list/card-list.component';
import { CarsService } from './services/cars.service';
import { AddCarComponent } from './cars/add-car/add-car.component'; 
import { CarDetailComponent } from './cars/car-detail/car-detail.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { UserServiceService } from './services/user-service.service';
import { AlertyfyService } from './services/alertify.service';
import { AuthentificationService } from './services/authentification.service';
import { CarDetailResolverService } from './cars/car-detail/car-detail-resolver.service';
import { FilterPipe } from './Pipes/filter.pipe';
import { SortPipe } from './Pipes/sort.pipe';


const appRoutes: Routes = [
  {path: '', component: CardListComponent},
  {path: 'add-car', component: AddCarComponent},
  {path: 'rent-car', component: CardListComponent},
  {path: 'car-detail/:id', component: CarDetailComponent, resolve: {car: CarDetailResolverService}},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  //{path: '**', component: CardListComponent}
];

@NgModule({
  declarations: [					
    AppComponent,
      NavBarComponent,
      CardComponent,
      CardListComponent, 
      AddCarComponent,
      CarDetailComponent,
      LoginComponent,
      RegisterComponent,
      FilterPipe,
      SortPipe
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot()
  ],
  providers: [
    CarsService,
    UserServiceService,
    AlertyfyService,
    AuthentificationService,
    CarDetailResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
