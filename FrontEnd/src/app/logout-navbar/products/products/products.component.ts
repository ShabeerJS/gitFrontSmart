import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

 // student: any = new Student();
 submitted = false;
 
 constructor(
   public router: Router, public fb: FormBuilder) { }

 ngOnInit(): void {
   this.newStudent;
 }
 
 addProduct: FormGroup = this.fb.group({
   productName: [, [Validators.required]],
   productQuantity: [, [Validators.required]],
   productPrice: [, [Validators.required, ]],
   // password: [, [Validators.required, Validators.minLength(8)]],
   // Validators.email
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
