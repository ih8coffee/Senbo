module.exports = {
	name: 'ready',
	once: true,
	async execute(client) {
		console.log(`[NOTICE] ${client.user.tag} is logged in`);
	}
}