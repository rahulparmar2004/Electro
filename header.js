const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const mobileProductsBtn = document.getElementById("mobileProductsBtn");
const mobileProductsMenu = document.getElementById("mobileProductsMenu");
const mobileUserBtn = document.getElementById("mobileUserBtn");
const mobileUserMenu = document.getElementById("mobileUserMenu");

// Mobile menu toggle
menuToggle?.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

// Mobile dropdown toggles
mobileProductsBtn?.addEventListener("click", () => {
    mobileProductsMenu.classList.toggle("hidden");
});

mobileUserBtn?.addEventListener("click", () => {
    mobileUserMenu.classList.toggle("hidden");
});

// Username & Email
const updateUserUI = () => {
    let username = localStorage.getItem("Username") || "User";
    let email = localStorage.getItem("Email") || "user@example.com";

    document.querySelector(".name").textContent = username;
    document.querySelectorAll(".user").forEach(el => el.textContent = `Hi, ${username}`);
    document.querySelectorAll(".email").forEach(el => el.textContent = email);
}

//load
updateUserUI();

// Logout
document.querySelectorAll(".logout").forEach(btn => {
    btn.addEventListener("click", () => {

        if (!localStorage.getItem("Username")) {
            alert("Login First!");
            return;
        }

        localStorage.removeItem("Username");
        localStorage.removeItem("Email");




        updateUserUI(); // update header

        alert("Logout successfully!");
    });
});

