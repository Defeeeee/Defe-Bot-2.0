const BaseEvent = require('../utils/structures/BaseEvent');
const Discord = require ('discord.js');

module.exports = class MessageDeleteEvent extends BaseEvent {
  constructor() {
    super('messageDelete');
  }
  
  async run(client, message) {
    const embed = new Discord.MessageEmbed()
      .setTitle(`Se borro un Mensaje`)
      .setAuthor(`${message.author.username}`, message.author.avatarURL())
      .setDescription(message.content)
    client.channels.cache.get(`829513632844611594`).send(embed);
  }
}