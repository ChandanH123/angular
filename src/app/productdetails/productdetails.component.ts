import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  res:any
  empId: any;
  errorMessage='';
  constructor(private ar : ActivatedRoute,  private authService: AuthService, public router: Router)
  {
      let data=this.ar.snapshot.params['data'];
      this.res = JSON.parse(data);
      let id=this.ar.snapshot.params['empId'];
      this.empId = id;
      console.log(this.empId);
  }
  ngOnInit(): void {
  }

  buyResource(resId:any,catId:any)
  {
    this.authService.addOrder(resId, catId.catId, this.empId).subscribe(
      data => {
        console.log(data);
        alert("Order Added Successfully!");
        this.router.navigate(['/employeeorders',this.empId]);
      },
      err => {
        this.errorMessage = err.error.message;
      }
    );
  }
  }
