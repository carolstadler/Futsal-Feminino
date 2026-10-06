// MENU MOBILE

function abrirMenu() {

    const menu = document.getElementById("mobileMenu");

    menu.classList.toggle("active");

}


// FECHAR MENU AO CLICAR

document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

        document
            .getElementById("mobileMenu")
            .classList.remove("active");

    });

});


// TOAST

function mostrarToast(mensagem) {

    const toast = document.getElementById("toast");

    toast.textContent = mensagem;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);

}


// NEWSLETTER

const form = document.getElementById("newsletterForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const email =
        document.getElementById("email").value;

    if (email.trim() === "") {
        return;
    }

    mostrarToast(
        "Você entrou para a Área Delas! ⚽💗"
    );

    form.reset();

});


// ANIMAÇÃO DOS CARDS

const elementos = document.querySelectorAll(
    ".news-main, .news-card, .club-card, .selection-card, .match, .competition-list > div"
);

elementos.forEach(elemento => {

    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(25px)";
    elemento.style.transition =
        "opacity .7s ease, transform .7s ease";

});


const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform =
                    "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


elementos.forEach(elemento => {

    observer.observe(elemento);

});


// HEADER

window.addEventListener("scroll", () => {

    const header =
        document.querySelector(".header");

    if (window.scrollY > 40) {

        header.style.boxShadow =
            "0 5px 25px rgba(0,0,0,.08)";

    } else {

        header.style.boxShadow = "none";

    }

});