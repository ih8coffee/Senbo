const { SlashCommandBuilder, StringSelectMenuBuilder, ActionRowBuilder, StringSelectMenuOptionBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('menu')
		.setDescription('Returns a select menu!'),
	async execute(interaction,client) {
		const menu = new StringSelectMenuBuilder()
			.setCustomId(`sub-menu`)
			.setMinValues(1)
			.setMaxValues(1)
			.setOptions(new StringSelectMenuOptionBuilder({
				label: `Option #1`,
				value: `1`
			}),new StringSelectMenuOptionBuilder({
				label: `Option #2`,
				value: `2`
			}));

		await interaction.reply({
			components: [new ActionRowBuilder().addComponents(menu)]
		});
	},
};