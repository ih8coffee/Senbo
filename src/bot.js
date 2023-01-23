//imports .env
require('dotenv').config();

//imports necessary discordjs classes and declares token. 
const { token } = process.env;
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const fs = require('fs');

const client = new Client({ intents: GatewayIntentBits.Guilds });
client.commands = new Collection();
client.buttons = new Collection();
client.selectMenus = new Collection();
client.commandArray = [];
client.color = "0xFFB6C1";

//import functions folder and filters non-js files
const functionsFolders = fs.readdirSync(`./src/functions`);
for(const folder of functionsFolders){
	const functionFiles = fs
		.readdirSync(`./src/functions/${folder}`)
		.filter(file => file.endsWith('.js'));
	//passing (client) through every function to be able to call async 
	for(const file of functionFiles)
		require(`./functions/${folder}/${file}`)(client);
}

client.handleEvents();
client.handleCommands();
client.handleComponents();
client.login(token);