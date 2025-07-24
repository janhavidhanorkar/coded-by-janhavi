// Show Signup Form
document.getElementById("signup-btn").addEventListener("click", function () {
    document.getElementById("signup-form").style.display = "block";
});

document.getElementById("close-signup").addEventListener("click", function () {
    document.getElementById("signup-form").style.display = "none";
});

// Show Calendar
document.getElementById("calendar-btn").addEventListener("click", function () {
    let calendar = document.getElementById("calendar");
    calendar.style.display = "block";
    calendar.innerHTML = `<h3>${new Date().toDateString()}</h3>`;
});

// Show Quote on Button Click
document.querySelectorAll(".small-btn").forEach(button => {
    button.addEventListener("click", function () {
        let quoteText = this.getAttribute("data-quote");
        let quoteDisplay = document.getElementById("quote-display");
        quoteDisplay.style.display = "block";
        quoteDisplay.innerHTML = `<p>${quoteText}</p>`;
    });
});
