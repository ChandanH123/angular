import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-managecategories',
  templateUrl: './managecategories.component.html',
  styleUrls: ['./managecategories.component.css']
})
export class ManagecategoriesComponent implements OnInit {
  categoryList: any[];
  
  constructor(private categoryService: CategoryService, private modalService: NgbModal)// Contructor Injection for Category.service.ts
  {

  }

  ngOnInit(): void 
  {
    this.getAllCategories();
  }

  openModal(targetModal,cat?) {
    this.modalService.open(targetModal, {
     centered: true,
     backdrop: 'static'
    });
   
    this.addCategoryForm.patchValue({
      // catId : cat.catId,
      catName : cat.catName,
    });
   }

  // get all Categorys
  getAllCategories()
  {
    return this.categoryService.getAllCategories().subscribe( (data: any) => {
    this.categoryList = data;});
  }

   // get all employees
   getCategoryByName(e:any, catName)
   {
 
     return this.categoryService.getCategoryByName(catName).subscribe( (data: any) => {
       this.categoryList = data;
     this.ngOnInit;
   });
   }

  addCategoryForm = new FormGroup({
    // catId : new FormControl(''),
    catName : new FormControl('')
  });
  
  // get all Categories
  addCategory()
  {
    return this.categoryService.addCategory(this.addCategoryForm.value).subscribe( (data: any) => {
    this.categoryList = data;
    alert("Category Has Been Added!");
    this.ngOnInit();
    this.modalService.dismissAll();
  });
  }

  // // update all Category
  // updateCategory()
  // {
  //   alert("Category Details Has been Updated!");
  //   return this.categoryService.updateCategory(this.addCategoryForm.value).subscribe( (data: any) => {
  //   this.categoryList = data;
  //   this.ngOnInit();
  // });
  // }

  // delete Category
  deleteCategory(catId: any)
  {
    alert("Category Has been Deleted!");
    window.location.reload();
    return this.categoryService.deleteCategory(catId).subscribe( (data: any) => {
  });  
  }

}
