import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeService } from '../../Service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  title="Hello";

  employeeList: any[];
  
  constructor(private employeeService: EmployeeService, private modalService: NgbModal)// Contructor Injection for employee.service.ts
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
      empName : emp.empName,
      mobileNumber : emp.mobileNumber,
      email : emp.email,
      location: emp.location
    });
   }

  // get all employees
  getAllEmployees()
  {
    return this.employeeService.getAllEmployees().subscribe( (data: any) => {
    this.employeeList = data;});
  }


  addEmployeeForm = new FormGroup({
    empId : new FormControl(''),
    empName : new FormControl(''),
    mobileNumber : new FormControl(''),
    email : new FormControl(''),
    location: new FormControl('')
  });
  
  // get all employees
  addEmployee()
  {
    alert("Employee Has Been Added!");
    return this.employeeService.addEmployee(this.addEmployeeForm.value).subscribe( (data: any) => {
    this.employeeList = data;
    this.ngOnInit();
  });
  }

  // get all employees
  updateEmployee()
  {
    alert("Employee Details Has been Updated!");
    return this.employeeService.updateEmployee(this.addEmployeeForm.value).subscribe( (data: any) => {
    this.employeeList = data;
    this.ngOnInit();
  });
  }

  // delete all employees
  deleteEmployee(empId: any)
  {
    alert("Employee Has been Deleted!");
    return this.employeeService.deleteEmployee(empId).subscribe( (data: any) => {
    this.ngOnInit();
  });  
  }
}
