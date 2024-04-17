document.addEventListener('DOMContentLoaded', () => {

    const toggleButton = document.getElementById('toggleButton');
    const speechBubble = document.querySelector('.speech-bubble');

    toggleButton.addEventListener('click', () => {
        const isVisible = speechBubble.style.opacity === "1";

        if (isVisible) {
            speechBubble.style.opacity = "0";
            speechBubble.style.transform = 'translate(20px)';
            setTimeout(() => {
                speechBubble.style.display = "none";
            }, 500);
        } else {
            speechBubble.style.display = "block";
            setTimeout(() => {
                speechBubble.style.opacity = "1";
                speechBubble.style.transform = 'translate(0)';
            }, 500);
        }
    });
});
