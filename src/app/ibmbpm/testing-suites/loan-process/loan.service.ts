import { Injectable } from '@angular/core';
import { RequestOptions } from '@angular/http';
import {Http} from '@angular/http';
@Injectable()
export class LoanService {

  constructor(private http:Http) { }
  
  public checkState(instanceID,listTask,callback){
    let options= new RequestOptions({
      params:{
        "piid": instanceID
      }
    });
      this.http.get('/api/loanProcess/checkProcess',options).map(res=>res.json()).subscribe(data=>{
        let checker = data.data.tasks;
        if(checker.length == listTask.length){
          alert("Server had no new task!");
        }else{
          listTask[listTask.length]=data.data.tasks[listTask.length];
          callback();
        }
      });  
  }

  public finishTask(listTask, obj, instanceID){
    let option=new RequestOptions({
      params:{
        "tkiid":listTask.tkiid,
        "args":obj.params
      }
    });
    //finish the task
    this.http.get('/api/loanProcess/finishTask',option).subscribe(data=>{});
  }
}
