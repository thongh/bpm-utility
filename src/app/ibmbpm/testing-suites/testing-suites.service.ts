import { Injectable } from '@angular/core';
import { RequestOptions } from '@angular/http';
import {Http} from '@angular/http';

@Injectable()
export class TestingSuitesService {

  constructor(private http:Http) { }
  
  public checkState(modeSpinner,testCase,instanceID,listTask,finishTask, changeModeSpinner, pause){
    let options= new RequestOptions({
      params:{
        "piid": instanceID
      }
    });
      this.http.get('/api/testingSuites/checkProcess',options).map(res=>res.json()).subscribe(data=>{
        let checker = data.data.tasks;
        if(data.data.state=="STATE_FINISHED"){
          alert("FINISHED!");
          changeModeSpinner();
        }else{
          if(checker.length == listTask.length){//if bpm server have no new task yet
            this.checkState(modeSpinner,testCase,instanceID,listTask,finishTask,changeModeSpinner,pause);//call checkstate again until have new task return
          }else{
            if(data.data.tasks[listTask.length].name == testCase[listTask.length].name){
              listTask[listTask.length]=data.data.tasks[listTask.length];//gain next task to the listTask
              finishTask();//finish next task
            }else{
              alert("Testing has been stopped because flow is wronged or any scripts do not complete yet!");
              pause();
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
