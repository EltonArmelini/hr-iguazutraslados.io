function btn_nav() {

    var demo = document.querySelector("#demo");
    var brand = document.querySelector("#brand");
    brand.classList.add("d-none");
    var back_drop = document.querySelector(".offcanvas-backdrop");
    back_drop.onclick = function() {
        brand.classList.remove("d-none");
    };

}

function link_btn() {

}

function close_nav() {

    var demo = document.querySelector("#demo");
    var brand = document.querySelector("#brand");
    brand.classList.remove("d-none");


}


ScrollReveal().reveal('.card-destino', { delay: 50 });
ScrollReveal().reveal('.card-testimonios', { delay: 50 });
ScrollReveal().reveal('.nosotros', { delay: 50 });