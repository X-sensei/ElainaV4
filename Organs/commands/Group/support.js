module.exports = {
	name: "support",
	alias: ["sup"],
	desc: "Send you official support group link.",
	category: "Group",
    react:"🎐",
    start:async(client,m,{command,prefix,pushName})=>{
        let yup = ['https://media.tenor.com/oSQvUimhICgAAAPo/majo-no-tabitabi-the-journey-of-elaina.mp4',
                   'https://media.tenor.com/7iEFLDDGQbMAAAPo/majo-no-tabitabi-the-journey-of-elaina.mp4',
                   'https://media.tenor.com/36P-Xu4XxRMAAAPo/elaina-anime.mp4',
                   'https://media.tenor.com/B_sVBZ4vBzYAAAPo/majo-no-tabitabi-the-journey-of-elaina.mp4',
                   'https://media.tenor.com/lNkVGL4mLDAAAAPo/elaina-nod.mp4'
                  ]
let rae = yup[Math.floor(Math.random() * yup.length)]

  
const eternitylogogg = "https://i.ibb.co/jMW8ZGg/20230127-171350.jpg"
        
                         
const lemo = `
*━『 ⚠️Support Group Links⚠️ 』━*

*[ RONEN BOTS SUPPORT ] :*
https://chat.whatsapp.com/Hooxu1kZEoFKoNpdFLqXMO`
  await client.sendMessage(m.from,{video:{url:rae}, gifPlayback:true, caption: `*${pushName}* have a look in your DM`},{quoted:m})
  await  client.sendMessage(m.sender,{image:{url:eternitylogogg},caption:lemo},{quoted:m})  
    }
}
