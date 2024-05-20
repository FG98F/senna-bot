const { Client, MessageMedia } = require('whatsapp-web.js');
const client = new Client();

client.on('ready', () => {
    console.log('البوت جاهز للعمل!');
});

client.on('message', message => {
    if(message.body === '!menu') {
        let menu = "🤖 *قائمة الأوامر*\n\n";
        menu += "1️⃣ *الأمر الأول* - الوصف\n";
        menu += "2️⃣ *الأمر الثاني* - الوصف\n";
        menu += "3️⃣ *الأمر الثالث* - الوصف\n";
        menu += "4️⃣ *الأمر الرابع* - الوصف\n";
        menu += "5️⃣ *الأمر الخامس* - الوصف\n";
        menu += "\nأرسل رقم الأمر للتفاعل.";

        message.reply(menu);
    }
    // يمكنك إضافة المزيد من الأوامر هنا
});

client.initialize();
