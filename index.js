/*const scrollProducts = document.getElementById("producti_link");

scrollProducts.addEventListener("click", function(e) {
    e.preventDefault();

    //navigate to specific spot
    const element = document.getElementById("Link_Kym_Products");
    let position = element.offsetTop;
    position -= 100;
    window.scrollTo({
        left: 0,
        top: position,
        behavior: 'smooth',
    });

    document.getElementsByClassName("navbar-toggler")[0].click();
});
*/

setInterval(() => {
    if (window.innerWidth <= 576)
        document.getElementsByClassName("zaglavie")[0].innerHTML = `
        Магазин за<br>Куфари и Чанти <br><big>Big Bags</big>`
    else document.getElementsByClassName("zaglavie")[0].innerHTML = `
        Магазин за<br>Куфари и Чанти <big>Big Bags</big>`
}, 500)