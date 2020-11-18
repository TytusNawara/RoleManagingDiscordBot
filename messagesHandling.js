// const client = require('./clientStartup.js');
const process = require('process');

const discord = require('discord.js');

const roleManaging = require ('./roleManagingMethods.js');
const rolesData = require('./rolesData.js');
const availableRoles = rolesData.avalilableRoles;
const BOT_PREFIX = "!";


const exampleEmbed = new discord.MessageEmbed()
    .setColor('#32ad53')
    .setAuthor('Genji bot')
    .setDescription('I manage roles and thematic channels on this server')
    .addFields(
        { name: '!joinRole [roleName]', value: 'Gives thematic role to u' },
        { name: '!removeRole [roleName]', value: 'Removes role from you' },
         { name: '!createRole [roleName]', value: 'Admin only! Creates a role.' }
    )
    .addField('Available roles:', availableRoles.join(", "), true);



function handleMessage(message){
    if(message.author.bot)
        return;
    if(!message.content.startsWith(BOT_PREFIX))
        return;
    let command = message.content.slice(BOT_PREFIX.length);
    let splitted = command.split(" ");
    if(splitted.length === 1){
        if(splitted[0] === 'joinRole' || splitted[0] === 'removeRole'){
            message.reply("You need to specify a role");
        }else if(splitted[0] === "help"){
            message.channel.send(exampleEmbed);
        }
    }
    else if(splitted.length === 2){
        let authorMember = message.guild.member(message.author);
        if(splitted[0] === 'joinRole' ){
            if(!availableRoles.includes(splitted[1]))
            {
                message.reply("Wrong role name");
                return;
            }
            let result = roleManaging.addRoleToUser(authorMember, splitted[1], message);

        }else if(splitted[0] === "removeRole"){
            if(!availableRoles.includes(splitted[1]))
            {
                message.reply("Wrong role name");
                return;
            }
            roleManaging.removeRoleFromUser(authorMember, splitted[1], message);
        }
        if(splitted[0] === 'createRole' ){
            if (message.member.hasPermission("ADMINISTRATOR")){
                rolesData.createRole(splitted[1]);
                message.reply("role created, restarting bot");
                setTimeout((function() {
                    return process.exit(22);
                }), 20000);

            }else{
                message.reply("You don 't have permission to do that");
            }
        }
    }


}

exports.handleMessage = handleMessage;