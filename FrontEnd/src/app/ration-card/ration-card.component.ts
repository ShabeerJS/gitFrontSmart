import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ration-card',
  templateUrl: './ration-card.component.html',
  styleUrls: ['./ration-card.component.css']
})
export class RationCardComponent {

  rationCardDetails!: FormGroup;
  rationCardMemberDetails !: FormGroup;
  addressDetails!:  FormGroup;
  rationCard_step  = false;
  rationCardMember_step  = false;
  address_step  = false;
  step = 1;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

        this.rationCardDetails = this.formBuilder.group({
          rationCardNo: ['', Validators.required],
          rationCardType: ['', Validators.required],
          password:  ['',Validators.required]
        });

        this.rationCardMemberDetails = this.formBuilder.group({
          member_name: ['', Validators.required],
          age: ['', Validators.required],
          relation: ['',Validators.required],
           gender:['',Validators.required]
      });
        this.addressDetails = this.formBuilder.group({
          address: ['', Validators.required],
          area: ['', Validators.required],
            city: ['', Validators.required],
           
            pincode: ['',Validators.required]
        });

       
  }

  get personal() { return this.rationCardDetails.controls; }
  
 

  get education() { return this.rationCardMemberDetails.controls; }
  get address() { return this.addressDetails.controls; }
  next(){

    if(this.step==1){
          this.rationCard_step = true;
          if (this.rationCardDetails.invalid) { return  }
          this.step++
    }

    else if(this.step==2){
        this.rationCardMember_step = true;
        if (this.rationCardMemberDetails.invalid) { return }
            this.step++;
    }
    

  }

  previous(){
    this.step--
   
    if(this.step==1){
      this.rationCardMember_step = false;
    }
    if(this.step==2){
      this.address_step = false;
    }
   
  }

  submit(){
    
    if(this.step==3){
      this.address_step = true;
      if (this.addressDetails.invalid) { return }
      alert("Well done!!")
    }
  }
}

