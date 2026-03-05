export function trackWhatsapp(service: string) {

fetch("/api/tracking", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({
service,
type: "whatsapp_click",
timestamp: Date.now()
})
})

}