const { Client, CommandInteraction, MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "invite",
    description: "Gets the bot's invite link",
    type: 'CHAT_INPUT',
    run: async (client, interaction, args) => {
      let msg = await interaction.followUp(`Loading..`);

      const emb = new MessageEmbed()
      .setColor(client.config.color.main)
      .setTitle(`Invite ${client.user.username}`)
      .setDescription(`Thanks for choosing **${client.user.username}** as your choosen bot, you can invite me by clicking the button below.=`)
      .setThumbnail(client.user.displayAvatarURL({ dynamic : true }))
      .setFooter(`DECODERS`) 

      const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
				.setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`)
				.setLabel('Instant')
				.setStyle('LINK'),
			);
      
      setTimeout(() => {
        msg.edit({ content: ` `, embeds: [emb], components: [row] });
      }, 500);
    },
};
