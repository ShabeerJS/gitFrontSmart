import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-user-side',
  templateUrl: './user-side.component.html',
  styleUrls: ['./user-side.component.css']
})
export class UserSideComponent {

  click!: boolean;
  constructor(private cookie:CookieService,private router:Router,){

  }

  onMenu() {
    this.click = !this.click;
  }


  logOut(){
    this.cookie.delete('UserCardNo');
    this.router.navigate(['/LoginComponent']);

  }
profile(){
  this.router.navigate(['/MyprofileComponent']);
}
  

}
