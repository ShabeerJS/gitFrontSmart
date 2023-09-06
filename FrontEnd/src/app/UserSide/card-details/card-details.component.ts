import { Component } from '@angular/core';
import { BackendServicesService } from 'src/app/backend-services.service';
import { RationCard } from 'src/rationcard';
import { CookieService } from 'ngx-cookie-service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent {

  val=false;

  carddetailsForm!:FormGroup;


  constructor(private BackendServicesService:BackendServicesService,
   private cookie:CookieService,private router:Router){}

   rationCardNo!:any;
  // rationId:Number=108;
  rationCard!:RationCard;
  ngOnInit(): void {
    this.getUser();
  }
  getUser(){

    this.rationCardNo =  this.cookie.get('UserCardNo');
   
    this.BackendServicesService.getUserCardDetailswithCardNo(this.rationCardNo).subscribe(data=>this.rationCard = data);

    // this.BackendServicesService.getUserCardDetailswithrationId(this.rationId).subscribe(data=>this.rationCard = data);

  }


  click1!: boolean;
 
  onMenu() {
    this.click1 = !this.click1;
  }


  logOut(){
    this.cookie.delete('UserCardNo');
    this.router.navigate(['/LoginComponent']);

  }
profile(){
  this.router.navigate(['/MyprofileComponent']);
}


  click(){


    this.val=true;

  }

}

    // this.doctorId =  this.cookie.get('doctorId');
 
      //  this.Doctorservice.readAppointment(this.doctorId).subscribe(data =>{
      //         this.bookAppointments = data}); 
     
 
     
      
 





// rationCardNo!:Number;
// rationCard!:RationCard;
// constructor(private router: ActivatedRoute,private backendServicesService: BackendServicesService) {
  
// }
// ngOnInit() {
//   this.rationCardNo=this.router.snapshot.params['rationCardNo'];

//   this.rationCard=new RationCard();
//   this.backendServicesService.getRationCardById(this.rationCardNo).subscribe(data => {
//     this.rationCard=data;
// });
// }
