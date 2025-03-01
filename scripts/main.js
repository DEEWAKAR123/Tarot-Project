document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function() {
        window.open("mailto:appointments@occultscience.com?subject=Tarot Reading Appointment");
    });
});

