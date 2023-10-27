const express = require('express');
const router = express.Router();
const {getPermit, createPermit} = require('../controllers/permitController')

router.get('/',getPermit);

router.post('/add',createPermit);

router.get('/:id',(req,res)=>{
    res.status(200).json({message: 'GET PERMIT DETAILS BY ID ...'});
})

router.put('/:id',(req,res)=>{
    res.status(200).json({message: 'UPDATE PERMIT DETAILS...'});
})

router.delete('/:id',(req,res)=>{
    res.status(200).json({message: 'DELETE PERMIT DETAILS...'});
})

module.exports = router;