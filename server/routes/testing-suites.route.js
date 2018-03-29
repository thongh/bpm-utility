import express from 'express';
import request from 'request';
import validate from 'express-validation';
import paramValidation from '../config/param-validation';
import https from 'https';
import testingSuitesCtrl from '../controllers/testing-suites.controller';

const router = express.Router();
router.get('/',(req,res)=>{
    console.log("calling loanProcess router");
    testingSuitesCtrl.startProcess(req,res);
});
router.get('/exposedProcess', (req,res)=>{
    console.log("calling exposed process api");
    testingSuitesCtrl.exposedProcess(req,res);
});
router.get('/checkProcess',(req,res)=>{
    console.log("check process state");
    testingSuitesCtrl.checkCurrentState(req,res);
});
router.get('/finishTask',(req,res)=>{
    console.log("finish the task");
    testingSuitesCtrl.finishTask(req,res);
});
router.get('/claimTask',(req,res)=>{
    console.log("claim the task");
    testingSuitesCtrl.claimTask(req,res);
});

export default router;