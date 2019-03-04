const express = require ('express');
const router= express.Router();
const task = require('../controllers/task.controller');

router.get('/',task.getTasks);
router.post('/',task.createTask);
router.put('/:id',task.turnTask);
router.delete('/:id',task.deleteTask);

module.exports=router;