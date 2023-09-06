import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponenetComponent } from './login-componenet/login-componenet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogoutNavbarComponent } from './logout-navbar/logout-navbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './logout-navbar/products/products/products.component';
import { AllMaterialModules } from 'src/material.module';
import { A11yModule } from '@angular/cdk/a11y';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

import { MatSliderModule } from '@angular/material/slider';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminsideComponent } from './adminside/adminside.component';
import { RationCardComponent } from './ration-card/ration-card.component';
import { FixedproductsComponent } from '../fixedproducts/fixedproducts/fixedproducts.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { LogoutnavbarComponent } from './logoutnavbar/logoutnavbar.component';
import { AllproductsComponent } from './products/allproducts/allproducts.component';
import { UpdateproductComponent } from './products/updateproduct/updateproduct.component';
import { ViewproductComponent } from './products/viewproduct/viewproduct.component';
import { AddproductsComponent } from './products/addproducts/addproducts.component';
import { FormsModule } from '@angular/forms';
import { MatDrawerContainer } from '@angular/material/sidenav';
import {MatSidenavModule} from '@angular/material/sidenav';

//main thing=========================
import { HttpClientModule } from '@angular/common/http';
import{CookieService} from 'ngx-cookie-service';
// import { UpdatefixedproductsComponent } from './fixedproducts/updatefixedproducts/updatefixedproducts.component';
import { AddfixedproductsComponent } from './fixedproducts/addfixedproducts/addfixedproducts.component';
import { UpdatefixedproductsComponent } from './fixedproducts/updatefixedproducts/updatefixedproducts.component';
import { AllfixedproductsComponent } from './fixedproducts/allfixedproducts/allfixedproducts.component';
import { ViewfixedproductsComponent } from './fixedproducts/viewfixedproducts/viewfixedproducts.component';
import { AddrationcardComponent } from './rationCard/addrationcard/addrationcard.component';
import { UpdaterationcardComponent } from './rationCard/updaterationcard/updaterationcard.component';
import { ViewrationcardComponent } from './rationCard/viewrationcard/viewrationcard.component';
import { AddrationcardmemberComponent } from './rationCardMember/addrationcardmember/addrationcardmember.component';
import { UpdaterationcardmemberComponent } from './rationCardMember/updaterationcardmember/updaterationcardmember.component';
import { ViewrationcardmemberComponent } from './rationCardMember/viewrationcardmember/viewrationcardmember.component';
import { AddaddressComponent } from './address/addaddress/addaddress.component';
import { UpdateaddressComponent } from './address/updateaddress/updateaddress.component';
import { ViewaddressComponent } from './address/viewaddress/viewaddress.component';
import { AllorderdetailsComponent } from './orderdetails/allorderdetails/allorderdetails.component';
import { UpdateorderdetailsComponent } from './orderdetails/updateorderdetails/updateorderdetails.component';
import { VieworderdetailsComponent } from './orderdetails/vieworderdetails/vieworderdetails.component';
import { AllrationcardmemberComponent } from './rationCardMember/allrationcardmember/allrationcardmember.component';
import { AllrationcardComponent } from './rationCard/allrationcard/allrationcard.component';
import { UserSideComponent } from './UserSide/user-side/user-side.component';
import { CardDetailsComponent } from './UserSide/card-details/card-details.component';
import { CartComponent } from './UserSide/cart/cart.component';
import { PlaceOrderComponent } from './UserSide/place-order/place-order.component';
import { CheckproductsComponent } from './UserSide/checkproducts/checkproducts.component';
import { Addrationcardmember1Component } from './rationCardMember/addrationcardmember1/addrationcardmember1.component';
import { MyorderDetailsComponent } from './UserSide/myorder-details/myorder-details.component';
import { MyOrderedproductsComponent } from './UserSide/my-orderedproducts/my-orderedproducts.component';
import { MyprofileComponent } from './UserSide/myprofile/myprofile.component';
// import{CookieService} from 'ngx-cookie-service';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchOrderPipe } from './search-order.pipe';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponenetComponent,
    LogoutNavbarComponent,
    NavbarComponent,
    SearchOrderPipe,
    
    ProductsComponent,
    AdminloginComponent,
    AdminsideComponent,
    RationCardComponent,
    FixedproductsComponent,
    LogincomponentComponent,
    LogoutnavbarComponent,
    AllproductsComponent,
    UpdateproductComponent,
    ViewproductComponent,
    AddproductsComponent,
    UpdatefixedproductsComponent,
    AddfixedproductsComponent,
    AllfixedproductsComponent,
    ViewfixedproductsComponent,
    AddrationcardComponent,
    UpdaterationcardComponent,
    ViewrationcardComponent,
    AddrationcardmemberComponent,
    UpdaterationcardmemberComponent,
    ViewrationcardmemberComponent,
    AddaddressComponent,
    UpdateaddressComponent,
    ViewaddressComponent,
    AllorderdetailsComponent,
    UpdateorderdetailsComponent,
    VieworderdetailsComponent,
    AllrationcardmemberComponent,
    AllrationcardComponent,
    UserSideComponent,
    CardDetailsComponent,
    CartComponent,
    PlaceOrderComponent,
    CheckproductsComponent,
    Addrationcardmember1Component,
    MyorderDetailsComponent,
    MyOrderedproductsComponent,
    MyprofileComponent,
    SearchOrderPipe,
    AdminsignupComponent,
    
  ],
  imports: [
   
    HttpClientModule,
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    AllMaterialModules,
    BrowserAnimationsModule,
    A11yModule,
    CdkAccordionModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
