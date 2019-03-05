const express = require ('express');
const morgan = require('morgan');
const cors = require('cors');
const app =  express();

const {mongoose} = require ('./database');

//Configuración
app.set('port',process.env.PORT || 3000 );

//Middlewares
//Morgan
app.use(morgan('dev'));
//Json
app.use(express.json());
//Cors
app.use(cors({ origin: 'http://localhost:4200'  }));


//Ruta
app.use('/api/tasks' ,require ('./routes/task.routes'));


//Inciar el servidor
app.listen(app.get('port'),()=>{
console.log('server on port',app.get('port'))	;
}
) ;