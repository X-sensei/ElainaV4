require('../../../settings')
const axios = require('axios')
module.exports = {
    name: "truth",
    alias: ["t"],
    usage: `${prefa}truth`,
    desc: "Will send you a truth",
    react: "🎐",
    
    category: "Fun",
    start: async (client, m, {
        command,
        prefix,
        text,
        args
    }) => {
let yup = [
            "*What is the most embarrassing thing that has ever happened to you?*",
"*Have you ever cheated in a game? If yes, which one and how?*",
"*What is the weirdest dream you have ever had?*",
"*What is the most awkward date you have ever been on?*",
"*Have you ever pretended to like a gift, but actually hated it?*",
"*What is your most irrational fear?*",
"*Have you ever stalked someone on social media?*",
"*What is the strangest food combination you enjoy?*",
"*Have you ever stolen anything? If yes, what was it?*",
"*What is your most embarrassing nickname?*",
"*Have you ever lied to get out of trouble? What was the situation?*",
"*What is the most embarrassing thing you have done for a crush?*",
"*Have you ever been caught picking your nose?*",
"*What is the worst lie you have ever told your parents?*",
"*Have you ever accidentally sent a text message to the wrong person?*",
"*What is the silliest thing you have ever cried about?*",
"*Have you ever had a crush on a teacher?*",
"*What is the most embarrassing fashion trend you have followed?*",
"*Have you ever had a wardrobe malfunction in public?*",
"*What is the strangest thing you have ever eaten?*",
"*Have you ever eavesdropped on a conversation without the other person knowing?*",
"*What is the most embarrassing thing you have posted on social media?*",
"*Have you ever pretended to be sick to get out of something? What was it?*",
"*What is the most embarrassing thing your parents have caught you doing?*",
"*Have you ever laughed at something that you weren't supposed to find funny?*",
"*What is the weirdest habit you have?*",
"*Have you ever snuck out of the house? If yes, why?*",
"*What is the most embarrassing song on your playlist?*",
"*Have you ever had a crush on a fictional character? Who was it?*",
"*What is the strangest rumor you have heard about yourself?*",
"*Have you ever peed in a pool?*",
"*What is the most embarrassing thing you have done in front of a crowd?*",
"*Have you ever pretended to know a celebrity when you actually didn't?*",
"*What is the most embarrassing text message you have sent to the wrong person?*",
"*Have you ever worn underwear inside out without realizing it?*",
"*What is the most embarrassing thing you have done while sleepwalking?*",
"*Have you ever lied about your age?*",
"*What is the most embarrassing thing you have done to impress someone?*",
"*Have you ever had a wardrobe malfunction while exercising?*",
"*What is the weirdest phobia you have?*",
"*Have you ever walked into a glass door?*",
"*What is the most embarrassing thing you have said while drunk?*",
"*Have you ever gotten stuck in a public place, like a bathroom stall or an elevator?*",
"*What is the most embarrassing nickname someone has given you?*",
"*Have you ever laughed at a joke you didn't understand, just to fit in?*",
"*What is the most embarrassing thing you have done while on a date?*",
"*Have you ever farted in public and blamed it on someone else?*",
"*What is the silliest lie you have ever told and got away with*",
"*Have you ever accidentally called someone by the wrong name?*",
"*What is the most embarrassing thing you have done while singing or dancing alone?*"

          ]
let nezuko = await axios.get('https://api.github.com/repos/EternityBots/Nezuko')
let rae = yup[Math.floor(Math.random() * yup.length)]

var rr = `https://i.ibb.co/NSKP2TR/20230630-084343.jpg`
await client.sendMessage(m.from,{image:{url:rr}, caption:rae},{quoted:m})
    }
}
