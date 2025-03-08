document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function() {
        window.open("mailto:occultscience5555@gmail.com?subject=Tarot Reading Appointment");
    });
});


const track = document.querySelector(".carousel-track");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const testimonials = document.querySelectorAll(".testimonial-card");

let index = 0;
const totalSlides = testimonials.length;
track.style.width = `${totalSlides * 100}%`;
testimonials.forEach((card) => {
    card.style.flex = `0 0 ${100 / totalSlides}%`;
});

function moveSlide(direction) {
    index += direction;
    if (index >= totalSlides) {
        index = 0;
    } else if (index < 0) {
        index = totalSlides - 1;
    }

    track.style.transform = `translateX(${-index * (100 / totalSlides)}%)`;
}

prevButton.addEventListener("click", () => moveSlide(-1));
nextButton.addEventListener("click", () => moveSlide(1));