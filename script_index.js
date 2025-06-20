document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('fullscreenVideo');
    const volumeSlider = document.getElementById('volumeSlider');
    const muteButton = document.getElementById('muteButton');
    const muteIcon = document.getElementById('muteIcon');
    const volumeControl = document.getElementById('volumeControl');

    // Ensure the video starts muted and allows volume adjustment
    video.muted = true; // Start muted
    video.volume = 0.5; // Set default volume
    volumeSlider.disabled = true; // Disable slider initially

    // Mute/Unmute toggle
    muteButton.addEventListener('click', function () {
        if (video.muted) {
            video.muted = false; // Unmute the video
            muteIcon.src = "https://img.icons8.com/material-rounded/24/ffffff/speaker.png";
            volumeSlider.disabled = false; // Enable volume slider
            volumeControl.classList.remove('hidden'); // Show volume slider
        } else {
            video.muted = true; // Mute the video
            muteIcon.src = "https://img.icons8.com/material-rounded/24/ffffff/mute.png";
            volumeSlider.disabled = true; // Disable volume slider
            volumeControl.classList.add('hidden'); // Hide volume slider
        }
    });

    // Enable volume control via the slider
    volumeSlider.addEventListener('input', function () {
        video.volume = this.value;
    });

    // Ensure autoplay works across browsers
    video.play().catch(error => {
        console.warn('Autoplay prevented:', error);
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    });
});
