const predlagame_kufari = document.getElementById('predlagame_kufari')
const opisanie_kufari = document.getElementById('opisanie_kufari')

const opisanie_ranici = document.getElementById('predlagame_ranici')
const predlagame_ranici = document.getElementsByClassName('opisanie_ranici')[0]

const predlagame_palaski = document.getElementById('predlagame_palaski')
const opisanie_palaski = document.getElementById('opisanie_palaski')



window.onload = ()=>{
    setTimeout(()=>{
        const first_product = document.getElementById('what_we_offer')
        first_product.classList.add('active')
    }, 300)

    const windowHref = window.location.href.split('').reverse().join('')
    if(windowHref.substring(0, 4) == 'lmth') location.href = '/'
}


window.addEventListener('scroll', () =>{
    var reveals = document.querySelectorAll('.reveal')

    for(var i = 0; i < reveals.length; ++i){
        var windowheight = window.innerHeight
        var revealtop = reveals[i].getBoundingClientRect().top
        var revealpoint = 41

        if(revealtop < windowheight - revealpoint)
            reveals[i].classList.add('active')
    }

    const offset = window.pageYOffset

    predlagame_kufari.style.top = 0.04 * offset + 'px'
    opisanie_kufari.style.top = 0.08 * -offset + 'px'

    predlagame_ranici.style.top = 0.03 * offset + 'px'
    opisanie_ranici.style.top = 0.06 * -offset + 'px'
    if(window.innerWidth <= 576)
    opisanie_ranici.style.marginTop = '30px'

    predlagame_palaski.style.top = 0.017 * offset + 'px'
    opisanie_palaski.style.top = 0.03 * -offset + 'px'
})




setInterval(() => {
    if (window.innerWidth <= 576)
        document.getElementsByClassName("MainTop_section_title")[0].innerHTML = `
        Магазин за<br>Куфари и Чанти <br><big>Big Bags</big>`
    else document.getElementsByClassName("MainTop_section_title")[0].innerHTML = `
        Магазин за<br>Куфари и Чанти <big>Big Bags</big>`
}, 500)
