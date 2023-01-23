const { SlashCommandBuilder, EmbedBuilder, Embed} = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('mylo')
		.setDescription('This is my honest reaction to that information'),
	async execute(interaction,client) {
		await interaction.deferReply({
			fetchReply: true
		});
		const embed = new EmbedBuilder()
			.setColor(client.color)
			.setDescription("My honest reaction to that information.")
			.setImage("https://cdn.discordapp.com/attachments/898894412724187176/1064068318094446672/IMG_3122.jpg")
		await interaction.editReply({
			embeds: [embed]
		});
	},
};