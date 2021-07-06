const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')
module.exports = class PurgeCommand extends BaseCommand {
  constructor() {
    super('purge', 'moderacion', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('No podes usar este comando.');
    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send("no tengo el permiso para \`MANAGE_MESSAGES\`");
    if (!args[0]) return message.channel.send("dame un numero de mensajes \`e!purge [numero]\`");
    const amountToDelete = Number(args[0], 10);

    if (isNaN(amountToDelete)) return message.channel.send("Eso no es un numero valido")
    if (!Number.isInteger(amountToDelete)) return message.channel.send("Tiene que ser un numero entero")
    if (!amountToDelete || amountToDelete < 2 || amountToDelete > 100) return message.channel.send('El numero tiene que estar entre 2 y 100')
    const fetched = await message.channel.messages.fetch({
      limit: amountToDelete
    });

    try {
      await message.channel.bulkDelete(fetched)
        .then (messages => message.channel.send(`${messages.size} mensajes borrados`))
    } catch (err) {
      console.log(err);
      message.channel.send('No pude eliminer esa cantidad, fijate que sean mas nuevos que 2 semanas');
    }
  }
}