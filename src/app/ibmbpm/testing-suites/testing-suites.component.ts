import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-testing-suites',
  templateUrl: './testing-suites.component.html',
  styleUrls: ['./testing-suites.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TestingSuitesComponent implements OnInit {

  private listProc:any;
  private selector: any;
  processDetail:any;
  constructor(private http:Http) {
   }

  ngOnInit() {
    //get all process available on bpm into listProc variable
    this.http.get('/api/exposedProcess')
    .map(res=> res.json())
    .subscribe(data =>{
      this.listProc = data.data.exposedItemsList;
    }); 
  }

  onClick(index){
    this.selector=index;
    //gain the info detail for loanProcess component
    this.processDetail = this.listProc[9];
  }
}
