const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('about')
		.setDescription('Provides information on Senbo bot!'),
	async execute(interaction) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
		await interaction.reply(`Senbo is a pet project and is currently absolutely useless, try /ping and /pong to have a deep meaningful insight on life.`);
	},
};