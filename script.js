const users = [
    { email: "user1@gmail.com", password: "password1", role: "admin" },
    { email: "user2@gmail.com", password: "password2", role: "user" }
];

// Function to validate login
function signIn() {
    const emailInput = document.getElementById("email").value;
    const passwordInput = document.getElementById("password").value;

    const rightUser = users.find(u => u.email === emailInput && u.password === passwordInput);

    if (rightUser) {
        // Update login status
        document.getElementById("login-status").textContent = `Welcome, ${rightUser.email}, Sebagai (${rightUser.role})`;
        document.getElementById("login-status").style.color = "green";

    } else {
        alert('Sign In Tidak Berhasil');
    }
}