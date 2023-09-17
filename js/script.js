// Typewritter Effect
let typed = new Typed(".changeable", {
    strings: ["Web Developement.", "Android Development.", "Graphics Designing.", "Video Editing."],
    typeSpeed: 70,
    backSpeed: 70,
    loop: true
})


// Music
let i = 1;
let music = () => {
    if (i % 2 == 1) {
        document.getElementById("music").play();
        i++;
    }
    else {
        document.getElementById("music").pause();
        i++;
    }
}