let handler = async (m, { conn }) => {

m.reply(` 
TERMUX
TUTORIAL: https://youtu.be/dTj8I5XWyn4
https://youtu.be/yGDL68cfcm4 recomendado

TERMUX APLICACIÓN: https://www.mediafire.com/file/wanzuqu4vztwjn2/Termux_0.119.1.apk/file

Luego de instalar termux
- apt update
- apt upgrade -y
- apt install git
- termux-setup-storage  (le dan a permitir)
- pkg install mc  (es una herramienta interesante)

nota: 
cd (nombre de carpeta) para ingresar a un directorio
cd .. retroceder
rm -rf (nombre de archivo o carpeta) comando para borrar
rm (archivo) borrar archivo
ls para listar los archivos
mv para mover archivos o carpetas
`)

}
handler.command = /^(termux|TERMUX)$/i
export default handler
