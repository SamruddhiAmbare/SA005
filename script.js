document.getElementById('registrationForm').addEventListener('submit', function(event){
    event.preventDefault(); // Prevent form from submitting to a server, which we're not using in this example.

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const membership = document.getElementById('membership').value;

    if(name && email && password && membership) {
        alert('Registration Successful!');
        // Here, you can also add code to send the data to a server or process it as needed.
    } else {
        alert('Please fill out all fields.');
    }
});
