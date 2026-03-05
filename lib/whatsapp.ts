export function createWA(phone:string,service:string){

const message = `Halo kak 👋

Saya tertarik dengan layanan:

${service}

Boleh minta info lebih lanjut?

Terima kasih.`

return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

}