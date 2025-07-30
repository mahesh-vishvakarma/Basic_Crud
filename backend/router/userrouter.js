import express from 'express';
import { deleteData, findData, getOne, updateData, userPost } from '../controller/usercontrller.js';

const router = express.Router();

router.post('/post',userPost);// for posting data

router.get('/get',findData); // get all

router.get('/getOne/:id',getOne); //get one

router.put('/update/:para',updateData); // update data

router.delete('/delete/:para',deleteData); //delete data

export default router;