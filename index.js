/*
    Author: Carlo I Gonzalez "SpeedyOlrac"
    Desciption: THis bot is made to help spirit island card and spirit panel look ups.
        Now has random Spirit and adversary fuctions.
        Creates link to the Spirit ISland FAQ page.
        Expan Search to other commands
    Version 2.0.2 role bot

    Additional work by Gudradain

*/


require('dotenv').config(); 
const fs = require('fs');
const Discord = require('discord.js');
const bot = new Discord.Client({
    partials: ['MESSAGE', 'REACTION']
});

bot.commands = new Discord.Collection();

const PREFIX = "-";

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
		if(command.public){
		bot.commands.set(command.name, command);
}};

//console.log(bot.commands);

bot.once('ready', () => {
	console.log('This bot is online');
});

bot.on('message', async msg => {

	if (!msg.content.startsWith(PREFIX)) return;

	const args = msg.content.slice(PREFIX.length).trim().split(' ');
	const command = args.shift().toLowerCase();
	console.log(command);
	
	if (!bot.commands.has(command)) return console.log("command not in list");

	try {
		await bot.commands.get(command).execute(msg, args, Discord);
	} catch (error) {
		console.error(error);
		//msg.reply('there was an error trying to execute that command!');
	}
});



bot.on('messageReactionAdd', async (reaction, user) => {
    const channel = '743227873875329137';
    const LFGRole = message.guild.roles.cache.find(role => role.name === "LFG");
    //const blueTeamRole = message.guild.roles.cache.find(role => role.name === "YOUR_ROLE");

    const lfgEmote = 'FlagBlank';
    //const blueTeamEmoji = 'YOUR_EMOJI';

    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    if (user.bot) return;
    if (!reaction.message.guild) return;

    if (reaction.message.channel.id == channel) {
        if (reaction.emoji.name === lfgEmote) {
            await reaction.message.guild.members.cache.get(user.id).roles.add(LFGRole);
        }
        if (reaction.emoji.name === blueTeamEmoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.add(blueTeamRole);
        }
    } else {
        return;
    }

});

bot.on('messageReactionRemove', async (reaction, user) => {

    const channel = '743227873875329137';
    const LFGRole = message.guild.roles.cache.find(role => role.name === "LFG");
    //const blueTeamRole = message.guild.roles.cache.find(role => role.name === "YOUR_ROLE");

    const lfgEmote = 'FlagBlank';
    //const blueTeamEmoji = 'YOUR_EMOJI';

    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    if (user.bot) return;
    if (!reaction.message.guild) return;


    if (reaction.message.channel.id == channel) {
        if (reaction.emoji.name === lfgEmote) {
            await reaction.message.guild.members.cache.get(user.id).roles.remove(LFGRole);
        }
        if (reaction.emoji.name === blueTeamEmoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.remove(blueTeamRole);
        }
    } else {
        return;
    }
});
}



/*
const adminID = '176329826641117186';
const messageID = ['747806738308268075', '747220369857052842']; //747517049433227327 
const roleID = ['743228206806728766', '498865006297743362'];//743228206806728766
const emojiID = ['742199330018164776', '411249545394126854'];//742199330018164776

bot.on('messageReactionAdd', async (reaction, user) => {
    
    let applyRole = async () => {
        if (messageID.indexOf(reaction.message.id) == -1) return console.log('incorrect message: ' + reaction.message.id);

        let emojiName = reaction.emoji.id;
		let role = roleID[emojiID.indexOf(emojiName)];
		let member = reaction.message.guild.members.cache.find(member => member.id === user.id);
        try {

            if(role && member ) {
                console.log("Role and member found.");
                await member.roles.add(role);
                console.log("Done.");
            }
        }
        catch(err) {
            console.log(err);
        }
    }
    if(reaction.message.partial)
    {
        try {
            let msg = await reaction.message.fetch(); 
            console.log(msg.id);
            if(messageID.indexOf(reaction.message.id ))
            {
                console.log("Cached")
                applyRole();
            }
        }
        catch(err) {
            console.log(err);
        }
    }
    else 
    {
        console.log("Not a partial.");
        if(messageID.indexOf(reaction.message.id ) != -1) {
            console.log(true);
            applyRole();
        }
    }
});

bot.on('messageReactionRemove', async (reaction, user) => {
    
    let removeRole = async () => {
        if (messageID.indexOf(reaction.message.id) == -1) return console.log('incorrect message: ' + reaction.message.id);

    
        let emojiName = reaction.emoji.id;
		let role = roleID[emojiID.indexOf(emojiName)];
		let member = reaction.message.guild.members.cache.find(member => member.id === user.id);
        try {
            if(roleID && member) {
                console.log("Role and member found.");
                await member.roles.remove(role);
                console.log("Done.");
            }
        }
        catch(err) {
            console.log(err);
        }
    }
    if(reaction.message.partial)
    {
        try {
            let msg = await reaction.message.fetch(); 
            console.log(msg.id);
            if(msg.id === messageID)
            {
                console.log("Cached")
                removeRole();
            }
        }
        catch(err) {
            console.log(err);
        }
    }
    else 
    {
        console.log("Not a partial.");
        console.log(messageID.indexOf(reaction.message.id ) + " " + reaction.message.id)
        if(messageID.indexOf(reaction.message.id != -1 )) {
            console.log(true);
            removeRole();
        }
    }
});

*/
bot.login();