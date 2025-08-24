// Array of roles that will appear in the typewriter effect
const roles = ["Cloud Engineer", "DevOps Engineer"];

// Index of the current role being typed
let index = 0;

// Index of the current character in the role being typed
let charIndex = 0;

// Flag to determine whether the effect is deleting characters
let isDeleting = false;

/**
 * Function to create typewriter effect
 */
function typeEffect() {
    // Get the element where the text will be displayed
    const roleElement = document.getElementById("dynamic-role");

    // Get the current role from the array
    const currentRole = roles[index];

    // If deleting, decrease character count, otherwise increase
    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    // Update the displayed text with the current substring
    roleElement.textContent = currentRole.substring(0, charIndex);

    // Case 1: Finished typing the whole word
    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;  // Start deleting
        setTimeout(typeEffect, 1000);  // Pause for 1 second before deleting
    } 
    // Case 2: Finished deleting the word completely
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;  // Start typing again
        index = (index + 1) % roles.length; // Move to next role (loop back if at end)
        setTimeout(typeEffect, 500); // Small pause before typing the next role
    } 
    // Case 3: Still typing or deleting
    else {
        // Typing speed (150ms per character), deleting speed (100ms per character)
        setTimeout(typeEffect, isDeleting ? 100 : 150);
    }
}

// Start the typewriter effect
typeEffect();
