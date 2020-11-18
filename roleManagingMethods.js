const botStartup = require('./clientStartup.js');

function addRoleToUser(member, roleName, message) {
    let role = member.guild.roles.cache.find(role => role.name === roleName);
    if(!role){
        message.reply("Role not found on a server");
        return;
    }
    let rolePromise = member.roles.add(role).then(() => {
        message.reply("Role " + roleName + " was added to you. My job here is done.")})
        .catch(function(err) {
         // console.log('error: ', err);
            message.reply("Inssuficient client permissions");
    });
}

function removeRoleFromUser(member, roleName, message){
    let role = member.guild.roles.cache.find(role => role.name === roleName);
    if(!role){
        message.reply("Role not found on a server");
        return;
    }
    member.roles.remove(role).then(() => {
        message.reply("Role " + roleName + " was removed, you Mada Mada-fucker")})
        .catch(function(err) {
            // console.log('error: ', err);
            message.reply("Failed to remove role. Are you sure you have it?");
        });
}

exports.addRoleToUser = addRoleToUser;
exports.removeRoleFromUser = removeRoleFromUser;
