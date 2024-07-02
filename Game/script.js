let points = 0; // Initialize points counter
document.getElementById('clicker').addEventListener('click', function() {
    // Increment points
    points++;
    
    // Check if points exceed 1000 and update points display accordingly
    if (points > 1000) {
        document.getElementById('points').textContent = "MAX POINTS";
    } else {
        document.getElementById('points').textContent = points;
    }

    // Add class to trigger animation
    this.classList.add('clicked');

    // Remove the class after the animation ends
    setTimeout(() => {
        this.classList.remove('clicked');
    }, 300); // Adjust timing to match animation duration (300ms in this case)
});
