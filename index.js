const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Project is running");
})

app.get("/", (req, res) => {
  res.send("Bot is running");
})

var Jimp = require('jimp');
const Discord = require("discord.js")
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});
client.on("messageCreate", message => {
  
  if (message.content.toLowerCase() === "gay people gay people gay people gay people") {
    message.channel.send("FUCK FUCK FUCK FUCK FUCK FUCK FUCK FUCK")
  }

  if (message.content.toLowerCase().includes('gay people')) {
    message.channel.send('https://tenor.com/view/ytpmv-elf-ytpmv-elf-gay-people-will-ferrell-gif-23475110')
  }

  if (message.content === "p!question") {
    let questions = ['Whats your favorite colour', 'Do you like men', 'Whats your opinion on immigrants', 'Whats your opinion on black people', 'What are your views on the socio-economic climate on welfare economies in kyrgyzstan', 'Whats 9 + 10', 'Do you like polish people', 'What is', 'Do you really think that you will escape God\'s judgement for your sins'];
    
    let rnd = Math.floor(Math.random() * questions.length);

    message.channel.send({content: questions[rnd]})
    
  }

  if (message.content === "p!help") {
    let embed = new Discord.MessageEmbed()
    .setTitle("Commands")
    .setDescription('help')
    .addField('p!elf', 'elf')
    .addField('p!jokes', 'tell joke ver  funny')
    .addField('p!question', 'WE DO NOT COLLECT ANY OF YOUR PERSONAL INFORMATION')
    .addField('p!avatar', 'avatar')
    .setColor('RANDOM')

    message.channel.send({embeds:[embed]});
  }
  
  if (message.content.toLowerCase().includes('pingas')) {
    message.channel.send('https://tenor.com/btNtV.gif')
  }

  if (message.content.toLowerCase().startsWith('p!jokes')) {
    let jokes = ['Why did the pizza cross the road? It was being driven by a woman.', 'How far can you throw a pizza without it going in the oven? A mile.', 'A priest, a priest, and a priest were sitting at a table. Two men were sitting next to them at the table: a lawyer, a lawyer, and a lawyer. The lawyer said to the priest, \"I\ll be seeing you in court.\" The priest replied, \"I\'ll be seeing you in hell!\"', 'A lady walks into a bar. \"Sir, if you would please serve me a drink, I would appreciate it" The gentleman replies: \"Why, you seem to have', 'What do you call a Jewish woman masturbating? A Jew.', 'How did the Italian go? IDK', 'I really don\'t like my wife\'s dog. I\'m just too afraid to tell her', 'How many liberals does it take to fix a lightbulb? None, because they\'re too busy with their gender', 'Why did the man cross the road? So he could get to the other side', 'What do you call a woman who is pregnant? A pregnant woman.', 'Borax', 'P']
    let rnd = Math.floor(Math.random() * jokes.length);

    message.channel.send({content: jokes[rnd]});
  }

   if (message.content.toLowerCase().startsWith('p!avatar')) {
    const user = message.mentions.users.first() || message.author;
    const avatarEmbed = new Discord.MessageEmbed()
    .setAuthor(user.username)
    .setImage(user.avatarURL());
    message.reply({embeds:[avatarEmbed]});

}
})

client.on('messageCreate', async message => {
  if (message.content.toLowerCase().startsWith('p!elf')) {
    const Canvas = require('canvas')
    const canvas = Canvas.createCanvas(1032, 847);
    const context = canvas.getContext('2d');
    const background = await Canvas.loadImage('./elf.png');
    context.drawImage(background, 0, 0, canvas.width, canvas.height);
    const argument = await Canvas.loadImage(message.attachments.first().url)
    context.drawImage(argument, 625, 89, 294, 294);
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'red-cirlce.png');

    message.reply({files: [attachment]})
  }
});

client.login(process.env.token);
