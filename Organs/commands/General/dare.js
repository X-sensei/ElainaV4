require('../../../settings')
const axios = require('axios')
module.exports = {
    name: "dare",
    alias: ["d"],
    usage: `${prefa}dare`,
    desc: "Will send you a dare",
    react: "🎐",
    
    category: "Fun",
    start: async (client, m, {
        command,
        prefix,
        text,
        args
    }) => {
let yup = [
            "*Change your WhatsApp display name to 'I Love [Your Crushs Name].'*",
"*Post a status saying, 'I am going to quit using WhatsApp fr a week!'*",
"*Send a voice message imitating your favorite celebrity.*",
"*Change your WhatsApp profile picture to a funny meme for 24 hours.*",
"*Send a message to your best friend saying, 'I secretly eat my boogers.'*",
"*Post a status saying, 'I am going to sing a song inn my next voice message!'*",
"*Send a random GIF to the last person you texted.*",
"*Share the last embarrassing photo you have on your phone with your WhatsApp contacts.*",
"*Change your WhatsApp status to 'I am the best dancer in the world!'*",
"*Send a message to your crush confessing your admiration for them.*",
"*Create a group chat with your friends and send them a silly joke.*",
"*Change your WhatsApp wallpaper to a picture of your favorite pet.*",
"*Send a message to the fifth person on your WhatsApp contact list, saying, 'You're my favorite person!'*",
"*Share a funny YouTube video with your best friend.*",
"*Send a voice message of you singing your favorite nursery rhyme.*",
"*Post a status saying, 'I challenge everyone to a thumb war!'*",
"*Share a picture of your last meal with your WhatsApp contacts.*",
"*Change your WhatsApp display name to 'WhatsApp Addict.'*",
"*Send a message to your ex saying, 'I still think about you sometimes.'*",
"*Post a status saying, 'I am going to learn a new language by the end of this year!'*",
"*Send a message to your parents saying, 'I broke a window, but it wasn't my fault.'*",
"*Share a screenshot of the last text conversation you had with your best friend.*",
"*Change your WhatsApp profile picture to a photo of your favorite superhero.*",
"*Post a status saying, 'I am going to start a band! Who wants to join?'*",
"*Send a voice message of you doing an impression of your favorite cartoon character.*",
"*Share a funny joke with a random WhatsApp contact.*",
"*Change your WhatsApp display name to 'I am secretly a superhero.'*",
"*Send a message to your boss saying, 'I am quitting my job to pursue my dream of becoming a professional gamer.'*",
"*Post a status saying, 'I'm giving up chocolate for a month!'*",
"*Share a picture of your most embarrassing childhood hairstyle with your friends.*",
"*Send a voice message of you reciting a tongue twister.*",
"*Change your WhatsApp profile picture to a photo of your favorite movie character.*",
"*Post a status saying, 'I am going to run a marathon next month!'*",
"*send a message to your sibling saying, 'You are my favorite person in the world!'*",
"*Share a funny video of animals doing silly things with your WhatsApp contacts.*",
"*Change your WhatsApp display name to 'I am a professional skydiver.'*",
"*Send a message to your favorite teacher saying, 'I miss your classes!'*",
"*Post a status saying, 'I am going to learn how to juggle!'*",
"*Share a picture of your most embarrassing childhood outfit with your friends.*",
"*Send a voice message of you attempting to sing the national anthem.*",
"*Change your WhatsApp profile picture to a photo of your favorite book cover.*",
"*Post a status saying, 'I am going to learn how to cook a gourmet meal!'*",
"*send a message to your neighbor saying, 'I secretly borrow your Wi-Fi sometimes.'*",
"*Share a funny meme with your best friend.*",
"*Change your WhatsApp display name to 'Future President [Your Name].'*",
"*Send a message to your favorite actor/actress saying, 'I am your biggest fan!'*",
"*Post a status saying, 'I am going to become a professional chess player!'*",
"*Share a picture of your pet doing something cute with your WhatsApp contacts.*",
"*Change your WhatsApp profile picture to a photo of your favorite painting.*",
"*Send a voice message of you reciting a famous movie quote.*",
"*Say I love you to the bot developer 'Ronen'*"
          ]
let nezuko = await axios.get('https://api.github.com/repos/EternityBots/Nezuko')
let rae = yup[Math.floor(Math.random() * yup.length)]

var rr = `https://i.ibb.co/SJzx1Q2/20230630-085208.jpg`
await client.sendMessage(m.from,{image:{url:rr}, caption:rae},{quoted:m})
    }
}
