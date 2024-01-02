const { Telegraf } = require('telegraf')

/* How to get Bot Token??
    -> Open telegram and search for BotFather
    -> To read instruction type, /start and press enter
    -> to create a new bot type, /newbot and press enter
    -> it will ask for a bot name, give a bot name without a / . ex: Tech_bot
    -> then it will ask for username ending with bot , ex: techfortechies_bot
      // link for my bot => t.me/TechforTechies_bot.
      // name => Tech_Bot
      // username => TechforTechies_bot
  
*/ 

const bot = new Telegraf('Token');

bot.start((ctx) => ctx.reply('Welcome to TechforTechies_bot  from Esha!!'));
bot.on('sticker', (ctx) => ctx.reply('❤️'));
bot.on('emoji', (ctx) => ctx.reply('👋'));
bot.command('whomadethis', (ctx) => ctx.reply('Esha'));
bot.hears('Hello', (ctx) => ctx.reply('Hey there!'));

bot.on('message', async (ctx) => {
    // send file
    await ctx.replyWithPhoto({ source: 'download.jpeg' });
});

bot.launch();






  


// bot.command('stackcpp', async function (ctx) {
//     const content = await axios.get('https://raw.githubusercontent.com/Anubhavgupta18/Stack-using-Linked-List/main/main.cpp');
//     ctx.reply(content.data);
// });

// bot.command('linkedlistcpp', async function (ctx) {
//     const content = await axios.get('https://raw.githubusercontent.com/Anubhavgupta18/Linked-List-in-Cpp/main/main.cpp');
//     ctx.reply(content.data);
// });


// bot.command('photo', (ctx) => {
//     ctx.telegram.sendPhoto({source: 'laddu.jpeg'})
// });
