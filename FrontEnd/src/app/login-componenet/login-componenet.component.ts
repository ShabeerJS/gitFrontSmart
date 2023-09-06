
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';
import { BackendServicesService } from '../backend-services.service';

@Component({
  selector: 'app-login-componenet',
  templateUrl: './login-componenet.component.html',
  styleUrls: ['./login-componenet.component.css']
})
export class LoginComponenetComponent implements OnInit {
  


  notFound: boolean = false;
  UserLoginForm!: FormGroup;
  isChecked = false;



  constructor(
    private router: Router,
    private fb: FormBuilder,
    private cookie: CookieService,
    private route: ActivatedRoute,
    private backendServicesService: BackendServicesService) { }


  ngOnInit(): void {
    this.UserLoginForm = this.fb.group({
      rationCardNo: ['', [Validators.required,Validators.pattern("[0-9]{10}")]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      
    })

  }


  inCorrect: boolean = false;
  onSubmit() {
    if (!this.UserLoginForm.valid) {
      alert(" Password Incorrect");
      return;
    } else {
     
      //this.inCorrect = false;
      this.notFound = false;
      
        this.backendServicesService.getUserLogin(this.UserLoginForm.value.rationCardNo).subscribe(
          (data) => {
            if (
              data?.password == this.UserLoginForm.value.password &&
              data?.rationCardNo == this.UserLoginForm.value.rationCardNo)
             {
         
              this.inCorrect = false;
              this.notFound = false;
              this.cookie.set('UserCardNo', `${data?.rationCardNo}`);
               console.log(this.UserLoginForm.value);
             
              this.cookie.set('rationCardId', `${data?.rationId}`);
              this.cookie.set('UserCardType', `${data?.type}`);
              this.router.navigate(['UserSideComponent']);
              this.backendServicesService.setSideMenuView(Object.keys(this.cookie.getAll()).length != 0);
              alert("Logged In Successfully");
            } else {
              this.inCorrect = true;
              alert(" Entered Password is incorrect");
            }
          },
          (error) => {
            if (error?.status == 500) {
              alert(" RationCard number is incorrect");
              this.notFound = true;
            }
          }
        );
      }
  



  
  }
  public getError(type: string): boolean {
    var errorList = this.UserLoginForm.controls['password']['errors'];
    if (errorList) {
      switch (type) {
        case "minlength":
          return errorList['minlength'];
        case "required":
          return errorList['required'];
      }
    }
    return false;

  }

  // Submit() {
  //   // if (this.loginForm.valid && this.loginForm.touched) {
  //   //   this.error = '';
  //   //   this.submitEM.emit(this.loginForm.value);
  //   //   this.loginForm.reset();
  //   // } else {
  //   //   this.error = 'Username or password invalid';
  //   // }
  //   //this.cookie.set('userId',`${data.userId}`);
  //   this.router.navigate(['student']);

  // }
  error!: string | null;

  show: boolean = false;



  
  password() {
      this.show = !this.show;
  }

}



