var mongoose = require('mongoose');
var dburl = 'mongodb://localhost:27017/educacaoFinanceira';


mongoose.connect(dburl);

mongoose.connection.on('connected', function(){
    console.log('mongoose connected to '+ dburl);
});
mongoose.connection.on('disconnected', function(){
    console.log('mongoose disconnected');
});
mongoose.connection.on('error', function(err){
    console.log('mongoose connected erro: '+ err);
});
process.on('SIGINT', function() {
    mongoose.connection.close(function() {
        console.log('mongoose disconnectes through app termination sigint');
        process.exit(0);
    });
});
process.on('SIGTER', function() {
    mongoose.connection.close(function() {
        console.log('mongoose disconnectes through app termination sigter');
        process.exit(0);
    });
});
// PRECISA SER ALTERADO DE ACORDO COM A NOSSA APLICAÇÃO
//BRING IN SCHEMAS AND MODELS 
require('./modulo.model.js');
require('./user.model.js');