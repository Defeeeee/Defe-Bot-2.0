const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class KickCommand extends BaseCommand {
  constructor() {
    super('kick', 'moderacion', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("No podes usar este comando.")
    const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    let reason = args.slice(1).join(" ")
    if (!reason) reason = "No hay razon :p"
    const kickembed = new Discord.MessageEmbed()
    .setTitle(`Fuiste expulsado de ${message.guild.name}`)
    .setDescription(`Razon : ${reason}`)
    .setColor("#0B97B9")
    .setTimestamp()
    .setFooter(client.user.tag, client.user.displayAvatarURL());
    if (!args[0]) return message.channel.send("Necesitas poner el usuario para kickear. ` e!kick @user reason`")
    if (!mentionedMember) return message.channel.send('El usuario no está en el server')
 
  try {
await mentionedMember.send(kickembed);
  } catch (err) {
    console.log(`No pude enviar el mensaje al miembro`);
  }

  try {
    await mentionedMember.kick(reason)
    .then(messages => message.channel.send(`Se kickeo a ${mentionedMember} correctamente`));
  } catch (err) {
    console.log(err);
    return message.channel.send("No pude kickear al miembro");
  }
  }
}