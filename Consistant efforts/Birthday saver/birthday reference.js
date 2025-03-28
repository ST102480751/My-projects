// Function to save the user's birthday in localStorage
function saveBirthday() {
    let text = document.getElementById('Birthday').value; 

    // Parse the input to check if it is a valid date
    Date.parse(text); 

    // Check if the parsed value is NaN (invalid date)
    if (isNaN(Date.parse(text))) { // Corrected to validate parsed date
        alert("Please enter a valid date"); // Show an alert if the input is invalid
    } else {
        // If valid, save the input value to localStorage with the key 'savedBirthday'
        localStorage.setItem('savedBirthday', text);
    }
}

// Function to retrieve and display the saved birthday
function displayBirthday() {
    // Get the element where the birthday will be displayed
    let display = document.getElementById('birthdayDisplay');

    // Retrieve the saved birthday from localStorage
    let savedBirthday = localStorage.getItem('savedBirthday'); 

    // Update the text content of the display element with the saved birthday
    document.getElementById('birthdayDisplay').innerText = savedBirthday; 
}