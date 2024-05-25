import { createWallet, depositToWallet, withdrawFromWallet, getWalletBalance } from './bankFunctions'
let handler = async (m, { conn }) => {
    let user = m.sender;
    if (!walletExists(user)) {
        createWallet(user);
        conn.reply(m.chat, 'تم إنشاء محفظتك بنجاح!', m);
    }
    else if (m.text.toLowerCase() == 'رصيدي') {
        let balance = getWalletBalance(user);
        conn.reply(m.chat, `رصيدك في المحفظة: ${balance} دولار`, m);
    }
    else if (m.text.toLowerCase().startsWith('ايداع')) {
        let amount = parseFloat(m.text.split(' ')[1]);
        depositToWallet(user, amount);
        conn.reply(m.chat, `تم إيداع ${amount} دولار في محفظتك بنجاح!`, m);
    }
    else if (m.text.toLowerCase().startsWith('سحب')) {
        let amount = parseFloat(m.text.split(' ')[1]);
        if (amount > getWalletBalance(user)) {
            conn.reply(m.chat, 'لا يوجد رصيد كافي في المحفظة!', m);
        } else {
          withdrawFromWallet(user, amount);
            conn.reply(m.chat, `تم سحب ${amount} دولار من محفظتك بنجاح!`, m);
        }
    }
}

handler.help = ['محفظه']
handler.tags = ['econ']
handler.command = /^(محفظه|ايداع|سحب)$/i

export default handler

