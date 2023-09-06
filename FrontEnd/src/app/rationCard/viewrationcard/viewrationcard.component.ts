import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RationCard } from 'src/rationcard';
import { BackendServicesService } from 'src/app/backend-services.service';
@Component({
  selector: 'app-viewrationcard',
  templateUrl: './viewrationcard.component.html',
  styleUrls: ['./viewrationcard.component.css']
})
export class ViewrationcardComponent {

  rationCardNo!:number;
  rationCard!:RationCard;
  constructor(private router: ActivatedRoute,private backendServicesService: BackendServicesService) {
    
  }
  ngOnInit() {
    this.rationCardNo=this.router.snapshot.params['rationCardNo'];

    this.rationCard=new RationCard();
    this.backendServicesService.getRationCardById(this.rationCardNo).subscribe(data => {
      this.rationCard=data;
});
}
}
