import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';


@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {
  id: any;
  emp?: any;

  form: any = {
    mobilenumber: null,
    address: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  


  constructor(private ar : ActivatedRoute, public router: Router, private authService: AuthService)
  {
      let id=this.ar.snapshot.params['id'];
      this.id = id;
  }
  
  ngOnInit(): void {
    this.getEmployeeById();
  }


  getEmployeeById()
  {
    return this.authService.getEmployeeById(this.id).subscribe( (data: any) => {
      this.emp= data;});
  }

  onSubmit(): void {
    const { mobilenumber, address } = this.form;

    this.authService.updateProfile(this.id, mobilenumber, address).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        alert("Profile Updated Successfully!");
        window.location.reload();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
        console.log(this.errorMessage);
      }
    );
  }

}
