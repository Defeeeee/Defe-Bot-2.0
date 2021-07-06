// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-channelCreate
const BaseEvent = require('../utils/structures/BaseEvent');
const Discord = require ('discord.js');

module.exports = class ChannelCreateEvent extends BaseEvent {
  constructor() {
    super('channelCreate');
  }
  
  async run(client, channel) {
    console.log('channel' + channel.name + ' was created.');
    const embed = new Discord.MessageEmbed()
      .setTitle(`Se creo el canal ${channel.name}`)
      .setColor('#21bf4b')
    client.channels.cache.get(`829513632844611594`).send(embed);
  }
}