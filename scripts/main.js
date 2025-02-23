document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function() {
        window.location.href = "mailto:appointments@occultscience.com?subject=Tarot Reading Appointment";
    });
});

