const client = require('./clientStartup.js');
const messagesHandling = require('./messagesHandling.js');

client.on('message', message => {
    messagesHandling.handleMessage(message);
});


