const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('mylo')
		.setDescription('This is my honest reaction to that information'),
	async execute(interaction) {
		await interaction.reply("https://cdn.discordapp.com/attachments/898894412724187176/1064057188940795934/IMG_3122.png");
	},
};