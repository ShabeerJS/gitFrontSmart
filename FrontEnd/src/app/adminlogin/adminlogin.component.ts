import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';
import { BackendServicesService } from '../backend-services.service';
import { LoginComponenetComponent } from '../login-componenet/login-componenet.component';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent  implements OnInit{
  notFound: boolean = false;
  AdminLoginForm!: FormGroup;
  isChecked = false;



  constructor(
    private router: Router,
    private fb: FormBuilder,
    private cookie: CookieService,
    private route: ActivatedRoute,
    private backendServicesService: BackendServicesService) { }


  ngOnInit(): void {
    this.AdminLoginForm = this.fb.group({
      emailId: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      
    })

  }
  show: boolean = false;
  password() {
    this.show = !this.show;
}
  inCorrect: boolean = false;
  onSubmit() {
    if (!this.AdminLoginForm.valid) {
      alert("UserName or Password Incorrect");
      return;
    } else {
     
      //this.inCorrect = false;
      this.notFound = false;
      
        this.backendServicesService.getAdminLogin(this.AdminLoginForm.value.emailId).subscribe(
          (data) => {
            if (
              data?.password == this.AdminLoginForm.value.password &&
              data?.emailId == this.AdminLoginForm.value.emailId)
             {
         
              this.inCorrect = false;
              this.notFound = false;
              this.cookie.set('AdminName', `${data?.emailId}`);
               console.log(this.AdminLoginForm.value);
             
              this.cookie.set('rationAdminId', `${data?.rationAdminId}`);
              this.router.navigate(['AdminsideComponent']);
              this.backendServicesService.setSideMenuView(Object.keys(this.cookie.getAll()).length != 0);
               alert("Logged in Successfully")
              
            } else {
              this.inCorrect = true;
              alert("Password is incorrect ")
            }
          },
          
          (error) => {
            if (error?.status == 500) {
              alert(" Entered Mail is incorrect");
              this.notFound = true;
            }
           else if (error?.status == 404) {
              alert(" Entered Mail is incorrect");
              this.notFound = true;
            }
          }
        );
      }
  
    


  
  }

 
  public getError(type: string): boolean {
    var errorList = this.AdminLoginForm.controls['password']['errors'];
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

}


