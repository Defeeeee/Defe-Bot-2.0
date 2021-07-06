// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-channelDelete
const BaseEvent = require('../utils/structures/BaseEvent');
const Discord = require ('discord.js');

module.exports = class ChannelDeleteEvent extends BaseEvent {
  constructor() {
    super('channelDelete');
  }
  
  async run(client, channel) {
    console.log('channel' + channel.name + ' was deleted.');
    const embed = new Discord.MessageEmbed()
      .setTitle(`Se elimino el canal ${channel.name}`)
      .setColor('#bf2121')
    client.channels.cache.get(`829513632844611594`).send(embed);
  }
}
