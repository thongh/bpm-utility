import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { RequestOptions } from '@angular/http';
import { TestingSuitesService } from './testing-suites.service';

@Component({
  selector: 'app-testing-suites',
  templateUrl: './testing-suites.component.html',
  styleUrls: ['./testing-suites.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TestingSuitesComponent implements OnInit {

  private modeSpinner:any="determinate";
  private listProc:any;
  private selectorName: any;
  private listTask:any[]=[];
  private instanceID:number;
  private testCase:any;
  private processDetail:any;
  constructor(private http:Http, private TestingSuitesService:TestingSuitesService) {
   }

  ngOnInit() {
    //get all process available on bpm into listProc variable
    this.http.get('/api/testingSuites/exposedProcess')
    .map(res=> res.json())
    .subscribe(data =>{
      this.listProc = data.data.exposedItemsList;
    }); 
  }

  onClick(index){
    this.selectorName=this.listProc[index].display;
    this.processDetail= this.listProc[index];
  }
  runClick(){
    this.modeSpinner="indeterminate";
    //create variable to content the parameter such as itemID, processAppID
    let params= new RequestOptions({
      params: {
        "itemID": this.processDetail.itemID,
        "processAppID":this.processDetail.processAppID
      }
    });
    this.testCase = require('./test-case.json');
    //call the function of controller file to start process
    this.http.get('/api/testingSuites',params).map(res=>res.json()).subscribe(data=>{
      this.instanceID = data.data.piid; //get instances ID
      //finish the task
      var self=this;
      var index=0;      
      this.task(index,self);
    });
  }

  task(i,self){
    //self.TestingSuitesService.finishTask(this.listTask[i], this.testCase[i], this.instanceID);
    setTimeout(() => {
      self.TestingSuitesService.checkState(self.testCase, self.instanceID, self.listTask, function(){
        self.TestingSuitesService.finishTask(self.listTask[i], self.testCase[i], self.instanceID);
        self.task(i+1, self);
      });
    }, 10000);
  }
}
