import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-manageemployees',
  templateUrl: './manageemployees.component.html',
  styleUrls: ['./manageemployees.component.css']
})
export class ManageemployeesComponent implements OnInit {

  employeeList: any[];
  content?: any;
  isLoggedIn=false;
  
  constructor(private employeeService: EmployeeService, private modalService: NgbModal, public router: Router)// Contructor Injection for employee.service.ts
  {

  }

  ngOnInit(): void 
  {
    this.getAllEmployees();
  }

  openModal(targetModal, emp?) {
    this.modalService.open(targetModal, {
     centered: true,
     backdrop: 'static'
    });
   
    this.addEmployeeForm.patchValue({
      empId : emp.empId,
      username : emp.username,
      mobileNumber : emp.mobileNumber,
      email : emp.email,
      location: emp.location
    });
   }


  addEmployeeForm = new FormGroup({
    empId : new FormControl(''),
    username : new FormControl(''),
    mobileNumber : new FormControl(''),
    email : new FormControl(''),
    location: new FormControl('')
  });
  


   // get all employees
   getAllEmployees()
   {
     return this.employeeService.getAllEmployees().subscribe( (data: any) => {
     this.employeeList = data;});
   }

    // get all employees
  getEmployeeByName(e:any, username)
  {

    console.log(username);
    return this.employeeService.getEmployeeByName(username).subscribe( (data: any) => {
      this.employeeList = data;
    console.log(this.employeeList);
    this.ngOnInit;
  });
  }


  // delete all employees
  deleteEmployee(empId: any)
  {
    alert("Employee Has been Deleted!");
    window.location.reload();
    return this.employeeService.deleteEmployee(empId).subscribe( (data: any) => {
  });  
  }
}
