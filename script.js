
// Wait for the webpage to load completely before running JavaScript
document.addEventListener("DOMContentLoaded", function() {
    // Track screen dimensions
    function logScreenDimensions() {
        console.log(`Width: ${window.innerWidth}, Height: ${window.innerHeight}`);
    }

    // Log initial dimensions
    logScreenDimensions();

    // Track resize events
    window.addEventListener('resize', logScreenDimensions);

    // Select the button using its ID
    let button = document.getElementById("myButton");

    // Add a click event listener to the button if it exists
    if (button) {
        button.addEventListener("click", function() {
            // Find the paragraph and change its text
            document.getElementById("message").innerHTML = "You clicked the button!";
        });
    }
});
