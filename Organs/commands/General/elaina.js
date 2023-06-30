require('../../../settings')
const axios = require('axios')
module.exports = {
    name: "info",
    alias: ["elaina,bot,ronen"],
    usage: `${prefa}info`,
    desc: "Will send you details of our bot",
    react: "🎐",
    
    category: "General",
    start: async (client, m, {
        command,
        prefix,
        text,
        args
    }) => {
let yup = [
            'https://i.ibb.co/3vNvjGc/PXL-20230225-211608710.jpg',
            'https://i.ibb.co/3vNvjGc/PXL-20230225-211608710.jpg',
            'https://i.ibb.co/3vNvjGc/PXL-20230225-211608710.jpg',
            'https://i.ibb.co/3vNvjGc/PXL-20230225-211608710.jpg',
            'https://i.ibb.co/3vNvjGc/PXL-20230225-211608710.jpg',
            'https://i.ibb.co/3vNvjGc/PXL-20230225-211608710.jpg'
          ]
let nezuko = await axios.get('https://api.github.com/repos/EternityBots/Nezuko')
let rae = yup[Math.floor(Math.random() * yup.length)]

var rr = `🎍 _*𝙀𝙇𝘼𝙄𝙉𝘼 𝘽𝙊𝙏*_  🎍\n\n🍀Hii! I'm Elaina a whatsapp bot, Developed and Reverse engineered by *Ronen* to make your whatsapp more enjoyable and to do everything possible on whatsapp.
        
💜 *Our official support group* : http://surl.li/eumln
🐨 *My YouTube* : https://youtube.com/c/RonenAMVs
🔖 *Website* : Coming soon...
*About Ronen💜*
*🎗️Name* : Ronen Singha
*🧧Age* : Immortal heheh✨
*♦️Country* : India🇮🇳
*🎯Gender* : Male👨‍🦱
*🎭Business no* : https://wa.me/15069751205
*🎏Hobbies* : Coding, Playing Guitar, Video Editing, Boxing, Workout 💪, Love Watching Animes and Kdramas\n`
await client.sendMessage(m.from,{image:{url:rae}, caption:rr},{quoted:m})
    }
}
