let divsHours = document.querySelectorAll('#divHours p');
let array
function countdown() {
    const targetDate = new Date("March 14, 2025 00:00:00").getTime();
    
    const interval = setInterval(() => {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        if (timeLeft <= 0) {
            clearInterval(interval);
            console.log("¡Llegó el día!");
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        let arrayFecha = [days,hours,minutes,seconds]

        divsHours.forEach((elemnt,key)=>{
            elemnt.innerText = arrayFecha[key   ]
        })

    }, 1000);
}

countdown();


document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".animate__animated");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate__fadeInUp");
            }
        });
    }, { threshold: 0.5 });

    elements.forEach(element => observer.observe(element));
});

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".collage-img");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate__fadeInLeft");
            }
        });
    }, { threshold: 0.5 });

    elements.forEach(element => observer.observe(element));
});