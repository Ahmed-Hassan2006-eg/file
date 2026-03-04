const btn = document.getElementById("filterBtn");
const box = document.getElementById("filterBox");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");
const closeBtnn = document.getElementById("closeBtnn");

// فتح الفلتر
btn.addEventListener("click", () => {
    box.classList.remove("hidden");
    overlay.classList.remove("hidden");
});

// قفل الفلتر
closeBtn.addEventListener("click", closeFilter);
overlay.addEventListener("click", closeFilter);

function closeFilter() {
    box.classList.add("hidden");
    overlay.classList.add("hidden");
}
btn.addEventListener("click", () => {
    box.classList.remove("hidden");
    overlay.classList.remove("hidden");
    document.body.classList.add("no-scroll");
});

function closeFilter() {
    box.classList.add("hidden");
    overlay.classList.add("hidden");
    document.body.classList.remove("no-scroll");
}


const vehicleOptions = document.querySelectorAll(
    ".filter-content .options:first-of-type .pill"
);

vehicleOptions.forEach((btn) => {
    btn.addEventListener("click", () => {
        vehicleOptions.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
    });
});


const timeOptions = document.querySelectorAll(
    ".filter-content .options:last-of-type .pill"
);

timeOptions.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("active");
    });
});