let handler = async (m, { conn, usedPrefix, command}) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
let pp = './src/quran.jpg'
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let lkr = `
      ❀° ┄──•••───╮
         ♥️القرآن الكريم♥
      ╰───•••──┄ °❀
      
    💫 𝘈𝘭𝘭 𝘴𝘶𝘳𝘢𝘩 𝘢𝘯𝘥 𝘵𝘩𝘦𝘪𝘳 𝘯𝘶𝘮𝘣𝘦𝘳𝘴 𝘭𝘪𝘴𝘵
𝘧𝘰𝘳 𝘨𝘦𝘵𝘵𝘪𝘯𝘨 𝘴𝘶𝘳𝘢𝘩 𝘵𝘺𝘱𝘦 .𝘴𝘶𝘳𝘢𝘩 36 💫


1. سورة الفاتحة
2. سورة البقرة
3. سورة آل عمران
4. سورة النساء
5. سورة المائدة
6. سورة الأنعام
7. سورة الأعراف
8. سورة الأنفال
9. سورة التوبة
10. سورة يونس
11. سورة هود
12. سورة يوسف
13. سورة الرعد
14. سورة إبراهيم
15. سورة الحِجر
16. سورة النحل
17. سورة الإسراء
18. سورة الكهف
19. سورة مريم
20. سورة طه
21. سورة الأنبياء
22. سورة الحج
23. سورة المؤمنون
24. سورة النور
25. سورة الفرقان
26. سورة الشورى
27. سورة النمل
28. سورة القصص
29. سورة العنكبوت
30. سورة الروم
31. سورة لقمان
32. As-Sajda  (The Prostration)
33. Al-Ahzab  (The Combined Forces)
34. Saba'  (Sheba)
35. Fatir  (The Originator)
36. Ya-Sin  (Ya-Sin)
37. As-Saffat  (Those who set the Ranks)
38. Sad  (The Letter Sad)
39. Az-Zumar  (The Troops)
40. Ghafir  (The Forgiver)
41. Fussilat  (Explained in Detail)
42. Ash-Shura  (Consultation)
43. Az-Zukhruf  (The Gold Adornments)
44. Ad-Dukhan  (The Smoke)
45. Al-Jathiyah  (The Crouching)
46. Al-Ahqaf  (The Wind-Curved Sandhills)
47. Muhammad  (Muhammad)
48. Al-Fath  (The Victory)
49. Al-Hujurat  (The Rooms)
50. Qaf  (The Letter Qaf)
51. Adh-Dhariyat  (The Winnowing Winds)
52. At-Tur  (The Mount)
53. An-Najm  (The Star)
54. Al-Qamar  (The Moon)
55. Ar-Rahman  (The Beneficent)
56. Al-Waqi'a  (The Inevitable)
57. Al-Hadid  (The Iron)
58. Al-Mujadila  (The Pleading Woman)
59. Al-Hashr  (The Exile)
60. Al-Mumtahanah  (She that is to be examined)
61. As-Saff  (The Ranks)
62. Al-Jumu'ah  (Friday)
63. Al-Munafiqun  (The Hypocrites)
64. At-Taghabun  (Mutual Disillusion)
65. At-Talaq  (The Divorce)
66. At-Tahrim  (The Prohibition)
67. Al-Mulk  (The Sovereignty)
68. Al-Qalam  (The Pen)
69. Al-Haqqah  (The Reality)
70. Al-Ma'arij  (The Ascending Stairways)
71. Nuh  (Noah)
72. Al-Jinn  (The Jinn)
73. Al-Muzzammil  (The Enshrouded One)
74. Al-Muddathir  (The Cloaked One)
75. Al-Qiyamah  (The Resurrection)
76. Al-Insan  (Man)
77. Al-Mursalat  (The Emissaries)
78. An-Naba'  (The Tidings)
79. An-Nazi'at  (Those who drag forth)
80. Abasa  (He frowned)
81. At-Takwir  (The Overthrowing)
82. Al-Infitar  (The Cleaving)
83. Al-Mutaffifin  (Defrauding)
84. Al-Inshiqaq  (The Splitting Open)
85. Al-Buruj  (The Mansions of the Stars)
86. At-Tariq  (The Morning Star)
87. Al-Ala  (The Most High)
88. Al-Ghashiyah  (The Overwhelming)
89. Al-Fajr  (The Dawn)
90. Al-Balad  (The City)
91. Ash-Shams  (The Sun)
92. Al-Lail  (The Night)
93. Ad-Duha  (The Morning Hours)
94. As-Sharh  (The Relief)
95. At-Tin  (The Fig)
96. Al-Alaq  (The Clot)
97. Al-Qadr  (The Power)
98. Al-Bayyinah  (The Clear Proof)
99. Az-Zalzalah  (The Earthquake)
100. Al-Adiyat  (The Chargers)
101. Al-Qari'ah  (The Calamity)
102. At-Takathur  (The Abundance of Wealth)
103. Al-Asr  (The Time)
104. Al-Humazah  (The Scandal-Monger)
105. Al-Fil  (The Elephant)
106. Quraysh  (Quraysh)
107. Al-Ma'un  (Acts of Kindness)
108. Al-Kawthar  (The Abundance)
109. Al-Kafirun  (The Disbelievers)
110. An-Nasr  (The Help)
111. Al-Lahab  (The Flame)
112. Al-Ikhlas  (The Sincerity)
113. Al-Falaq  (The Daybreak)
114. An-Nas  (Mankind)

❀° ┄──•••───╮
  ♥️ 𝐐𝐔𝐑𝐀𝐍 𝐊𝐀𝐑𝐄𝐄𝐌♥
╰───•••──┄ °❀`
conn.sendFile(m.chat, pp, 'perfil.jpg', lkr, m, false, { mentions: [who] })
m.react(done)
}
handler.help = ['allmenu']
handler.tags = ['main']
handler.command = ['سورة', 'quranmenu', 'number'] 

export default handler
