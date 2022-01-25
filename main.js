//OK, AGORA VOCÊ PODE USAR A API DO GOOGLE IMAGE SCRAPER PARA TESTAR O COMANDO DE MANDAR FOTOS ALEATÓRIAS DE GATINHOS NO SERVER
//DEPOIS DISSO, VOCÊ PRECISA DORMIR MEU DEUS


const imagemLoki = "https://i.imgur.com/kXbjyFS.png"

const Discord = require('discord.js'); //import DiscordJS, {Intents} from 'discord.js'

require('dotenv').config();

const client = new Discord.Client({

    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_WEBHOOKS
    ]

})

const prefix = '%';

const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))

//CRIA ARQUIVOS SEPARADOS PARA CADA COMANDO
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}

//MENSAGEM DE LOGIN DO BOT
client.on('ready', () => {
  console.log(`Logged in as LokiBot!`);
});



//RESPOSTAS À COMANDOS COM PREFIXO %
client.on('messageCreate', (message) => {
    
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);

    const command = args.shift().toLowerCase();

    if (command === 'twitch'){
        client.commands.get('twitch').execute(message, args);
    }

    else if (command === 'loki')
    {
        client.commands.get('loki').execute(message, args, Discord);
    }

    else if (command === 'loki')
    {
        client.commands.get('loki').execute(message, args, Discord);
    }

})


//RESPOSTAS SEM PREFIXO
client.on('messageCreate', (message) => {

    if (message.author.bot) return;    
    
        if (message.content === 'ping'){
            message.reply({
                content: 'pong',
            })
        }
    
        else if (message.content === 'cu' || message.content === 'Cu' || message.content === 'cU' || message.content === 'CU'){
            message.reply({
                content: 'cu',
            })
        }
})


client.login(process.env.TOKEN);