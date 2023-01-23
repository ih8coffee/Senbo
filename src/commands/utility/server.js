const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Provides information about the server.'),
	async execute(interaction,client) {
		// interaction.guild is the object representing the Guild in which the command was run
		const message = await interaction.deferReply({
			fetchReply: true
		});
		const embed = new EmbedBuilder()
			.setTitle(`<:envisheesh2:854831341098238012> ​ ${interaction.guild.name}`)
			.setDescription(`Owned by <@${interaction.guild.ownerId}>\n${interaction.guild.description}`)
			.setColor(client.color)
			.addFields([
				{
					name: `Member Count`,
					value: `${interaction.guild.memberCount}`,
					inline: true,
				},
				{
					name: `Created at`,
					value: `${interaction.guild.createdAt.toString().slice(4,15)}`,
					inline: true,
				}
			])
			.setFooter({
				text: interaction.user.tag,
				iconURL: interaction.user.displayAvatarURL()
			})
			.setTimestamp(Date.now())
			.setThumbnail(interaction.guild.iconURL());

		await interaction.editReply({
			embeds: [embed]
		});
	},
};