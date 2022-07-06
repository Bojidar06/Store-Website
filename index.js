const predlagame_kufari = document.getElementById('predlagame_kufari')
const opisanie_kufari = document.getElementById('opisanie_kufari')

const opisanie_ranici = document.getElementById('predlagame_ranici')
const predlagame_ranici = document.getElementsByClassName('opisanie_ranici')[0]

const predlagame_palaski = document.getElementById('predlagame_palaski')
const opisanie_palaski = document.getElementById('opisanie_palaski')


window.addEventListener('scroll', () =>{
    const offset = window.pageYOffset

    predlagame_kufari.style.top = 0.04 * offset + 'px'
    opisanie_kufari.style.top = 0.08 * -offset + 'px'

    predlagame_ranici.style.top = 0.03 * offset + 'px'
    opisanie_ranici.style.top = 0.06 * -offset + 'px'
    if(window.innerWidth <= 576)
    opisanie_ranici.style.marginTop = '30px'

    predlagame_palaski.style.top = 0.02 * offset + 'px'
    opisanie_palaski.style.top = 0.04 * -offset + 'px'
})


setInterval(() => {
    if (window.innerWidth <= 576)
        document.getElementsByClassName("zaglavie")[0].innerHTML = `
        Магазин за<br>Куфари и Чанти <br><big>Big Bags</big>`
    else document.getElementsByClassName("zaglavie")[0].innerHTML = `
        Магазин за<br>Куфари и Чанти <big>Big Bags</big>`
}, 500)
