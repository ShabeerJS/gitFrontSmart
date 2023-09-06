import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { combineLatest, of } from 'rxjs';
import { BackendServicesService } from '../backend-services.service';

@Component({
  selector: 'app-adminside',
  templateUrl: './adminside.component.html',
  styleUrls: ['./adminside.component.css']
})
export class AdminsideComponent implements OnInit {
  
  opened=false;
  productId!: number;
  isAdmine!: boolean;
  showSideMenu!: boolean;
  @Input() activeLink = "";
  click!: boolean;

  cookiesLength = Object.keys(this.cookie.getAll()).length;
  constructor(private cookie:CookieService ,
    private backendServicesService: BackendServicesService, private router: Router
  ) {
 
  }

 

  logOut(){
    this.cookie.delete('AdminName');
    this.router.navigate(['/AdminLoginComponent']);

  }




  ngOnInit(): void {

    combineLatest(this.backendServicesService.isAdminLogin, this.backendServicesService.showSideMenu).subscribe(([res1, res2]) => {
      this.isAdmine = res1;
      this.showSideMenu = res2;
    })
  }

  onMenu() {
    this.click = !this.click;
  }

  clickBtn() {
    window.location.reload();
  }

  onClick() {
    this.cookie.deleteAll();
    this.backendServicesService.setSideMenuView(Object.keys(this.cookie.getAll()).length != 0);
    this.router.navigate(['']);
  }

  onEdit() {
    if (this.isAdmine) {
      this.router.navigate(['editadmin', this.cookie.get('adminId')]);
    } else if (!this.isAdmine) {
      this.router.navigate(['editstudent', this.cookie.get('userId')]);
    }
  }

}