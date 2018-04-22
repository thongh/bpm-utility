import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { RequestOptions } from '@angular/http';
import { TestingSuitesService } from './testing-suites.service';

@Component({
  selector: 'app-testing-suites',
  templateUrl: './testing-suites.component.html',
  styleUrls: ['./testing-suites.component.scss'],
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
  private self:any;
  private index: number;

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
    this.listTask=[];
  }
  runClick(){
    if(!this.testCase){
      alert("Missing testcase file!");
    }else{
      this.modeSpinner="indeterminate";
      this.listTask=[];
      //create variable to content the parameter such as itemID, processAppID
      let option= new RequestOptions({
        params: {
          "itemID": this.processDetail.itemID,
          "processAppID":this.processDetail.processAppID
        }
      });
      //call the function of controller file to start process
      this.http.get('/api/testingSuites',option).map(res=>res.json()).subscribe(data=>{
        this.instanceID = data.data.piid; //get instances ID
        //finish the task
        this.self=this;
        this.index=0;      
        this.task(this.index,this.self);
      });
    }
  }

  task(i,self){
    self.modeSpinner="indeterminate";
    setTimeout(() => {
      self.TestingSuitesService.checkState(self.modeSpinner, self.testCase, self.instanceID, self.listTask, 
        function(){
          self.TestingSuitesService.finishTask(self.listTask[i], self.testCase[i], self.instanceID, 
            function(){
              self.task(i+1, self);
            },
            function(){
              self.modeSpinner="determinate";
            }
          );
        },
        function(){
          self.modeSpinner="determinate";
        },
        function(){
          self.modeSpinner="paused";
        }        
      );
    }, 2500);
  }
  getFile(e){
    let reader=new FileReader();
    reader.onload=()=>{
      this.testCase=JSON.parse(reader.result);
    }
    if(e.target.files[0]){
      reader.readAsText(e.target.files[0]);
    }else{
      this.testCase=null;
    }
  }
}
