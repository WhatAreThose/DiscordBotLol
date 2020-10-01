const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

client.on('message', message => {

    if (message.content === 'Hi') {

       message.channel.send('Hello! \nI am a custom bot made by <@!430425679834644491>. You can DM him if you want to know how to make a bot! He will simplify the steps if you have not made one before.');

    }
    if (message.content === 'mb!steal') {
     
     message.channel.send('Why are you trying to steal me? :(')
     setTimeout(function(){ 
     
     message.channel.send('Ok fine... here is the link to take me: https://github.com/WhatAreThose/DiscordBotLol/')
      
     }, 3000);
    }
    // MAKE SURE TO UPDATE THIS ME
    if (message.content === 'mb!help') {
     const exampleEmbed = new Discord.MessageEmbed()
     exampleEmbed.setTitle('Current Commands')
     exampleEmbed.setDescription('Testing')
     channel.send(exampleEmbed);
    }
});

 
client.login(process.env.BOT_TOKEN); //BOT_TOKEN should be under Bot > Token.
