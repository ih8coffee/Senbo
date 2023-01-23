module.exports = {
	name: 'interactionCreate',
	async execute(interaction, client) {
		if(interaction.isChatInputCommand()){
			const { commands } = client;
			const { commandName } = interaction;
			const command = commands.get(commandName);
			if(!command) return;

			try{
				await command.execute(interaction, client);
			} catch(error){
				console.error(error);
				await interaction.reply({
					content: `Whoops! Something went wrong!`,
					ephemeral: true
				});
			}
		}else if(interaction.isButton()){
			const { buttons } = client;
			const { customId } = interaction;
			const button = buttons.get(customId);
			if(!button) return new Error('This button doesnt do anything!');
			try{
				await button.execute(interaction,client);
			} catch(err){
				console.error(err);
				await interaction.reply({
					content: `Whoops! Something went wrong!`,
					ephemeral: true
				});
			}
		}else if(interaction.isStringSelectMenu()){
			const { selectMenus } = client;
			const { customId } = interaction;
			const menu = selectMenus.get(customId);
			if(!menu) return new Error('This menu doesnt do anything!');
			try{
				await menu.execute(interaction,client);
			}catch(err){
				console.error(err);
				await interaction.reply({
					content: `Whoops! Something went wrong!`,
					ephemeral: true
				});
			}
		}
	}
}