import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-logout-navbar',
  templateUrl: './logout-navbar.component.html',
  styleUrls: ['./logout-navbar.component.css']
})
export class LogoutNavbarComponent {


constructor(private cookie:CookieService){

}






  logout(){
   this.cookie.delete('')
  }

}
