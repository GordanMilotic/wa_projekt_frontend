const ime = document.getElementById('ime')
const prezime = document.getElementById('prezime')
const sifraObjekta = document.getElementById('sifraObjekta')
const lozinka = docuemnt.getElementById('lozinka')
const form = document.getElementById('form')
const errorElement = docuemnt.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (ime.value === '' || ime.value == null) {
        messages.push("Ime je obavezno")
    }
    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})