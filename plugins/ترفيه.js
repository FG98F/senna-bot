let handler = m => m 
 handler.all = async function (m) { 
 let chat = global.db.data.chats[m.chat] 
  
 if (/^احا$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `احتين علي احتك 🥹`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^الحمدلله$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` يارب ديما  `, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^توصت$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` *شغال يحب* `, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^بتعمل ايه دلوقتي$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` بكلمك, `, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^انا جيت$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` منور ✨💜 `, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^اخرس$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `حاضر`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^حرامي|سارق$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `تتهم بريء بالسرقة 
 من دون تحري او بحث 
 عن حقيقة ليست ملموسة 
 ارحنا واعمل شرطي  
 ثم افتح فمك وثرثر 
 فكلامك كـجاهل واحد  
 بل جهلاً ارحم من حديثك 
 تتصنع دور الشرطي  
 وكأنك محقق 
 بالله اصمت ولا تحرج نفسك  
 ارحنا وارح أعصابك  
 ان اكرمك الله بعقل 
 فبسكوتك اقتل جهلك 
 `, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
  
 if (/^ملل|مللل|ملللل$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` جروب ميت `, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^السلام عليكم$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` وعليكم السلام `, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^تصبح علي خير|تصبحوا علي خير/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` وانت من اهل الخير ي حبيبي✨💜 `, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 }  
  
 if (/^بحبك ڤينوم$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` انا اكتر ✨🥹💜 `, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
     
 if (/^افضل انمي$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` ون بيس عمك `, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
  if (/باي^$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `باي`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
     
 if (/هلا^$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `هلا`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^كيفك|عامل ايه$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` الحمد لله و انت`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
 return !0 } 
 export default handler