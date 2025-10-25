import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Catalog } from './catalog/catalog';
import { CartComponent } from './cart-component/cart-component';
import { SignInComponent } from './user/sign-in/sign-in.component';

const routes: Routes = [


  {
    path:'home',
    component: Home,
    title:"Home -Joe's Robot Shop"
  },

   {
    /*
    this line below was for Accessing Route Parameters in Angular
    path:'catalog/:filter',
    */
   // this line below was for query string Parameters in Angular
   path:'catalog',
    component: Catalog,
    title:"Catalog -Joe's Robot Shop"
  },

    {
    path:'cart-component',
    component: CartComponent,
    title:"Cart -Joe's Robot Shop"
  },
  {
    path:'sign-In',
    component: SignInComponent,
    
  },
   {
    path:'',
    redirectTo:'/home',
    pathMatch:'full' // if you use prefix it will always redirect to home and the order matters

  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 