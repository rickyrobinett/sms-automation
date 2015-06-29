var Hapi = require('hapi');
var sys = require('sys'),
    exec = require('child_process').exec;

var server = new Hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 8000 
});

server.route({
    method: 'POST',
    path: '/incoming', 
    handler: function (request, reply) {
      exec("osascript -l JavaScript " + __dirname + "/sendmessage.scpt", function(err, stdout, stderr) {
        console.log(err);
      });
      reply('<Response><Message>Thanks! Sending iMessage now!</Message></Response>');
    }
});

server.start();
