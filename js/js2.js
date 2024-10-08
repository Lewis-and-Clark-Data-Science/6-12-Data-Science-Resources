```{=html}
<script>
console.log("Script loaded");

document.addEventListener("DOMContentLoaded", function() {
    let currentPartIndex = 0;
    const parts = document.querySelectorAll(".tutorial-part");
    const buttons = document.querySelectorAll("button[id^='continue-button']");
    const nextButton = document.getElementById("next-button");
    const headerHeight = document.querySelector("header") ? document.querySelector("header").offsetHeight : 0;
    const sidebarLinks = document.querySelectorAll("#quarto-margin-sidebar .sidebar a"); // Updated selector

    // Log the selected elements
    console.log('Tutorial parts:', parts);
    console.log('Continue buttons:', buttons);

    // Hide all tutorial parts except the first one
    parts.forEach(function(part, index) {
        if (index !== 0) {
            part.style.display = "none";
        }
    });

    // Function to scroll to the top of the element, accounting for a fixed header
    function scrollToElement(element) {
        const elementTop = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: elementTop - headerHeight,
            behavior: "smooth"
        });
    }

    // Function to show a specific part
    function showPart(index) {
        if (index >= 0 && index < parts.length) {
            parts.forEach((part, idx) => {
                part.style.display = (idx === index) ? "block" : "none";
            });
            scrollToElement(parts[index]);
            currentPartIndex = index;
        }
    }
    
     // Function to show all parts up to a specific index
    function showPartsUpTo(index) {
        parts.forEach((part, idx) => {
            if (idx <= index) {
                part.style.display = "block";
            }
            if (idx > index){
            part.style.display = "none";
}
        });
        scrollToElement(parts[index]);
        currentPartIndex = index;
    }

    // Add click event listeners to each button
    buttons.forEach(function(button, index) {
        button.addEventListener("click", function() {
            if (currentPartIndex < parts.length - 1) {
                parts[currentPartIndex].style.display = "block";
                buttons[currentPartIndex].style.display = "none";
                currentPartIndex++;
                showPartsUpTo(currentPartIndex);
            } else {
                alert("End of tutorial");
            }
        });
    });

    // Listen for hash changes to navigate to the correct section
    window.addEventListener("hashchange", function() {
        const hash = window.location.hash;
        if (hash) {
            const targetPart = document.querySelector(hash);
            if (targetPart) {
                const targetIndex = Array.prototype.indexOf.call(parts, targetPart);
                showPartsUpTo(targetIndex);
                buttons.forEach((button, idx) => {
                  if (idx < targetIndex) {
                  button.style.display="none";}
                  if (idx >= targetIndex) {
                  button.style.display="block";
}
                  });
            }
        }
    });

    // Check the URL hash on page load
    const initialHash = window.location.hash;
    if (initialHash) {
        const initialTarget = document.querySelector(initialHash);
        if (initialTarget) {
          const intialIndex=Array.prototype.indexOf.call(parts, initialTarget);
            showPartsUpTo(initalIndex);
            buttons.forEach((button, idx) => {
                if (idx < initialIndex) {
                    button.style.display = "none";
                }
            });
        }
    }
    // Add click event listener to the new next button
    if (nextButton) {
        nextButton.addEventListener("click", function() {
            window.location.href = "https://www.example.com"; 
        });
    }
});

</script>
```