export async function trackClick(service:string,reseller:string){

await fetch("/api/click",{
method:"POST",
headers:{'Content-Type':'application/json'},
body:JSON.stringify({service,reseller})
})

}