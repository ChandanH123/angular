import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from '../managecategories/category.service';
import { ResourceService } from './resource.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-manageresources',
  templateUrl: './manageresources.component.html',
  styleUrls: ['./manageresources.component.css']
})
export class ManageresourcesComponent implements OnInit {
  resourceList: any[];
  categoryList: any;
  imageUrl:any
  currentInput='';
  imageSrc='macbook.jpg';

  // imageSrc: string;
  
  constructor(private http: HttpClient, private resourceService: ResourceService, private modalService: NgbModal, private categoryService: CategoryService)// Contructor Injection for Resource.service.ts
  {

  }

  ngOnInit(): void 
  {
    this.getAllCategories();
    this.getAllResources();
  }

  openModal(targetModal,res?:any) {
    this.modalService.open(targetModal, {
     centered: true,
     backdrop: 'static'
    });

 
   
    this.category.patchValue({
      catId: res.category.catId
    });

    this.addResourceForm.patchValue({
      category:this.category,
      resDate: res.resDate,
      resDescription: res.resDescription,
      resId: res.resId,
      resPrice: res.resPrice,
      resTitle: res.resTitle,
      resImage:res.resImage
    });
   }


   // get all Categorys
  getAllCategories()
  {
    return this.categoryService.getAllCategories().subscribe( (data: any) => {
    this.categoryList = data;});
  }
  

  // get all Resources
  getAllResources()
  {
    return this.resourceService.getAllResources().subscribe( (data: any) => {
    this.resourceList = data;});
  }

   // get all resources by catId
   getResourceByCategoryId(e:any, catId:number)
   {
 
    console.log(catId);
     return this.resourceService.getResourceByCategoryId(catId).subscribe( (data: any) => {
       this.resourceList = data;
     this.ngOnInit;
   });
   }

   category=new FormGroup({
     catId:new FormControl('')
   });


  addResourceForm = new FormGroup({
      resDate: new FormControl(new Date()),
      resDescription: new FormControl(''),
      resId: new FormControl(0),
      resPrice: new FormControl(''),
      resTitle: new FormControl(''),
      resImage: new FormControl(this.imageSrc),
      category: this.category
  });


  
  // get all Categories
  addResource()
  {
    // this.submit();
    console.log(this.addResourceForm.value.category);
    return this.resourceService.addResource(this.addResourceForm.value).subscribe( (data: any) => {
    this.resourceList = data;
    alert("Resource Has Been Added!");
    this.ngOnInit();
    this.modalService.dismissAll();
  });
  }

  // update all Resource
  updateResource()
  {
    return this.resourceService.updateResource(this.addResourceForm.value).subscribe( (data: any) => {
    this.resourceList = data;
    alert("Resource Details Has been Updated!");
    this.ngOnInit();
    this.modalService.dismissAll();
  });
  }

  // delete Resource
  deleteResource(resId: any)
  {
    alert("Resource Has been Deleted!");
    window.location.reload();
    return this.resourceService.deleteResource(resId).subscribe( (data: any) => {
  });  
  }


//   onFileSelected(event) {
    
//       var tmppath = URL.createObjectURL(event.target.files[0]);
//           $('#preview_img').fadeIn("fast").attr('src',URL.createObjectURL(event.target.files[0]));
          
//           $("#disp_tmp_path").html("Temporary Path(Copy it and try pasting it in browser address bar) --> <strong>["+tmppath+"]</strong>");
//           this.imageSrc=JSON.stringify(tmppath);
//           console.log(this.imageSrc);

//   }





// myForm = new FormGroup({
//   file: new FormControl(''),
//   fileSource: new FormControl('')
// })

//   onFileChange(event) {
//     const reader = new FileReader();
    
//     if(event.target.files && event.target.files.length) {
//       const [file] = event.target.files;
//       reader.readAsDataURL(file);
//       console.log("hii");
//       reader.onload = () => {
   
//         this.imageSrc = reader.result as string;
        
//         this.myForm.patchValue({
//           fileSource: reader.result
//         });
//         console.log(this.myForm.value);
//       };

//       this.http.post<any>('../assets/upload.php', this.myForm.value)
//       .subscribe(res => {
//         console.log(res);
//         alert('Uploaded Successfully.');
//       })
//     }
//   }
  


}


