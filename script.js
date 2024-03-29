let users = [
    { email: "user1@gmail.com", password: "password1", role: "admin" },
    { email: "user2@gmail.com", password: "password2", role: "user" }
];

// Function to validate login
function signIn() {
    let emailInput = document.getElementById("email").value;
    let passwordInput = document.getElementById("password").value;

    let User = users.find(u => u.email === emailInput && u.password === passwordInput);

    if (User) {
        // Update login status
        document.getElementById("login-status").textContent = `Welcome, ${User.email}, Sebagai (${User.role})`;
        document.getElementById("login-status").style.color = "green";

    } else {
        alert('Sign In Tidak Berhasil');
    }
}