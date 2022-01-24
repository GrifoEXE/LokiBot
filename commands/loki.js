//OK ENTÃO, ESSE COMANDO NÃO MANDA UM EMBED MAS SIM UM LINK PARA UMA IMAGEM DO LOKI QUE EU POSTEI NO IMGUR
//USAR O MESSAGEEMBED PARA CRIAR O TEMPLATE PROS CARDS DE GATINHO

module.exports = {
    name: 'loki',
    description: 'comando para mandar imagem do Loki dormindo',
    execute(message, args, Discord)
    {
        const lokiEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('cu')
        //.setURL('http://twitch.tv/grifoexe')
        .setDescription('teste')
        .addFields(
            {name: 'por favor funciona', value: 'eu nunca pedi nada'}
        )
        //.setImage('https://i.imgur.com/kXbjyFS.png');

        message.reply('https://i.imgur.com/kXbjyFS.png');
    }

}