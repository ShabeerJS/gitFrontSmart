import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BackendServicesService } from 'src/app/backend-services.service';
import { FixedProducts } from 'src/app/fixedproducts';

@Component({
  selector: 'app-vieworderdetails',
  templateUrl: './vieworderdetails.component.html',
  styleUrls: ['./vieworderdetails.component.css']
})
export class VieworderdetailsComponent {


  
   fixedProds!:FixedProducts[];
  @ViewChild('content')addView!:ElementRef;
  constructor(private backendService:BackendServicesService,private dialogref:MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: FixedProducts[]){
      console.log(data);
      this.fixedProds=data;

  }

  // loaddata(fixedProd: FixedProducts[]){
  //   this.fixedProds=fixedProd;
  //   console.log(fixedProd);
    
  //   }
    
  
}




// @ViewChild('content')addView!:ElementRef;
// constructor(private modalService: NgbModal,
 
//   private service: AdminServiceService) {
    

// }

// loaddata(product: Product[]){
// this.products=product;
// console.log(product);
// this.open();
// }

// open() {
  
//   this.modalService.open(this.addView, { ariaLabelledBy: 'modal-basic-title' }).result.then(
//     (result) => {
//     },
//     (reason) => {
//     },
//   );
// }
// private getDismissReason(reason: any): string {
//   if (reason === ModalDismissReasons.ESC) {
//     return 'by pressing ESC';
//   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
//     return 'by clicking on a backdrop';
//   } else {
//     return `with: ${reason}`;
//   }
// }
// }





