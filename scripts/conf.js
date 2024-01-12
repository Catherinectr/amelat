let url = new URL(window.location)
let params = url.searchParams

for (let p of params) {
    console.log(p)
}