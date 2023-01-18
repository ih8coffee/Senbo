const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('luckymf')
		.setDescription('This a lucky mf'),
	async execute(interaction) {
		await interaction.reply("https://cdn.discordapp.com/attachments/898029041876103199/1065100643271966861/Screenshot_2023-01-18_at_08.49.25.png");
	},
};