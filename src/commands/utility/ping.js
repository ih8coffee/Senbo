const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with pong!'),
	async execute(interaction, client) {
		const message = await interaction.deferReply({
			fetchReply: true
		});
		const embed = new EmbedBuilder()
			.setTitle('🏓  Pong!')
			.addFields([
				{
					name: ` `,
					value: `**API Latency**: ${client.ws.ping}ms`,
				},
				{
					name: ` `,
					value: `**Client Ping**: ​ ​ ${message.createdTimestamp - interaction.createdTimestamp}ms`,
				}
			])
			.setColor(client.color);
		await interaction.editReply({
			embeds: [embed]
		});
	}
}