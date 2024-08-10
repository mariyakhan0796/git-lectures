document.getElementById('myForm').addEventListener('submit', function(event) {
    // Get the input value
    const input = document.getElementById('myInput').value.trim();
    
    // Check if the input is empty
    if (input === '') {
        // Prevent the form from submitting
        event.preventDefault();
        
        // Show an error message
        document.getElementById('error').textContent = 'The input field cannot be empty.';
    } else {
        // Clear any previous error message
        document.getElementById('error').textContent = '';
    }
});
