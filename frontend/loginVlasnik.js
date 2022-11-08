const { json } = require("express/lib/response");

const form = document.getElementById('form');
const ime = document.getElementById('ime');
const prezime = document.getElementById('prezime');
const sifraObjekta = document.getElementById('sifraObjekta');
const lozinka = document.getElementById('lozinka');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    checkInput();
} );

const checkInput = () => {
    const imeValue = ime.value.trim()
    const prezimeValue = prezime.value.trim()
    const sifraObjektaValue = sifraObjekta.value.trim()
    const lozinkaValue = lozinka.value.trim()

    if(ime === ''){
        alert("Ovo polje ne smije biti prazno!")
    }
}

let setErrorFor = (input, message) => {
    const text_input = input.parentElement;
    const input = formControl.querySelector('input');

    input.innerText = message;
    formControl.className = 'text_input';
}