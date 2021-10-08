
module.exports.operate = async ({client, msg, args, author, uye, cfg}, ms = require("ms"), Discord = require("discord.js"), Database = require("../models/Ceza.js")) => {
    const { MessageActionRow, MessageButton } = require('discord-buttons')
    const { MessageEmbed } = require("discord.js");
    const moment = require("moment");

    let Sayi = 0;
    client.komutSayisiArttir({Database: require("../models/Member.js"), msg: msg, sayi: 1, type: "cmute"});
    new Database({CezaID: Sayi, Type: "MUTE", userID: uye.id, Author: author.id, Reason: reason, DateNow: new Date(), Activity: true, Temporary: true}).save();

    if ((!author.roles.cache.some(r => cfg.hammers.voiceMuteHammer.includes(r.id))) && (!author.hasPermission("MANAGE_ROLES"))) return client.message(client.yetersizEmbed(msg), msg.channel.id, 5000);
    if (!uye) return client.message(client.uyeEmbed(msg), msg.channel.id, 5000);
    if (author.roles.highest.position <= uye.roles.highest.position) return client.message(client.yetersizYetki("Bu kişi senden `yüksek` veya `aynı` yetkiye sahip olduğu için susturamazsın.", msg), msg.channel.id, 5000);



    let button1 = new MessageButton()
    .setStyle('blurple')
    .setLabel('1') 
    .setID('ceza1') 
  let button2 = new MessageButton()
    .setStyle('blurple')
    .setLabel('2') 
    .setID('ceza2') 

    let button3 = new MessageButton()
    .setStyle('blurple')
    .setLabel('3') 
    .setID('ceza3') 
  
    let button4= new MessageButton()
    .setStyle('blurple')
    .setLabel('4') 
    .setID('ceza4') 
  
    let button5 = new MessageButton()
    .setStyle('blurple')
    .setLabel('5') 
    .setID('ceza5') 

    let button6 = new MessageButton()
    .setStyle('blurple')
    .setLabel('6') 
    .setID('ceza6') 

    let button7 = new MessageButton()
    .setStyle('blurple')
    .setLabel('7') 
    .setID('ceza7') 

    let button8 = new MessageButton()
    .setStyle('blurple')
    .setLabel('8') 
    .setID('ceza8') 

    let button9 = new MessageButton()
    .setStyle('blurple')
    .setLabel('9') 
    .setID('ceza9')

    let button10 = new MessageButton()
    .setStyle('red')
    .setLabel('X') 
    .setID('ceza10')
  
    const ef = new MessageActionRow()
    .addComponents(button1,button2,button3,button4,button5)
    const ef2 = new MessageActionRow()
    .addComponents(button6,button7,button8,button9,button10)

    let mesaj = await msg.channel.send(`${uye} (\`${uye.id}\`) için cezalandırma menüsü:
    

    **1)** Ailevi Küfür - 20 dakika
    **2)** Küfür - 10 dakika
    **3)** Flood / Spam - 10 dakika
    **4)** Tartışma / Kavga - 15 dakika
    **5)** Ortam Bozma / Rahatsızlık Verme - 10 dakika 

    **6)** Sunucuyu Kötülemek - 30 dakika 
    **7)** Manevi Değerlere Küfür / Hakaret - 90 dakika
    **8)** Kadın Üyelere Sarkmak - 20 dakika
    **9)** Siyaset - 20 dakika
           
      `,{components:[ef,ef2]})
      var filter = (button) => button.clicker.user.id === msg.author.id;
      let collector = await mesaj.createButtonCollector(filter) 
      collector.on('collect', async (button) => {
        if (button.id === "ceza1") {
          uye.roles.add(cfg.cezaliRoller.muteRoles);
          const reason = `Ailevi Küfür`
          const Sure = ms('20m')
          if (cfg.cezaliRoller.muteRoles !== "") await uye.roles.add(cfg.cezaliRoller.muteRoles).catch();
          button.reply.defer()
          msg.channel.send(`${uye} kişisi **1 dakika** boyunca tarafından chat kanalları üzerinden susturuldu \`(Ceza ID: #${Sayi})\``)
            .then(msg.delete({ timeout: 1500 })).then((x) => x.delete({ timeout: 5000 })); 
  
            const log = new MessageEmbed()
      .setAuthor( author.displayName, msg.author.avatarURL({dynamic: true}))
      .setColor("RANDOM")
      .setDescription(
`${uye} kişisi **${reason}** sebebiyle **${`${client.format(ms(Sure))}`.replace(", 0 saniye", "").trimEnd()}** chat kanallarında susturuldu. 
───────────────
Mute Atılma Tarihi: **${client.toDate(new Date(Date.now()))}**
      `);
    msg.guild.channels.cache.get(cfg.log.mute).send(log);

}







//**${moment(Date.now() + Sure).format("LLL")}**





if (button.id === "ceza2") {
    member.roles.add(cfg.cezaliRoller.muteRoles);
    const reason = `Küfür`
    const Sure = ms('10m')
    button.reply.defer()
  msg.channel.send(`${uye} üyesi, ${author} tarafından, \`${reason}\` nedeniyle susturuldu! \`(Ceza ID: #${Sayi})\``)
    .then(msg.delete({ timeout: 1500 })).then((x) => x.delete({ timeout: 5000 })); 


    const log = new MessageEmbed()
    .setAuthor( author.displayName, icon_url, msg.author.avatarURL({dynamic: true}))
    .setColor("RANDOM")
    .setDescription(
`${uye} kişisi **${reason}** sebebiyle **${`${client.format(ms(Sure))}`.replace(", 0 saniye", "").trimEnd()}** chat kanallarında susturuldu. 
───────────────
Mute Atılma Tarihi: **${client.toDate(new Date(Date.now()))}**
Mute Bitiş Tarihi: **${client.toDate(new Date(Date.now() + ms(Sure)))}**
    `);
    message.guild.channels.cache.get(cfg.log.mute).send(log);
}



if (button.id === "ceza3") {
    member.roles.add(cfg.cezaliRoller.muteRoles);
  const reason = `Flood/Spam`
  const Sure = ms('10m')
  button.reply.defer()
  msg.channel.send(`${uye} üyesi, ${author} tarafından, \`${reason}\` nedeniyle susturuldu! \`(Ceza ID: #${Sayi})\``)
  .then(msg.delete({ timeout: 1500 })).then((x) => x.delete({ timeout: 5000 })); 
  
  
  const log = new MessageEmbed()
  .setAuthor( author.displayName, icon_url, msg.author.avatarURL({dynamic: true}))
  .setColor("RANDOM")
  .setDescription(
`${uye} kişisi **${reason}** sebebiyle **${`${client.format(ms(Sure))}`.replace(", 0 saniye", "").trimEnd()}** chat kanallarında susturuldu. 
───────────────
Mute Atılma Tarihi: **${client.toDate(new Date(Date.now()))}**
Mute Bitiş Tarihi: **${client.toDate(new Date(Date.now() + ms(Sure)))}**
  `);
  message.guild.channels.cache.get(cfg.log.mute).send(log);

}



if (button.id === "ceza4") {
    member.roles.add(cfg.cezaliRoller.muteRoles);
  const reason = `Tartışma/Kavga`
  const Sure = ms('15m')
button.reply.defer()
msg.channel.send(`${uye} üyesi, ${author} tarafından, \`${reason}\` nedeniyle susturuldu! \`(Ceza ID: #${Sayi})\``)
.then(msg.delete({ timeout: 1500 })).then((x) => x.delete({ timeout: 5000 })); 
  
  const log = new MessageEmbed()
  .setAuthor( author.displayName, icon_url, msg.author.avatarURL({dynamic: true}))
  .setColor("RANDOM")
  .setDescription(
`${uye} kişisi **${reason}** sebebiyle **${`${client.format(ms(Sure))}`.replace(", 0 saniye", "").trimEnd()}** chat kanallarında susturuldu. 
───────────────
Mute Atılma Tarihi: **${client.toDate(new Date(Date.now()))}**
Mute Bitiş Tarihi: **${client.toDate(new Date(Date.now() + ms(Sure)))}**
  `);
  message.guild.channels.cache.get(cfg.log.mute).send(log);


  if (button.id === "ceza10") {
    button.reply.defer()
    message.reply(`İşlem iptal edildi!`)
      .then(msg.delete({ timeout: 1500 })).then((x) => x.delete({ timeout: 5000 })); 
    }

}
      } 

    
    )};
      
      

module.exports.help = {
name: "muteke",
alias: []
};
