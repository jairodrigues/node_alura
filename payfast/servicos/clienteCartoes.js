var restify = require('restify');
var clients = require('restify-clients');

function CartoesCliente(){
    this._cliente = clients.createJsonClient({
        url:'http://localhost:3001'
    });
}

CartoesCliente.prototype.autoriza = function(cartao, callback){
    this._cliente.post('/cartoes/autoriza',cartao, callback);
      
}

module.exports = function(){
return CartoesCliente;
}