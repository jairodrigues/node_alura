var restify = require('restify');
var clients = require('restify-clients');

var cliente = clients.createJsonClient({
    url:'http://localhost:3001'
});

cliente.post('/cartoes/autoriza',cartao, function(erro, request, response, retorno){
    console.log('consumindo servico de cartoes');
    console.log(retorno);

})