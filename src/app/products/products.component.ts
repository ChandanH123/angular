import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  content?: string;
  resourceList: any;
  empId: any;
  isLoggedIn=false;
  username: any;


  constructor(public router: Router, private userService: UserService, private authService: AuthService, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.userService.getUserBoard().subscribe(
      data => {
        this.content = data;
        console.log(data);
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.empId = user.id;
      this.username=user.username;
    }

this.getAllResources();

  }

  // get all employees
  getAllResources()
  {
    console.log("Inside user component's getAllResources()")
    return this.authService.getAllResources().subscribe( (data: any) => {
    this.resourceList = data;});
  }


  selectedProduct(res:any)
  {
    this.router.navigate(['/productdetails', this.empId, this.username, JSON.stringify(res)]);
  }
}
