// Get modal element
const modal = document.getElementById("modal");

// Get open modal button
const loginBtn = document.getElementById("loginBtn");

// Get close button
const closeBtn = document.getElementsByClassName("close")[0];

// Listen for open click
loginBtn.onclick = function() {
    modal.style.display = "block";
}

// Listen for close click
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Listen for outside click
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Listen for Escape key to close modal
window.onkeydown = function(event) {
    if (event.key === "Escape") {
        modal.style.display = "none";
    }
}