const mongoose = require ('mongoose');
const {Schema}= mongoose;

const TaskSchema = new Schema ({
	title : {type : String},
	description: {type : String},
	status : {type :Boolean}
});

module.exports =mongoose.model('Task' , TaskSchema )