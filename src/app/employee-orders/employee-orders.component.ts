import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-employee-orders',
  templateUrl: './employee-orders.component.html',
  styleUrls: ['./employee-orders.component.css']
})
export class EmployeeOrdersComponent implements OnInit {
  id:any;
  orderList: any;
  isLoggedIn=false;
  empId: any;
  role: any;
  username: any;
 
  constructor(private ar : ActivatedRoute, public router: Router, private authService: AuthService,  private tokenStorageService: TokenStorageService)
  {
      let id=this.ar.snapshot.params['id'];
      this.id = id;
      let username=this.ar.snapshot.params['username'];
      this.username = username;
      console.log(username);
  }
  ngOnInit(): void 
  {
    this.getAllOrdersByEmployeeId();

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.empId = user.id;
      console.log(user.roles);
      this.role = user.roles[0];
      console.log(this.role);
    }
  }


  getAllOrdersByEmployeeId()
  {
    return this.authService.getAllOrdersByEmployeeId(this.id).subscribe( (data: any) => {
      this.orderList= data;});
  }

  selectedProduct(res:any)
  {
    this.router.navigate(['/productdetails',this.empId,JSON.stringify(res)]);
  }
}
