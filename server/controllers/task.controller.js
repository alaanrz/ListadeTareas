const Task =require('../models/task');

const taskCtrl = {};

taskCtrl.getTasks= async (req,res) =>{ 
	const tasks =await Task.find();
	res.json(tasks);
};

taskCtrl.createTask= async (req,res) => {
	const task =new Task (req.body);
	await  task.save ();
	res.json({'Estado' : 'Tarea guardada'});
};


taskCtrl.deleteTask=async (req,res) =>{
await Task.findByIdAndRemove(req.params.id);
res.json({'Estado' : 'Tarea eliminada'});
};

module.exports = taskCtrl;