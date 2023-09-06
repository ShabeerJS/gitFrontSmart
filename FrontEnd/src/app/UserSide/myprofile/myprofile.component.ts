import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { CookieService } from 'ngx-cookie-service';
import { RationCardMember } from 'src/rationcardmember';
import { BackendServicesService } from 'src/app/backend-services.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {



  rationcardForm!:FormGroup;


  val=false;


  Newpassword!:String;

   oldPassword!:String;

  rationCardMembers!:RationCardMember;
  rationCardNo!:any;
  relation!:string;
  click1!: boolean;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



  
  
  
  constructor(private backendServicesService:BackendServicesService,private formBuilder:FormBuilder, private cookie:CookieService){

    this.rationcardForm=this.formBuilder.group({
      newPassword : [,[Validators.required,Validators.minLength(8)]],
      oldPassword : [,[Validators.required,Validators.minLength(8)]],
  
    });




    this.rationCardNo=this.cookie.get('UserCardNo');
    this.relation="Family_Head";
  this.backendServicesService.myProfile(this.rationCardNo,this.relation).subscribe(data=>
    {
      console.log(data);
      this.rationCardMembers=data;
    })
  }



  click(){

    
    this.val=!this.val;

  }
  
  onMenu() {
    this.click1 = !this.click1;
  }

  onSubmit(){


    this.Newpassword = this.form['newPassword'].value;
    this.oldPassword = this.form['oldPassword'].value;
    


    this.backendServicesService.updatePassword(this.rationCardNo,this.oldPassword,this.Newpassword).subscribe(data=>{
      console.log(data);
      alert("Updated Successfully");
    },
    (error => {
      console.log("ggg");
      console.log(this.Newpassword,this.oldPassword);
      alert("Old Password doesn't match");
      // this.errorMessage="Already password Exist";
      
    }))



  }


    
  get form(){
    return this.rationcardForm.controls;
  }

  


}
