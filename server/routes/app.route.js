import express from 'express';
import request from 'request';
import validate from 'express-validation';
import paramValidation from '../config/param-validation';
import appCtrl from '../controllers/app.controller';

const router= express.Router();
router.get('/',(req,res)=>{
    appCtrl.setAuth(req,res);
});
export default router