import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { EmployeeOrdersComponent } from './employee-orders/employee-orders.component';
import { ProductsComponent } from './products/products.component';
import { QrComponent } from './qr/qr.component';
import { ManageemployeesComponent } from './manageemployees/manageemployees.component';
import { ManageresourcesComponent } from './manageresources/manageresources.component';
import { ManagecategoriesComponent } from './managecategories/managecategories.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    SignupComponent,
    ContactComponent,
    AboutComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    UpdateprofileComponent,
    ProductdetailsComponent,
    EmployeeOrdersComponent,
    ProductsComponent,
    QrComponent,
    ManageemployeesComponent,
    ManageresourcesComponent,
    ManagecategoriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
