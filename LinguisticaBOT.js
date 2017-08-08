const Discord = require('discord.js');
//const express = require('express');
//import * as Utilities from 'Utilities.js';
const client = new Discord.Client();

//TODO: Faire les commandes dans une base de données ou un document texte

//Toutes les commandes -- Ne pas dépassé 10 c. !!!
var eeCmdsNames = [
  "badumtss",
  "cookie",
  "banhmario",
  "banhthor",
  "califnope", //TODO: Le faire exclusif à un rôle (ID de Mercure : 169841735231471617)
  "iamdoctor",
  "barbare",
  "nocookie",
  "tortank",
  "avecesar",
  "nogod",
  "trololo",
  "gingersoul",
  "theanswer",
  "licorne",
  "godwin",
  "académie",
  "califyes", //TODO: Exclusif au rôle de calife
  "rickroll",
  "broll",
  "OSEF",
  "popopo",
  "eddymalou",
  "ah",
  "remixah",
  "shootrick",
  "OSEFStaline",
  "DBRemix",
  "TLMSE",
  "MBLC",
  "CODÉAVECLECUL",
  "CodeQCLip"
];

var eeCmdsDescription = [
  "Faits *BADUMTSS*",
  "Give that man a cookie !",
  "banhmario",
  "banhthor",
  "califnope",
  "iamdoctor",
  "barbare",
  "nocookie",
  "tortank",
  "avecesar",
  "nogod",
  "trololo",
  "gingersoul",
  "theanswer",
  "licorne",
  "godwin",
  "académie",
  "califyes",
  "rickroll",
  "broll",
  "OSEF",
  "popopo",
  "Mais oui c'est clair",
  "AH !",
  "Ben déjà on aurait une cabane",
  "rickroll shooting star",
  "SI T'ES COCO CLAPPE DANS TES MAINS !!",
  "De Bruyne Remix",
  "Sofiane: Tout Le Monde S'Enfout",
  "M'en bats les couilles",
  "Je code avec le cul",
  "Je CODE avec le Q - Clip"
];

var eeCmdsLinks = [
  "https://cdn.discordapp.com/attachments/203309467251507201/218738863017820171/Ba_dum_tss.gif",
  "http://i3.kym-cdn.com/photos/images/newsfeed/000/610/825/eec.jpg",
  "http://i59.tinypic.com/14niicz.gif",
  "http://i.imgur.com/O3DHIA5.gif",
  "https://cdn.discordapp.com/attachments/200634343733985280/219212176869687296/Calife_said_NOPE.png",
  "https://www.youtube.com/watch?v=K7VmOZ4Ppj8",
  "https://www.youtube.com/watch?v=Y4tNoybCKTU",
  "http://weknowmemes.com/generator/uploads/generated/g1379869159400385520.jpg",
  "http://cdn-uploads.gameblog.fr/images/dossiers/CopP3-CUEAAxHWJ_-1-.jpg",
  "https://www.youtube.com/watch?v=fMNqbpbUbJc",
  "https://www.youtube.com/watch?v=umDr0mPuyQc",
  "https://www.youtube.com/watch?v=oavMtUWDBTM",
  "https://www.youtube.com/watch?v=EY39fkmqKBM",
  "https://www.youtube.com/watch?v=aboZctrHfK8",
  "https://www.youtube.com/watch?v=JbHcWGMIcng",
  "https://cdn.discordapp.com/attachments/203309467251507201/218717444531945473/godwinlaw.jpg",
  "https://cdn.discordapp.com/attachments/218445132393873408/344219158436773898/Academie_Francaise_-_Blanka_fono.png",
  "https://cdn.discordapp.com/attachments/203996618435854337/216572498328682496/Calife_Seal_of_Approval.png",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  "https://www.youtube.com/watch?v=mv5qzMtLE60",
  "https://www.youtube.com/watch?v=yunupVlBq7Q",
  "https://www.youtube.com/watch?v=aZHvd0ks7Es",
  "https://cdn.discordapp.com/attachments/218445132393873408/342403400220016640/clair.gif",
  "https://www.youtube.com/watch?v=XE6YaLtctcI",
  "https://www.youtube.com/watch?v=Ri7GzCUTC5s",
  "https://www.youtube.com/watch?v=Gc2u6AFImn8",
  "https://www.youtube.com/watch?v=MNhYFcIgSHA",
  "https://www.youtube.com/watch?v=Tkjk3ULDjQs",
  "https://www.youtube.com/watch?v=qwp89PtaUBA",
  "https://www.youtube.com/watch?v=huqkv18PXsg",
  "https://youtu.be/aeePeVUW6-k",
  "https://www.youtube.com/watch?v=MYZ67-Sh7kM"
];

