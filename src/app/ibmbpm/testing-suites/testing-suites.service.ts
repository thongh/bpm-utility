import { Injectable } from '@angular/core';
import { RequestOptions } from '@angular/http';
import {Http} from '@angular/http';

@Injectable()
export class TestingSuitesService {

  constructor(private http:Http) { }
  
  public checkState(testCase,instanceID,listTask,callback){
    let options= new RequestOptions({
      params:{
        "piid": instanceID
      }
    });
      this.http.get('/api/testingSuites/checkProcess',options).map(res=>res.json()).subscribe(data=>{
        let checker = data.data.tasks;
        if(data.data.state=="STATE_FINISHED"){
          alert("FINISHED!");
        }else{
          if(checker.length == listTask.length){//if bpm server have no new task yet
            this.checkState(testCase,instanceID,listTask,callback);//call checkstate again until have new task return
          }else{
            if(data.data.tasks[listTask.length].name == testCase[listTask.length].name){
              listTask[listTask.length]=data.data.tasks[listTask.length];//gain next task to the listTask
              callback();//finish next task
            }else{
              alert("Testing has been stopped");
            }
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
    this.http.get('/api/testingSuites/finishTask',option).subscribe(data=>{});
  }

}
