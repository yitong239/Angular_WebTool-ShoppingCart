import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { CartComponent } from './cart/cart.component';
import { ProductService } from './product.service';
import { UserService } from './user.service';
import { DataService } from './data.service';
import { ProductComponent } from './product/product.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    LoginComponent,
    MainComponent,
    CartComponent,
    ProductComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'logout', component: LogoutComponent },

      { path: 'main', component: MainComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'cart', component:CartComponent },

    ])
  ],
  providers: [ProductService, UserService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
