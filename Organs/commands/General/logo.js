require('../../../settings')
const axios = require('axios')
module.exports = {
    name: "rlogo",
    alias: [""],
    usage: `${prefa}rlogo`,
    desc: "*⚠️Instructions⚠️*\n\nThe Bot will send you random logos without name, you have to identify the logo.",
    react: "🎐",
    
    category: "Games",
    start: async (client, m, {
        command,
        prefix,
        text,
        args
    }) => {
let yup = [
            'https://reallygooddesigns.com/wp-content/uploads/2022/12/Famous-Apps-Logos-YouTube.jpg',
            'https://reallygooddesigns.com/wp-content/uploads/2022/12/Famous-Apps-Logos-Instagram.jpg',
            'https://reallygooddesigns.com/wp-content/uploads/2022/12/Famous-Apps-Logos-Twitter.jpg',
            'https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/audi-logo.png',
            'https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/nike-logo.png',
            'https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/facebook-logo.png',
    'https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/apple-logo.png',
    'https://www.scoopwhoop.com/_next/image/?url=https%3A%2F%2Fstatic.scoopwhoop.com%2Fsite-images%2Foriginal%2Fswp-444d05a383e58ffcbe251db805565cf4.jpg&w=1080&q=75',
    'https://www.scoopwhoop.com/_next/image/?url=https%3A%2F%2Fstatic.scoopwhoop.com%2Fsite-images%2Foriginal%2Fswp-0e3302512ae853d985a81d7ca8c14eef.jpg&w=1080&q=75',
    'https://www.scoopwhoop.com/_next/image/?url=https%3A%2F%2Fstatic.scoopwhoop.com%2Fsite-images%2Foriginal%2Fswp-b7291787e38e8baacca95baff8f5b57e.jpg&w=1080&q=75',
    'https://www.scoopwhoop.com/_next/image/?url=https%3A%2F%2Fstatic.scoopwhoop.com%2Fsite-images%2Foriginal%2Fswp-59de29c8c106fa1e2ea7ed234b7d1a02.jpg&w=1080&q=75',
    'https://www.scoopwhoop.com/_next/image/?url=https%3A%2F%2Fstatic.scoopwhoop.com%2Fsite-images%2Foriginal%2Fswp-82195bc4fe427d81666ad8d4b07b7ea0.jpg&w=1080&q=75',
    'https://www.scoopwhoop.com/_next/image/?url=https%3A%2F%2Fstatic.scoopwhoop.com%2Fsite-images%2Foriginal%2Fswp-64608268e3e485f9334534d11f434d28.jpg&w=1080&q=75',
    'https://im.indiatimes.in/content/2021/Mar/logo-quiz-lenscart_60520147abd90.jpg?w=938&h=728&cc=1',
    'https://im.indiatimes.in/content/2021/Mar/famous-brand-logo-McDonald_6051fd983abab.png?w=938&h=728&cc=1',
    'https://im.indiatimes.in/content/2021/Mar/famous-brand-logo-Monster-Energy_6051fd3f1c450.png?w=938&h=728&cc=1',
    'https://im.indiatimes.in/content/2021/Mar/famous-brand-logo-voda_6051fce779668.jpg?w=938&h=728&cc=1',
    'https://im.indiatimes.in/content/2021/Mar/logo-quiz-nesle_6051f87567430.jpg?w=938&h=728&cc=1',
'https://im.indiatimes.in/content/2021/Mar/logo-quiz-dabur_6051f765bd577.jpg?w=938&h=728&cc=1',
    'https://im.indiatimes.in/content/2021/Mar/famous-brand-logo-hp_6051f403333d7.jpg?w=938&h=728&cc=1',
    'https://im.indiatimes.in/content/2021/Mar/brand-logo-Starbucks_6051f2b03e8bc.jpg?w=938&h=728&cc=1',
    'https://im.indiatimes.in/content/2021/Mar/famous-brand-logo-Shell_6051ed00f1a1d.png?w=938&h=728&cc=1',
    'https://im.indiatimes.in/content/2021/Mar/addidas-logo-quiz_6051e5fee26d6.jpg?w=938&h=728&cc=1',
    'https://im.indiatimes.in/content/2021/Mar/logo-quiz-lays_6051e4322c8dc.jpg?w=938&h=728&cc=1',
    'https://im.indiatimes.in/content/2021/Mar/logo-quiz-1_6051e3f4e4bff.jpg?w=938&h=728&cc=1',
    'https://im.indiatimes.in/content/2021/Mar/famous-brand-logo-dropbox_6051f8d036df3.jpg?w=938&h=728&cc=1',
    'https://im.indiatimes.in/content/2021/Mar/logo-quiz-fasttrack_605201d6ae516.jpg?w=938&h=728&cc=1',
    'https://im.indiatimes.in/content/2021/Mar/brand-logo-sbi1_6051ea1780eb6.jpg?w=938&h=728&cc=1',
    'https://im.indiatimes.in/content/2021/Mar/hindustan-petroleum-logo-qu_6051f46157c54.jpg?w=938&h=728&cc=1',
    'https://im.indiatimes.in/content/2021/Mar/logo-quiz-ford_6051f799b3595.jpg?w=938&h=728&cc=1',
          ]
let nezuko = await axios.get('https://api.github.com/repos/EternityBots/Nezuko')
let rae = yup[Math.floor(Math.random() * yup.length)]

var rr = `*🎲RANDOM LOGO QUIZ🎲*\n\n*Can you tell the name of the Logo shown in the image?*'
await client.sendMessage(m.from,{image:{url:rae}, caption:rr},{quoted:m})
    }
}
