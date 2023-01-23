const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('button')
		.setDescription('Sends invite link!'),
	async execute(interaction, client) {
		const button = new ButtonBuilder()
			.setLabel("Invite me!")
			.setEmoji("957387006369996850")
			.setStyle(ButtonStyle.Link)
			.setURL("https://discord.com/api/oauth2/authorize?client_id=1063582757642571776&permissions=1084479760448&scope=bot");
		await interaction.reply({
			components: [new ActionRowBuilder().addComponents(button)]
		});
	},
};