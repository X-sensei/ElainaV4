module.exports = {
    name: "info",
    alias: ["ronen,elaina,bot"],
    desc: "Gives you a brief description on bot and it's developer",
    cool:3,
    react:"🎐",
    category: "General",
    start: async(client, m,{pushName}) => {
        if(m.quoted){
            const nme= await client.username(m.quoted.sender)
            console.log(nme)
            await client.sendMessage(m.from,{text:`Hii! ${nme} 
            I'm Elaina a whatsapp bot, Developed and Reverse engineered by Ronen to make your whatsapp more enjoyable and to do everything possible on whatsapp.
        
💜 *Our official support group* : http://surl.li/eumln
🐨 *My YouTube* : https://youtube.com/c/RonenAMVs
🔖 *Website* : Coming soon...
*About Ronen💜*
*🎗️Name* : Ronen Singha
*🧧Age* : Immortal heheh✨
*♦️Country* : India🇮🇳
*🎯Gender* : Male👨‍🦱
*❣️Relationship status* : Single
*🎏Hobbies* : Coding, Playing Guitar, Video Editing, Workout 💪, Love Watching Animes and Kdramas`},{quoted:m})

        }else{
        await client.sendMessage(m.from,{text:`Hello ${pushName}`},{quoted:m})
        }
    }
}
