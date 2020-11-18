const Discord = require('discord.js');
const client = new Discord.Client();
const process = require('process');
require('dotenv').config();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity("I manage roles here")
        .then()
        .catch(console.error);
});

let token = process.env.DISCORD_CALCULATOR_TOKEN;
client.login(token);
module.exports = client;