var prefixe = "$";

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', async (message) =>
{

//FIXME : Trouver un moyen d'afficher toutes les commandes et leurs descriptions avec un $help avancé
//FIXME : Utiliser la structure startsWith partout !!!
    if (message.content.startsWith(prefixe + "empty"))
    {
      message.reply('');
    }
    else if (message.content === prefixe + "ping")
    {
      message.reply('pong');
    }
    else if (message.content === prefixe + "zig")
    {
      message.reply('zag');
    }
    //Commandes sérieuses
    //TODO: langue existante
    else if (message.content.startsWith(prefixe + "apprend"))
    {
      let args = message.content.split(" ");
      let language = NormalizeCase(args[1]);
      let role = message.guild.roles.find(r => r.name === "Apprend " + language);
      if(role == null)
      {
          role = await message.guild.createRole({
            name: "Apprend " + language
          }).catch(e => {
          console.log(e.stack);
        });
        role = await message.guild.createRole({
          name: "Connaît " + language
        }).catch(e => {
        console.log(e.stack);
      });
      message.reply(message.guild.roles.find(r => r.name === "Modération").toString() + " : Langue " + language + " ajouté. A supprimer si n'existe pas !");
      }

      await message.member.addRole(role)
      .catch(e => console.log(e.stack));
      message.reply("Tu apprends " + language);
    }
    else if (message.content.startsWith(prefixe + "connait"))
    {
      let args = message.content.split(" ");
      let language = NormalizeCase(args[1]);
      let role = message.guild.roles.find(r => r.name === "Connaît " + language);
      if(role == null)
      {
          role = await message.guild.createRole({
            name: "Connaît " + language
          }).catch(e => {
          console.log(e.stack);
        });
        role = await message.guild.createRole({
          name: "Apprend " + language
        }).catch(e => {
        console.log(e.stack);
      });

      message.reply(message.guild.roles.find(r => r.name === "Modération").toString() + " : Langue " + language + " ajouté. A supprimer si n'existe pas !");
      }
      await message.member.addRole(role)
      .catch(e => console.log(e.stack));
      message.reply("Tu connais " + language);
    }
    else if (message.content.startsWith(prefixe + "oublie"))
    {
      let args = message.content.split(" ");
      let language = NormalizeCase(args[1]);
      let connaisRole = message.guild.roles.array().find(r => r.name === "Connaît " + language);
      let learnRole = message.guild.roles.array().find(r => r.name === "Apprend " + language);
      let user = message.member;

      user.removeRole(connaisRole);
      user.removeRole(learnRole);

      message.reply("Tu oublies " + language);
    }
    else if(message.content.startsWith(prefixe + "languagelist"))
    {
      let list = "```\n";
      let roleList = message.guild.roles.array();
      for (var i = 0; i < roleList.length; i++) {
        if(roleList[i].name.startsWith("Connaît "))
          list += roleList[i].name.substring("Connaît ".length) + "\n";


      }
      list += "```"
      message.reply(list);
    }
    //Commandes easteregg
    else if(message.content === prefixe + "helpee")
    {
        var cmd = "```\n";
        for (var i = 0; i < eeCmdsNames.length; i++) {
          cmd += eeCmdsNames[i] + ": " + eeCmdsDescription[i] + "\n";
        }
        cmd += "```"
        message.reply(cmd);
    }
    for (var i = 0; i < eeCmdsNames.length; i++)
    {
      if (message.content === prefixe + eeCmdsNames[i])
      {
        message.reply(eeCmdsLinks[i]);
        break;
      }
      else if (message.content === prefixe + eeCmdsNames[i] + " help")
      {
        message.reply(eeCmdsDescription[i]);
        break;
      }
    }

});

function NormalizeCase (input)
{
    if(input == null || input == "")
      return "ERROR: the input is null or empty"

    return input[0].toUpperCase() + input.substring(1).toLowerCase();
}

client.login('MjE3OTk4NjM2NDM1Mzc0MDgw.CwjQqg.WdqYIS6fpSkotGlJ-iL4d0yV_vg');
