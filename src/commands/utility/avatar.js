const { SlashCommandBuilder, EmbedBuilder, Embed} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('avatar')
		.setDescription('Returns the avatar of the user.'),
	async execute(interaction, client) {
		const embed = new EmbedBuilder()
			.setColor(client.color)
			.setImage(interaction.user.displayAvatarURL({
				size:1024,
				dynamic:true
			}))
			.setAuthor({
				name: interaction.user.tag,
				iconURL: interaction.user.displayAvatarURL()
			})
			.setDescription(`[Link to image](${interaction.user.displayAvatarURL()})`)
			.setURL(interaction.user.displayAvatarURL());

			await interaction.reply({
				embeds: [embed]
			});
	},
};