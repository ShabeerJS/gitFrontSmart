// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminsideComponent } from './adminside/adminside.component';
import { RationCardComponent } from './ration-card/ration-card.component';
import { FixedproductsComponent } from '../fixedproducts/fixedproducts/fixedproducts.component';
import { LoginComponenetComponent } from './login-componenet/login-componenet.component';
import { LogoutNavbarComponent } from './logout-navbar/logout-navbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AllproductsComponent } from './products/allproducts/allproducts.component';
import { ProductsComponent } from './logout-navbar/products/products/products.component';
import { UpdateproductComponent } from './products/updateproduct/updateproduct.component';
import { ViewproductComponent } from './products/viewproduct/viewproduct.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddproductsComponent } from './products/addproducts/addproducts.component';
import { AllfixedproductsComponent } from './fixedproducts/allfixedproducts/allfixedproducts.component';
import { AddfixedproductsComponent } from './fixedproducts/addfixedproducts/addfixedproducts.component';
import { UpdatefixedproductsComponent } from './fixedproducts/updatefixedproducts/updatefixedproducts.component';
import { ViewfixedproductsComponent } from './fixedproducts/viewfixedproducts/viewfixedproducts.component';
import { AllrationcardComponent } from './rationCard/allrationcard/allrationcard.component';
import { AddrationcardComponent } from './rationCard/addrationcard/addrationcard.component';
import { AllrationcardmemberComponent } from './rationCardMember/allrationcardmember/allrationcardmember.component';
import { AddrationcardmemberComponent } from './rationCardMember/addrationcardmember/addrationcardmember.component';
import { AddaddressComponent } from './address/addaddress/addaddress.component';
import { ViewrationcardComponent } from './rationCard/viewrationcard/viewrationcard.component';
import { UpdateorderdetailsComponent } from './orderdetails/updateorderdetails/updateorderdetails.component';
import { AllorderdetailsComponent } from './orderdetails/allorderdetails/allorderdetails.component';
import { CardDetailsComponent } from './UserSide/card-details/card-details.component';
import { CartComponent } from './UserSide/cart/cart.component';
import { CheckproductsComponent } from './UserSide/checkproducts/checkproducts.component';
import { PlaceOrderComponent } from './UserSide/place-order/place-order.component';
import { UserSideComponent } from './UserSide/user-side/user-side.component';
import { Addrationcardmember1Component } from './rationCardMember/addrationcardmember1/addrationcardmember1.component';
import { MyorderDetailsComponent } from './UserSide/myorder-details/myorder-details.component';
import { MyprofileComponent } from './UserSide/myprofile/myprofile.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';


const routes: Routes = [
  {path:'',component: AdminloginComponent},
  // {path:'',redirectTo:'NavbarComponent',pathMatch:'full'},
  
  {path: 'LoginComponent',component: LoginComponenetComponent},
  // {path:'ReactiveFormComponent',component:ReactiveFormComponent},

  {path:'LogoutNavbarComponent',component:LogoutNavbarComponent},
  {path:'ProductsCompoComponent',component:ProductsComponent},
  {path:'FixedProductsComponent',component:FixedproductsComponent},
  {path:'rationCardComponent',component:RationCardComponent},
  {path:'AdminLoginComponent',component:AdminloginComponent},
  {path:'AdminsignupComponent',component:AdminsignupComponent},
  {path:'AdminsideComponent',component:AdminsideComponent},
  {path:'AllProductsComponent',component:AllproductsComponent},
  {path:'UpdateproductComponent/:productId',component:UpdateproductComponent},
  {path:'ViewproductComponent/:productId',component:ViewproductComponent},
  {path:'AddproductsComponent',component:AddproductsComponent},
  {path:'AllfixedproductsComponent',component:AllfixedproductsComponent},
  {path:'AddfixedproductsComponent',component:AddfixedproductsComponent},
  {path:'Updatefixedproducts/:productId',component:UpdatefixedproductsComponent},
  {path:'ViewfixedproductsComponent',component:ViewfixedproductsComponent},

{path:'AllrationcardComponent',component:AllrationcardComponent},
{path:'AddrationcardComponent',component:AddrationcardComponent},
{path:'ViewrationcardComponent/:rationCardNo',component:ViewrationcardComponent},
{path:'AllrationcardmemberComponent',component:AllrationcardmemberComponent},
{path:'AddrationcardmemberComponent',component:AddrationcardmemberComponent},
// {path:'AddaddressComponent',component:AddaddressComponent},
{path:'AddaddressComponent/:rationId',component:AddaddressComponent},
{path:'AllorderdetailsComponent',component:AllorderdetailsComponent},
{path:'UpdateorderdetailsComponent/:orderId',component:UpdateorderdetailsComponent},
//New=========================================
{path:'Addrationcardmember1Component/:rationId',component:Addrationcardmember1Component},
//========================UserSide Component=========================
{path:'CardDetailsComponent',component:CardDetailsComponent},
{path:'CartComponent',component:CartComponent},
{path:'CheckproductsComponent',component:CheckproductsComponent},
{path:'PlaceOrderComponent',component:PlaceOrderComponent},
{path:'UserSideComponent',component:UserSideComponent},
{path:'MyorderDetailsComponent',component:MyorderDetailsComponent},
{path:'MyprofileComponent',component:MyprofileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingCompo=[,,NavbarComponent,AdminloginComponent,
  AllproductsComponent,RationCardComponent,FixedproductsComponent,LoginComponenetComponent,ProductsComponent,
  ReactiveFormsModule,AddproductsComponent,
     LogoutNavbarComponent ,AdminsideComponent,,UpdateproductComponent,ViewproductComponent,
     AllfixedproductsComponent,AddfixedproductsComponent,UpdatefixedproductsComponent
     ,ViewfixedproductsComponent,AllrationcardComponent,AddrationcardComponent
     ,AllrationcardmemberComponent,AddrationcardmemberComponent,AddaddressComponent,
     UpdateorderdetailsComponent,AllorderdetailsComponent,
     CardDetailsComponent,CartComponent,
     CheckproductsComponent,PlaceOrderComponent,Addrationcardmember1Component,MyorderDetailsComponent,MyprofileComponent,AdminsignupComponent]