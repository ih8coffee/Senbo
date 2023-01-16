const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
// Create a new client instance
const client = new Client({ intents: [
	'Guilds',
	'GuildMessages',
	'MessageContent'
	], partials:['Channel'] });
// Command handler

client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on("messageCreate", async (message) => {
	if (message.author.bot) return false;
	if (message.content.toLowerCase().includes("genshin")||message.content.includes("원신")) {
		const genshitCheck = Math.random()*100;
		console.log(`${message.author.username.padEnd(15, ' ')} ${genshitCheck}`);
		if(genshitCheck<13){
			message.reply(`genshit*`);
		}
	}
});

client.login(token);