let handler  = async (m, { conn, usedPrefix, command }) => {
let res = pickRandom(asupan)
conn.sendHydrated(m.chat, null, null, res, null, null, null, null, [['🔄 BUZONEANDO UN +1 🔄', `/${command}`]], m)}
handler.help = ['buzoneo1']
handler.tags = ['random']
handler.command = /^buzoneo1|buzonear1$/i
export default handler

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}

const asupan = [
"https://c.top4top.io/m_2423wsa1p1.mp4"
]