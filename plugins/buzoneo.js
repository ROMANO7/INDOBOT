let handler = async (m, { conn }) => {

m.reply(` 
Buzoneo de +1: para ver video comando .buzoneo1
Opciones de Menú:
1 - Escuchar Mensajes
2 - Enviar Mensajes
3 - Crear un saludo
4 - Opciones de buzón
5 - Opciones de Contraseña
7 - Borrar Mensaje
9 - Guardar Mensaje
0 - Ayuda de buzón (detallada)
5 - 1 - Cambiar contraseña
5 - 2 Desactivar contraseña
* - Terminar llamada

𝗕𝗮𝘀𝗲𝘀 +1:
+1 786 278 xxxx
+1 786 222 xxxx
+1 786 444 xxxx
+1 929 37x xxxx
+1 281 777 xxxx (muy quemada)
+1 281 78x xxxx (quemada)
+1 202 200 xxxx 

𝗡𝘂́𝗺𝗲𝗿𝗼𝘀 𝗱𝗲 𝗿𝗲𝗴𝗮𝗹𝗼:
+1 786 278 1758 - 4788#
+1 786 278 4263 - 4422#

`)

}
handler.command = /^(buzoneo)$/i
export default handler
