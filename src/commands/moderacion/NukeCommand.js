const { Role } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class NukeCommand extends BaseCommand {
  constructor() {
    super('nuke', 'moderacion', []);
  }

  async run(client, message, args) {

 
    if (!message.member.hasPermission("ADMINISTARTOR")) return message.channel.send("No podes usar esto.")
    if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Ni rol no tiene el permiso de administrar los canales");

    let reason = args.join("");
    const nukeChannel = message.channel;
    
    if (!reason) reason = "No hay razon"
    if (!nukeChannel.deletable) return message.channel.send("Este canal no se puede borrar");

    await nukeChannel.clone().catch(err => console.log(err));
    await nukeChannel.delete().catch(err => console.log(err));
  }
}