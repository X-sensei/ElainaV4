require('../../../settings')
const axios = require('axios')
module.exports = {
    name: "truth",
    alias: ["t"],
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
            'hii',
            'yo',
            'test',
            'test2',
            'test3',
            'test4'
          ]
let nezuko = await axios.get('https://api.github.com/repos/EternityBots/Nezuko')
let rae = yup[Math.floor(Math.random() * yup.length)]

var rr = `https://i.ibb.co/3vNvjGc/PXL-20230225-211608710.jpg`
await client.sendMessage(m.from,{image:{url:rr}, caption:rae},{quoted:m})
    }
}
