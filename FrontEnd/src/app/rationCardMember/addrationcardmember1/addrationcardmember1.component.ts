import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendServicesService } from 'src/app/backend-services.service';
import { Address } from 'src/app/address';
import { RationCardMember } from 'src/rationcardmember';
import { RationCard } from 'src/rationcard';
@Component({
  selector: 'app-addrationcardmember1',
  templateUrl: './addrationcardmember1.component.html',
  styleUrls: ['./addrationcardmember1.component.css']
})
export class Addrationcardmember1Component implements OnInit {

  rationId!:number;
  rationCard!:RationCard;

  addrationCardMemberForm1!: FormGroup;
  rationCardMember: RationCardMember = new RationCardMember();
  submitted = false;
 
  constructor(private backendServicesService: BackendServicesService,
    private router: Router,private route :ActivatedRoute, private fb: FormBuilder) {

     this.addrationCardMemberForm1= this.fb.group({
      memberName: [, [Validators.required]],
      age: [, [Validators.required]],
      type: [, [Validators.required, ]],
      relation:[, [Validators.required, ]],
    });
  
     }
  
  ngOnInit(): void {
    // this.newProduct;
    // this.addrationmemberswithcard();
    this.rationId=this.route.snapshot.params['rationId'];
  }
 
    
  //  newProduct(): void {
  //   this.submitted = false;
  //   this.product = new Product();
  // }
  save() {
    this.backendServicesService.addRationCardMember(this.rationId,this.rationCardMember).subscribe((data: any) => {
      this.rationCardMember = data;
      console.log(data);
      
      this.router.navigate(['AddaddressComponent/'+Number(this.rationId)]);
      //  alert("RationCardMember Created Successfully")
    })

    // this.gotoList();
  }
  goback(){
    this.router.navigate(['/AllrationcardComponent'])
    }

    OnlyNumbersAllowed(event: { which: any; keyCode: any; }):boolean {
      const charCode=(event.which)?event.which:event.keyCode;
      if(charCode>31&&(charCode<48||charCode>57)){
        console.log('charCode is restricted is'+charCode);
        return false;
      }
       return true;
    }

  onSubmit() {
   
    this.rationCardMember = new RationCardMember();
    this.rationCardMember.memberName = this.form['memberName'].value;
    this.rationCardMember.age = this.form['age'].value;
    this.rationCardMember.type = this.form['type'].value;
    this.rationCardMember.relation = this.form['relation'].value;
    this.submitted = true;
   

    this.save();
  }
  get form(){
    return this.addrationCardMemberForm1.controls
  }

  // gotoList() {
  //   this.router.navigate(['/AllProductsComponent']);
  // }
  addrationmemberswithcard(){
    this.rationCard= this.backendServicesService.getrationCardmemberstore();
    this.rationId=this.rationCard.rationId;
    console.log(this.rationCard);

  }
 

}
