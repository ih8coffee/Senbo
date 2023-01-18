const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('luckiermf')
		.setDescription('This a luckier mf'),
	async execute(interaction) {
		await interaction.reply("https://cdn.discordapp.com/attachments/898894412724187176/1065102138944004156/Screenshot_2023-01-17-21-53-54-252_com.miui.gallery.jpg");
		await interaction.followUp("500 pulls only with weapon btw");
	},
};