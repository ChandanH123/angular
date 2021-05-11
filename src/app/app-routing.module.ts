import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { EmployeeOrdersComponent } from './employee-orders/employee-orders.component';
import { ProductsComponent } from './products/products.component';
import { QrComponent } from './qr/qr.component';
import { ManageemployeesComponent } from './manageemployees/manageemployees.component';
import { ManageresourcesComponent } from './manageresources/manageresources.component';
import { ManagecategoriesComponent } from './managecategories/managecategories.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'about', component: AboutComponent},
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent,
    children: [
      {path: 'manageemployees',component:ManageemployeesComponent},
      {path: 'manageresources',component:ManageresourcesComponent},
      {path: 'managecategories',component:ManagecategoriesComponent} 
  ]},
  { path:'updateprofile/:id',component:UpdateprofileComponent},
  { path:'productdetails/:empId/:data',component:ProductdetailsComponent},
  { path:'employeeorders/:id/:username',component:EmployeeOrdersComponent},
  { path:'products',component:ProductsComponent},
  { path:'qr',component:QrComponent}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
