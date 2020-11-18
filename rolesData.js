const fs = require('fs');
let avalilableRoles = [];

function update(){
    let rawdata = fs.readFileSync('./roles.json');
    avalilableRoles = JSON.parse(rawdata);
}

update();

function createRole(roleName){
    let rawdata = fs.readFileSync('./roles.json');
    let roles = JSON.parse(rawdata);
    roles.push(roleName);
    let rawJson = JSON.stringify(roles);
    fs.writeFile('./roles.json', rawJson, 'utf8', (e) => console.log(e));
    exports.avalilableRoles = roles;
}

exports.avalilableRoles = avalilableRoles;
exports.createRole = createRole;
