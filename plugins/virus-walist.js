let handler = async (m, { conn }) => {
let info = `
*${htki} IMUNE ${htka}*
          
 
          
                  
–––––– *ᴋᴇʙɪᴊᴀᴋᴀɴ* ––––––
*📮 Download Dengan tujuan yang benar. Jangan untuk merugikan orang lain tanpa alasan!*
`
const sections = [
   {
    title: `✃ INFO`,
	rows: [
	    {title: "🔮WhatsApp Secundario DOTA", rowId: '.DOTA', description: 'No olvides dar las gracias al BOT' },
	    {title: "🔮WhatsApp Secundario ECLIPSE", rowId: '.ECLIPSE', description: 'No olvides dar las gracias al BOT' },
	{title: "🔮WhatsApp Secundario CUERVO", rowId: '.CUERVO', description: 'No olvides dar las gracias al BOT' },
	{title: "🔮WhatsApp Gb Kebal 2", rowId: '.wagb2', description: 'No olvides dar las gracias al BOT' },
	]
    }, {
    title: `✃ BUY`,
	rows: [
	    {title: "😈INDOBOT", rowId: '.owner', description: 'Pembuat Bot' },
	    ]
        },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "📛Download",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}
handler.help = ['waantivirus']
handler.tags = ['virus']
handler.command = /^waantivirus$/i
handler.premium = false

export default handler