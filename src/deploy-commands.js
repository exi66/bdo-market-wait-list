const { REST, Routes } = require('discord.js');
const { clientId, token } = require('./config.js');

const rest = new REST({ version: '10' }).setToken(token);

// for global commands
rest.put(Routes.applicationCommands(clientId), { body: [] })
	.then(() => console.log('Successfully deleted all application commands.'))
	.catch(console.error);