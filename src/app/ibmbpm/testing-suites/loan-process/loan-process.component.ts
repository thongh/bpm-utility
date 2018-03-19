import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Http } from '@angular/http';
import { RequestOptions } from '@angular/http';
import { LoanService } from './loan.service';


@Component({
  selector: 'app-loan-process',
  templateUrl: './loan-process.component.html',
  styleUrls: ['./loan-process.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoanProcessComponent implements OnInit {

  @Input() processDetail:any;
  private listTask:any[]=[];
  private instanceID:number;
  private testCase:any
  constructor(private http:Http, private loanService: LoanService){
  }
  ngOnInit() {
    
  }

  runClick(){
    //create variable to content the parameter such as itemID, processAppID
    let params= new RequestOptions({
      params: {
        "itemID": this.processDetail.itemID,
        "processAppID":this.processDetail.processAppID
      }
    });
    this.testCase = require('./test-case.json');
    //call the function of controller file to start process
    this.http.get('/api/loanProcess',params).map(res=>res.json()).subscribe(data=>{
      this.listTask[0]= data.data.tasks[0]; //get info detail of list process
      this.instanceID = data.data.piid; //get instances ID
      //finish the task
      var self=this;      
      this.loanService.finishTask(this.listTask[0], this.testCase[0], this.instanceID);
      /*var index=0;
      this.task(index, self);*/
      setTimeout(() => {
        this.loanService.checkState(this.instanceID, this.listTask, function(){
          self.loanService.finishTask(self.listTask[1], self.testCase[1], self.instanceID);
          setTimeout(() => {
            self.loanService.checkState(self.instanceID, self.listTask, function(){
              self.loanService.finishTask(self.listTask[2], self.testCase[2],self.instanceID);
            });
          }, 10000);
        });
      }, 3000);
    });
  }

  task(i, self){
    setTimeout(() => {
      self.loanService.checkState(self.instanceID, self.listTask, function(){
        self.loanService.finishTask(self.listTask[i], self.testCase[i], self.instanceID);
        self.task(i+1);
      });
    }, 3000);
  }
  test(){
    for (let index = 0; index < 3; index++) {
      setTimeout(() => {
        console.log(index);
      }, 2000);
      /*await new Promise(next=>{
        setTimeout(() => {
          console.log(index);
        }, 2000);
        next();
      });  */    
    }
  }
}
