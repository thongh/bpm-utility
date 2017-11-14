import express from 'express';
import request from 'request';
import validate from 'express-validation';
import paramValidation from '../config/param-validation';
import ibmbpmCtrl from '../controllers/ibmbpm.controller';

const router = express.Router(); // eslint-disable-line new-cap

router.get('/', (req, res) => {
	req = 'http://www.google.com';
	ibmbpmCtrl.callRestApi(req, res);
});

export default router;
