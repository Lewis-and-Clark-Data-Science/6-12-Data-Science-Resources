<script>
console.log("Script loaded");
console.log("Button clicked");
document.addEventListener("DOMContentLoaded", function() {
    let currentPartIndex = 0;
    const parts = document.querySelectorAll(".tutorial-part");
    const buttons = document.querySelectorAll("button[id^='continue-button']");

 // Log the selected elements
    console.log('Tutorial parts:', parts);
    console.log('Continue buttons:', buttons);


    // Hide all tutorial parts except the first one
    parts.forEach(function(part, index) {
        if (index !== 0) {
            part.style.display = "none";
        }
    });
    


    // Add click event listeners to each button
    buttons.forEach(function(button, index) {
        button.addEventListener("click", function() {
            if (currentPartIndex < parts.length - 1) {
                parts[currentPartIndex].style.display = "none";
                currentPartIndex++;
                parts[currentPartIndex].style.display= "block";
                } else {
                alert("End of tutorial");
            }
        });
    });
});


</script>
