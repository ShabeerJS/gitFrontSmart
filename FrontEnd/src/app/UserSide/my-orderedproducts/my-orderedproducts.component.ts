import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BackendServicesService } from 'src/app/backend-services.service';
import { FixedProducts } from 'src/app/fixedproducts';

@Component({
  selector: 'app-my-orderedproducts',
  templateUrl: './my-orderedproducts.component.html',
  styleUrls: ['./my-orderedproducts.component.css']
})
export class MyOrderedproductsComponent {



  fixedProds!:FixedProducts[];

  constructor(private backendService:BackendServicesService,private dialogref:MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: FixedProducts[]){
      console.log(data);
      this.fixedProds=data;

  }

}
