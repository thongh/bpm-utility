console.log("Angular src - rest-tester.component.ts - START");

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-rest-tester',
  templateUrl: './rest-tester.component.html',
  styleUrls: ['./rest-tester.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RestTesterComponent implements OnInit {
  
  constructor(private http: Http) { 
      this.clickMessage = '';
      this.restStatus;
      this.restBody = '';
      this.tiles = [
               {text: 'Rest Parameters', cols: 1, rows: 1, color: 'lightblue'},
               {text: 'Rest Response', cols: 3, rows: 1, color: 'lightgreen'},
           ];
  }

  public onClickMe() {
    this.clickMessage = 'Calling a REST API...';
    this.restStatus = 'n/a';
    this.http.get("/api/ibmbpm")
      .subscribe((data) => {
    console.log(data);
    this.clickMessage = "DONE";
    this.restStatus = data.status;
    });
  }
  
  ngOnInit() {
  }

}
console.log("Angular src - rest-tester.component.ts - END");