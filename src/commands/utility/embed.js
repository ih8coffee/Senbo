const { SlashCommandBuilder, EmbedBuilder, Embed} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('embed')
		.setDescription('Returns an example embed.'),
	async execute(interaction, client) {
		const embed = new EmbedBuilder()
			.setTitle(`Example Title`)
			.setDescription(`Example Description`)
			.setColor(client.color)
			.setThumbnail(client.user.displayAvatarURL())
			.setImage(client.user.displayAvatarURL())
			.setTimestamp(Date.now())
			.setAuthor({
				name: interaction.user.tag,
				iconURL: interaction.user.displayAvatarURL()
			})
			.setFooter({
				text: interaction.user.tag,
				iconURL: interaction.user.displayAvatarURL()
			})
			.addFields([
				{
					name: `asd`,
					value: `asdval`,
					inline: true,
				},
				{
					name: `zxc`,
					value: `zxcval`,
					inline: true,
				}
			]);
			await interaction.reply({
				embeds: [embed]
			});
	},
};