
console.log("Script loaded");
console.log("Button clicked");
document.addEventListener("DOMContentLoaded", function() {
    let currentPartIndex = 0;
    const parts = document.querySelectorAll(".tutorial-part");
    const buttons = document.querySelectorAll("button[id^='continue-button']");
    const headerHeight = document.querySelector("header") ? document.querySelector("header").offsetHeight : 0;
    const sidebarLinks = document.querySelectorAll("#quarto-margin-sidebar .sidebar a"); // Updated selector

 // Log the selected elements
    console.log('Tutorial parts:', parts);
    console.log('Continue buttons:', buttons);

    // Hide all tutorial parts except the first one
    parts.forEach(function(part, index) {
        if (index !== 0) {
            part.style.display = "none";}});
    
    // Function to scroll to the top of the element, accounting for a fixed header
      function scrollToElement(element) {
          const elementTop = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
              top: elementTop - headerHeight,
             behavior: "smooth"
         });
     }

    
    // Add click event listeners to each button
    buttons.forEach(function(button, index) {
        button.addEventListener("click", function() {
            if (currentPartIndex < parts.length - 1) {
                parts[currentPartIndex].style.display = "block";
                buttons[currentPartIndex].style.display = "none";
                currentPartIndex++;
                parts[currentPartIndex].style.display= "block";
                 // Jump to the id anchor for the current section
         //   window.location.hash = parts[currentPartIndex].id;
        // Scroll to the top of the current section
                scrollToElement(parts[currentPartIndex]);
             // Adjust scroll position to account for the height of the navbar
              //   window.scrollBy(0, 10000);
                } else {
                alert("End of tutorial");}});});});

