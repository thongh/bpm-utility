import { Injectable } from '@angular/core';
import { RequestOptions } from '@angular/http';
import {Http} from '@angular/http';
@Injectable()
export class LoanService {

  constructor(private http:Http) { }
  
  public finishTask(task:any, obj:string){
    let option=new RequestOptions({
      params:{
        "tkiid":task.tkiid,
        "args":obj
      }
    });
    //finish the task
    this.http.get('/api/loanProcess/finishTask',option).subscribe();
  }
  
  
  public checkState(instanceID,listTask){
    let options= new RequestOptions({
      params:{
        "piid": instanceID
      }
    });
    this.http.get('/api/loanProcess/checkProcess',options).map(res=>res.json()).subscribe(data=>{
      listTask[1]=data.data.tasks[1];
    });
  }
}
