module.exports = {
  name: "mods",
  alias: ["mod,dev,owner"],
  usage: `${global.prefa}mods`,
  desc: "shows mods list",
  category: "General",
  react: "✅",

  start: async (client, m, {}) => {
    const mod = global.owner;
    const owner = mod.map((mod) => mod + "@s.whatsapp.net");
    let mo = `
       *⚠️ ELAINA MODS ⚠️*\n\n`;
    for (let i = 0; i < mod.length; i++) {
      const um = await client.username(mod[i] + "@s.whatsapp.net");
      mo += `\n*👑 Name:* ${um}\n*🎖️ Tag:* @${mod[i].split("@")[0]}\n`;
    }
    let urlll = [
      "https://media.tenor.com/zcaqzz-JWE8AAAPo/happy-anime.mp4",
      "https://media.tenor.com/zcaqzz-JWE8AAAPo/happy-anime.mp4",
      "https://media.tenor.com/zcaqzz-JWE8AAAPo/happy-anime.mp4",
      "https://media.tenor.com/zcaqzz-JWE8AAAPo/happy-anime.mp4",
    ];
    let rae = urlll[Math.floor(Math.random() * urlll.length)];
    await client.sendMessage(
      m.from,
      { video: { url: rae }, gifPlayback: true, caption: mo, mentions: owner },
      { quoted: m }
    );
  },
};
