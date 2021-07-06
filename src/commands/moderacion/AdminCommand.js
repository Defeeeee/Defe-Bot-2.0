const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class AdminCommand extends BaseCommand {
  constructor() {
    super('admin', 'moderacion', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No tenes permiso para usar este comando.");
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send('No tengo los permisos necesarios');

    const staffRole = message.guild.roles.cache.get('852725082366672927');
    const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    const staffNick = ' | ADMIN'
    const modEmbed = new Discord.MessageEmbed()
      .setTitle("Nuevo admin " + mentionedMember.user.username);
    const modEmbed1 = new Discord.MessageEmbed()
      .setTitle(`Ahora sos admin en ${message.guild.name}`);

    if (!staffRole) return message.channel.send('No hay ningun rol de Admin');
    if (!args[0]) return message.channel.send("`e!admin @miembro` o `e!admin ID`");
    if (!mentionedMember) return message.channel.send("El miembro no esta en el server")

    await mentionedMember.roles.add(staffRole.id).catch(err => message.channel.send("No pude poner el rol de admin"));
    await mentionedMember.setNickname(mentionedMember.user.username + staffNick)
    client.channels.cache.get (`829513115044937748`).send(modEmbed);
    await mentionedMember.send(modEmbed1).catch(err => console.log(err));
  }
}