const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost:27017/lista', {useNewUrlParser: true})
.then(db=> console.log ('DB is connected'))
.catch(err=> console.error(err));

module.exports= mongoose;