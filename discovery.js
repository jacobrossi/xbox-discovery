#!/usr/bin/env node
var Smartglass = require('xbox-smartglass-core-node'); //require('../src/smartglass');

Smartglass().discovery().then(function(consoles){
    for(var xbox in consoles){
        console.log('- Device found: ' + consoles[xbox].message.name);
        console.log('  Address: '+ consoles[xbox].remote.address + ':' + consoles[xbox].remote.port);
    }
    if(consoles.length == 0){
        console.log('No consoles found on the network')
    }
}, function(error){
    console.log(error)
});