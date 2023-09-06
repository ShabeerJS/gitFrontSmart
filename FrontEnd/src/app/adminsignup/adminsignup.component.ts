import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { RationAdmin } from 'rationAdmin';
import { BackendServicesService } from '../backend-services.service';

@Component({
  selector: 'app-adminsignup',
  templateUrl: './adminsignup.component.html',
  styleUrls: ['./adminsignup.component.css']
})
export class AdminsignupComponent {



  rationAdminId!:any;
// rationCard1!:RationCard;

// rationAdmin!:RationAdmin;
  addAdminForm!: FormGroup;
  rationAdmin: RationAdmin = new RationAdmin();
  submitted = false;
 
  constructor(private backendServicesService: BackendServicesService,
    private router: Router, private fb: FormBuilder,private cookie:CookieService) {

     this.addAdminForm= this.fb.group({
      rationAdminName: [, [Validators.required]],
      password: [, [Validators.required,Validators.minLength(8)]],
      emailId: [, [Validators.required,Validators.email]],
      
    });
  
     }
  
  ngOnInit(): void {
   
    // this.newProduct;
   
  }
  
  rationAdmin1!:RationAdmin;

  
  save() {
    this.backendServicesService.adminsignup(this.rationAdmin).subscribe((data: any) => {
      this.rationAdmin = data;
      console.log(data);
      alert("Signed  up successfully")
      this.router.navigate(['/AdminLoginComponent']);
       
     
    },error=>{
      if(error?.status ==500){
       alert("Entered Mail is already exist")
      }
    });
    

    // this.gotoList();
  }
 
  onSubmit() {
   
    this.rationAdmin = new RationAdmin();
    this.rationAdmin.rationAdminName = this.form['rationAdminName'].value;
    this.rationAdmin.password = this.form['password'].value;
    this.rationAdmin.emailId = this.form['emailId'].value;
    // this.rationCard.type = this.form['type'].value;
    this.submitted = true;
   
    // this.createRAationCardMember1(this.rationCard);
    this.save();
  }

  OnlyNumbersAllowed(event: { which: any; keyCode: any; }):boolean {
    const charCode=(event.which)?event.which:event.keyCode;
    if(charCode>31&&(charCode<48||charCode>57)){
      console.log('charCode is restricted is'+charCode);
      return false;
    }
     return true;
  }

  get form(){
    return this.addAdminForm.controls
  }

 
  
  
}





