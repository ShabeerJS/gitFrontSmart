import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fixedproducts',
  templateUrl: './fixedproducts.component.html',
  styleUrls: ['./fixedproducts.component.css']
})
export class FixedproductsComponent {

  submitted = false;
 
  constructor(
    private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.newStudent;
  }
  
  addFixedProductForm: FormGroup = this.fb.group({
    productName: [, [Validators.required]],
    productQuantity: [, [Validators.required]],
    productPrice: [, [Validators.required, ]],
    cardType:[Validators.required]
    // password: [, [Validators.required, Validators.minLength(8)]],
    
  });

   newStudent(): void {
    this.submitted = false;
    // this.student = new Student();
  }
  save() {
    // this.apiconstant.createStudent(this.student).subscribe(data => {
    //   this.student = data;
    //   alert("Student Created Successfully")
    // })

    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/student']);
  }

}



