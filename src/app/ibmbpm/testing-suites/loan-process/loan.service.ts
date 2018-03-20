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
        if(data.data.state=="STATE_FINISHED"){
          alert("FINISHED!");
        }else{
          if(checker.length == listTask.length){//if bpm server have no new task yet
            this.checkState(instanceID,listTask,callback);//call checkstate again until have new task return
          }else{
            listTask[listTask.length]=data.data.tasks[listTask.length];//gain next task to the listTask
            callback();//finish next task
          }
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
