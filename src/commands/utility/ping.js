const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with pong!'),
	async execute(interaction, client) {
		const message = await interaction.deferReply({
			fetchReply: true
		});

		const newMessage = `Pong!\nAPI Latency: ${client.ws.ping}ms\nClient Ping: ${message.createdTimestamp - interaction.createdTimestamp}ms`;
		await interaction.editReply({
			content: newMessage
		});
	}
}