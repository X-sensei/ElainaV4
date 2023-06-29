module.exports = {
    name: "rules",
    alias: ["rule"],
    desc: "Sends you the rule's for *Elaina Bot*",
    cool:3,
    react:"🎐",
    category: "General",
    start: async(client, m,{pushName}) => {
        if(m.quoted){
            const nme= await client.username(m.quoted.sender)
            console.log(nme)
            await client.sendMessage(m.from,{text:`Hii! ${nme}\n
          _*----⚠️[Rule]🚫⚠️----*_\n\n❌ *RULES SHOULD BE FOLLOWED STRICTLY* 🚫\n*•* use *.support* to get the Official group link in your dm\n*•* Don't chat in private with bot, you'll be blocked soon if you do \n*•* Dont use wrong command, use the command given in the *help list* \n*•* Dont spam the bot with commands if the bot is not responding, it means the bot is maybe offline or facing internet issue. \n*•* Dont Dm the bot \n\n*IF YOU DONT FOLLOW THE RULES THEN YOU WILL BE BAN SOON* 🚫 `},{quoted:m})

        }else{
        await client.sendMessage(m.from,{text:`Hello ${pushName}`},{quoted:m})
        }
    }
}
