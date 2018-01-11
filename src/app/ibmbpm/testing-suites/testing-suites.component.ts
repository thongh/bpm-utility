import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-testing-suites',
  templateUrl: './testing-suites.component.html',
  styleUrls: ['./testing-suites.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TestingSuitesComponent implements OnInit {

  
  constructor(private http:Http) {
   }

  ngOnInit() {

  }

  onClick(){
    this.http.get('/api/exposedProcess').subscribe();
  }
}
