document.getElementById("openLetter").addEventListener("click", function() {
    document.querySelector(".container").classList.add("hidden");
    document.getElementById("letter").classList.remove("hidden");
    document.getElementById("letter").classList.add("open-animation");
});

document.getElementById("openImage").addEventListener("click", function() {
    document.getElementById("letter").classList.add("hidden");
    document.getElementById("imageContainer").classList.remove("hidden");
});
