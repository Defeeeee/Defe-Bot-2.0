const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class NicknameCommand extends BaseCommand {
  constructor() {
    super('nickname', 'moderacion', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("CHANGE_NICKNAME")) return message.channel.send("No podes usar este comando");
    if (!message.guild.me.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("Necesito el permiso de \`MANAGE_NICKNAMES\` para cambiar el nickname");

    const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    const nickName = args.slice(1).join(" ");

    if (!args[0]) return message.channel.send("Tenes que mencionar a un miembro `e!nickname @miembro nickname`");
    if (!mentionedMember) return message.channel.send("Ese miembro no esta en el server")
    if (!nickName) return message.channel.send("Tenes que definir un nuevo nick para el miembro. `e!nickname @miembro nickname`");
    if (!mentionedMember.kickable) return message.channel.send("El rol del miembro es mas altoque el mio");

    await mentionedMember.setNickname(nickName).catch(err => console.log(err) && message.channel.send("No pude cambiar el usuario por un error"));
    }
}