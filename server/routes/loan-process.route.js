import express from 'express';
import loanProcessCtrl from '../controllers/loan-process.controller';
import { loadavg } from 'os';

const router = express.Router();
router.get('/',(req,res)=>{
    console.log("calling loanProcess router");
    loanProcessCtrl.startProcess(req,res);
});
router.get('/checkProcess',(req,res)=>{
    console.log("check process state");
    loanProcessCtrl.checkCurrentState(req,res);
});
router.get('/finishTask',(req,res)=>{
    console.log("finish the task");
    loanProcessCtrl.finishTask(req,res);
});

export default router