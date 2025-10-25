import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { Catalog } from './catalog/catalog';
import { SiteHeader } from './site-header/site-header';
import { ProductDetails } from './product-details/product-details';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart-component/cart-component';
import { SignInComponent } from './user/sign-in/sign-in.component';




@NgModule({
  declarations: [
    App,
    Home,
    Catalog,
    SiteHeader,
    ProductDetails,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SignInComponent,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
