// Login button event handeler
document.getElementById("login-btn").addEventListener("click", function(e) {
    const emailInput = document.getElementById("email")
    const passwordInput = document.getElementById("password")

    if(emailInput.value == "ibnul@gmail.com" && passwordInput.value == "secretPassword") {
        window.location.href = "dashboard.html"
    }
})