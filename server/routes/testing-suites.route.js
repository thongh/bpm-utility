import express from 'express';
import request from 'request';
import validate from 'express-validation';
import paramValidation from '../config/param-validation';
import https from 'https';
import testingSuitesCtrl from '../controllers/testing-suites.controller';

const router = express.Router();
router.get('/', (req,res)=>{
    console.log("calling exposed process api");
    testingSuitesCtrl.exposedProcess(req,res);
})

export default router;