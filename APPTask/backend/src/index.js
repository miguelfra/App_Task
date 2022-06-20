const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
mongoose.connect('mongodb://localhost/mevn-database')
     .then(db => console.log('DB is connected'))
     .catch(err => console.log(err));

//Settings
app.set('port', process.env.PORT || 3000);
//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());


//Routes
app.use('/api/tasks', require('./routes/tasks'));

//Static files
 app.use(express.static(__dirname + '/public'));
 
// SERVER Listening
app.listen(app.get('port'), () => {
    console.log("SERVER ON PORT", app.get('port'));
})
