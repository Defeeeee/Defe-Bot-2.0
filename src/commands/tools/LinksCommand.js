const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class LinksCommand extends BaseCommand {
  constructor() {
    super('links', 'tools', []);
  }

  async run(client, message, args) {
    let dia = args[0];
    let nivel = args[1];
    const escuelaRole = message.guild.roles.cache.get('850400955374501949');
    const teens2role = message.guild.roles.cache.get('850416385732771841');
    const keyrole = message.guild.roles.cache.get('850416442737819678');
    const preliminaryrole = message.guild.roles.cache.get('850416472181571605');
    const teens5role = message.guild.roles.cache.get('850416506407485501');
    const prefirstrole = message.guild.roles.cache.get('850433661525295124');
    const firstrole = message.guild.roles.cache.get('850416552523333642');

    const linkedjudia = ('http://bit.ly/edjudia')
    const linkmatemica = ('http://bit.ly/matemica2')
    const linklengua = ('http://bit.ly/lenguaa')
    const linkhistoria = ('http://bit.ly/rociogomez')
    const linkarte = ('http://bit.ly/patocuascuas')
    const linkedfisica = ('http://bit.ly/sapitosapitoo')
    const linkbio = ('http://bit.ly/amancum')
    const linkplosca = ('http://bit.ly/ploscar')
    const linktecnu = ('http://bit.ly/sergiogaucho')
    const linkpablito = ('http://bit.ly/parvosharpness');

    const linkslunes = new Discord.MessageEmbed()
      .setTitle(`Links ${dia}`)
      .addField('Primer bloque (8:05-9:05): Ed Judia, Fabiana Mibashan', `${linkedjudia}`)
      .addField('Segundo Bloque (9:20-10:40): Matematica, Carlos Federico', `${linkmatemica}`)
      .addField('Tercer Bloque (10:55-12:15): Ingles', '`e!links ingles (nivel)`')
      .addField('\u200b', '\u200b')
      .addField('Novamoo', '\u200b')
      .setFooter('Defe Bot desarrollado por Federico Diaz Nemeth');
    const linksmartes = new Discord.MessageEmbed()
      .setTitle(`Links ${dia}`, '\u200b')
      .addField('Primer bloque (8:05-9:05): Ed Judia, Fabiana Mibashan', `${linkedjudia}`)
      .addField('Segundo Bloque (9:20-10:40): Lengua, Patricia Benavidez', `${linklengua}`)
      .addField('Tercer Bloque (10:55-12:`15): Historia, Rocio Gomez', `${linkhistoria}`)
      .addField('\u200b', '\u200b')
      .addField('Almuerzo (12:15-13:10)', '\u200b')
      .addField('Cuarto Bloque (13:10-14:30): Matematica, Carlos Federico', `${linkmatemica}`)
      .addField('Quinto Bloque (14:40-16:00): Arte, Patricio Pascual', `${linkarte}`)
      .addField('\u200b', '\u200b')
      .addField('Novamoo', '\u200b')
      .setFooter('Defe Bot desarrollado por Federico Diaz Nemeth');
    const linksmiercoles = new Discord.MessageEmbed()
      .setTitle(`Links ${dia}`, '\u200b')
      .addField('Primer bloque (8:05-9:05): Educacaion Fisica, Ariel Sapir', `${linkedfisica}`)
      .addField('Segundo Bloque (9:20-10:40): Ingles, ', '`e!links ingles (nivel)`')
      .addField('Tercer Bloque (10:55-12:15): Biologia, Amancay Ramirez', `${linkbio}`)
      .addField('\u200b', '\u200b')
      .addField('Almuerzo (12:15-13:10)', '\u200b')
      .addField('Cuarto Bloque (13:10-14:30): Matematica, Carlos Federico', `${linkmatemica}`)
      .addField('Quinto Bloque (14:40-16:00): Lengua, Patricia Benavidez', `${linklengua}`)
      .addField('\u200b', '\u200b')
      .addField('Novamoo', '\u200b')
      .setFooter('Defe Bot desarrollado por Federico Diaz Nemeth');
    const linksjueves = new Discord.MessageEmbed()
      .setTitle(`Links ${dia}`, '\u200b')
      .addField('Primer bloque (8:05-9:05): Etica, Alberto Plosker', `${linkplosca}`)
      .addField('Segundo Bloque (9:20-10:40): Ingles', '`e!links ingles (nivel)`')
      .addField('Tercer Bloque (10:55-12:15): Biologia, Amancay Ramirez', `${linkbio}`)
      .addField('\u200b', '\u200b')
      .addField('Almuerzo (12:15-13:10)', '\u200b')
      .addField('Cuarto Bloque (13:10-14:30): Tecnologia, Sergio Coppa', `${linktecnu}`)
      .addField('Quinto Bloque (14:40-16:00): Tecnologia, Sergio Coppa', `${linktecnu}`)
      .addField('\u200b', '\u200b')
      .addField('Novamoo', '\u200b')
      .setFooter('Defe Bot desarrollado por Federico Diaz Nemeth');
    const linksviernes = new Discord.MessageEmbed()
      .setTitle(`Links ${dia}`, '\u200b')
      .addField('Primer bloque (8:05-9:05): Educacaion Fisica, Ariel Sapir', `${linkedfisica}`)
      .addField('Segundo Bloque (9:20-10:40): Historia, Rocio Gomez', `${linkedfisica}`)
      .addField('Tercer Bloque (10:55-12:15): Hebreo, Fabiana Mibashan', `${linkedjudia}`)
      .addField('Cuarto Bloque (12:30-13:30): Geografia, Pablo Sharpe', `${linkpablito}`)
      .addField('\u200b', '\u200b')
      .addField('Novamoo', '\u200b')
      .setFooter('Defe Bot desarrollado por Federico Diaz Nemeth');

    const linkteens2 = new Discord.MessageEmbed()
      .setTitle('Teens 2')
      .setDescription('n/a');
      
    const linkkey = new Discord.MessageEmbed()
      .setTitle('Key')
      .setDescription('n/a');

    const linkpreliminary = new Discord.MessageEmbed()
      .setTitle('Preliminary')
      .setDescription('https://us02web.zoom.us/j/87933462994');

    const linkteens5 = new Discord.MessageEmbed()
      .setTitle('Teens 5')
      .setDescription('n/a');

    const linkfirst = new Discord.MessageEmbed()
      .setTitle('First')
      .setDescription('https://us02web.zoom.us/j/82390981647');
    const linkprefirst = new Discord.MessageEmbed()
      .setTitle('Pre First')
      .setDescription('https://us02web.zoom.us/j/88003914694');

    const helpembed = new Discord.MessageEmbed()
      .setTitle('Ayuda')
      .addField('Poner los links de un dia en especifico `e!links (dia)`', '\u200b')
      .addField('Poner los links de ingles `e!links ingles (nivel)`', '\u200b')

    if (!message.member.roles.cache.has(escuelaRole.id)) return message.channel.send('No podes usar este comando.');
    if (!dia) return message.channel.send('Tenes que especificar un dia o si es un link de ingles `e!links help`')
    if (dia == 'lunes') message.channel.send(linkslunes);
    if (dia == 'martes') message.channel.send(linksmartes);
    if (dia == 'miercoles') message.channel.send(linksmiercoles);
    if (dia == 'jueves') message.channel.send(linksjueves);
    if (dia == 'viernes') message.channel.send(linksviernes);
    if (dia == 'ingles') {

      if (!nivel) return message.channel.send('Tenes que especificar un nivel')

      if (nivel == 'teens2') {
        if (!message.member.roles.cache.has(teens2role.id)) return message.channel.send('No estas en teens 2')
        message.channel.send(linkteens2)
          .then(msg => {
    msg.delete({ timeout: 10000 })
  })
      }
      if (nivel == 'key') {
        if (!message.member.roles.cache.has(keyrole.id)) return message.channel.send('No estas en key')
        message.channel.send(linkkey)
          .then(msg => {
    msg.delete({ timeout: 10000 })
  })
      }
      if (nivel == 'preliminary') {
        if (!message.member.roles.cache.has(preliminaryrole.id)) return message.channel.send('No estas en preliminary')
        message.channel.send(linkpreliminary)
          .then(msg => {
    msg.delete({ timeout: 10000 })
  })
      }
      if (nivel == 'teens5') {
        if (!message.member.roles.cache.has(teens5role.id)) return message.channel.send('No estas en teens 5')
        message.channel.send(linkteens5)
          .then(msg => {
    msg.delete({ timeout: 10000 })
  })
      }
      if (nivel == 'prefirst') {
        if (!message.member.roles.cache.has(prefirstrole.id)) return message.channel.send('No estas en Pre First')
        message.channel.send(linkprefirst)
          .then(msg => {
    msg.delete({ timeout: 10000 })
  })
      }
      if (nivel == 'first') {
        if (!message.member.roles.cache.has(firstrole.id)) return message.channel.send('No estas en first')
        message.channel.send(linkfirst)
          .then(msg => {
    msg.delete({ timeout: 10000 })
  })
      }
    }
    if (dia == 'help') message.channel.send(helpembed)
  }
}