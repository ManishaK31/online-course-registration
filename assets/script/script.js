// Check if there are any stored users in localStorage, if not initialize with an empty array
if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify([])); // Empty array for first-time users
}

// Handle login form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the input values from the login form
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Get the stored users from localStorage
    const users = JSON.parse(localStorage.getItem("users"));

    // Find the user with the matching username and password
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // If the username and password match a user, login is successful
        alert("Login successful!");
        window.location.href = "file:///D:/work/html/assets/course.html"; // Redirect to the protected page (e.g., dashboard)
    } else {
        // If credentials don't match, show error message
        document.getElementById("error-message").style.display = "block";
    }
});

// Allow users to create an account (save username and password to localStorage)
document.getElementById("create-account-link").addEventListener("click", function(event) {
    event.preventDefault();

    const newUsername = prompt("Enter a new username:");
    const newPassword = prompt("Enter a new password:");

    // Get the stored users from localStorage
    const users = JSON.parse(localStorage.getItem("users"));

    // Check if the username already exists
    if (users.some(user => user.username === newUsername)) {
        alert("Username already exists, please choose another.");
    } else {
        // Add new user to the list
        users.push({ username: newUsername, password: newPassword });

        // Save the updated list of users back to localStorage
        localStorage.setItem("users", JSON.stringify(users));

        alert("Account created! You can now log in.");
    }
});
    function showNotification(event) {
      event.preventDefault(); // prevent link jump

      const notification = document.getElementById('notification');
      notification.style.display = 'block';

      // Hide after 3 seconds (optional)
      setTimeout(() => 
        {
            notification.style.display = 'none'; 
        }, 3000);
    }