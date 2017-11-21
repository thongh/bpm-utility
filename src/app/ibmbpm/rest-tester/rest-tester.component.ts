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

      clickMessage;
      restStatus;
      restBody;
      tiles;
  constructor(private http: Http) {
      this.clickMessage = '';
      this.restStatus;
      this.restBody = '';
      this.tiles = [
               {text: 'Rest Parameters', cols: 1, rows: 1, color: 'lightblue'},
               {text: 'Rest Response', cols: 3, rows: 1, color: 'lightgreen'},
           ];
  }


  ngOnInit() {
  }

}
console.log("Angular src - rest-tester.component.ts - END");
