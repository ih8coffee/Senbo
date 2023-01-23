const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Provides information about the user.'),
	async execute(interaction,client) {
		await interaction.deferReply({
			fetchReply: true
		});
		const embed = new EmbedBuilder()
			.setTitle(`${interaction.user.username}`)
			.setColor(client.color)
			.addFields([
				{
					name: `Account created at: `,
					value: `${interaction.user.createdAt.toString().slice(4,15)}`,
					inline: true,
				},
				{
					name: `Joined guild at`,
					value: `${interaction.member.joinedAt.toString().slice(4,15)}`,
					inline: true,
				}
			])
			.setThumbnail(interaction.user.displayAvatarURL());
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
		await interaction.editReply({
			embeds: [embed]
		});
	},
};