console.log("Angular src - ibmbpm.component.ts - START");
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-ibmbpm',
  templateUrl: './ibmbpm.component.html',
  styleUrls: ['./ibmbpm.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IbmbpmComponent implements OnInit {

  constructor(private http: Http) { 
//      this.clickMessage = '';
//      this.restStatus;
//      this.restBody = '';
  }

//  public onClickMe() {
//    this.clickMessage = 'Calling a REST API...';
//    this.restStatus = 'n/a';
//    this.http.get("/api/ibmbpm")
//      .subscribe((data) => {
//    console.log(data);
//    this.clickMessage = "DONE";
//    this.restStatus = data.status;
//    });
//  }

  public ngOnInit(): void {
    // TODO Auto-generated method stub
    return;
  }
}
console.log("Angular src - ibmbpm.component.ts - END");