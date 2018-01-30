import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import {Http} from '@angular/http';
import { RequestOptions } from '@angular/http';
import { LoanService } from './loan.service';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { Validators } from '@angular/forms/';
import { resetCaches } from 'graphql-tag';


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
  private taskID:number;
  private rForm: FormGroup;
  private reason=[
    {name:'house', value:'Buy a house'},
    {name:'car', value:'Buy a car'},
    {name:'study', value:'Study Loan'},
    {name:'loan', value:'Consumer Loan'}
  ]

  constructor(private http:Http, private loanService: LoanService, private fb:FormBuilder){
    this.rForm = fb.group({
      'isSubmitted':[null, Validators.required],
      'loanData':fb.group({
        'amount':[null, Validators.required],
        'reason':[null, Validators.required]
      })
    });
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
    //call the function of controller file to start process
    this.http.get('/api/loanProcess',params).map(res=>res.json()).subscribe(data=>{
      this.listTask[0]= data.data.tasks[0]; //get info detail of list process
      this.instanceID = data.data.piid; //get instances ID
    });
  }

  finishTask(task, result){
    //convert result from json object to string
    let obj= JSON.stringify(result);
    //call the service
    this.loanService.finishTask(task,obj);
  };

  checkState(instanceID,listTask){
    setTimeout(()=>{
      this.loanService.checkState(instanceID,listTask)
    }, 1000);
  }
}
