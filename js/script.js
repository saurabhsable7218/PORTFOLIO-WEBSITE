// Typewritter Effect
let typed = new Typed(".changeable", {
    strings: ["Web Developement.", "Android Development.", "Graphics Designing.", "Video Editing.", "Automation and Robotics."],
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
//slider

$(document).ready(function(){
	
    $(".the_slider").slicarousel({
       nbr_slides: 4,
    });
     
 });

function submitForm(event) {
    event.preventDefault();
    // Formspree submission (if needed)
    document.forms["submit-to-whatsapp"].submit();

    // WhatsApp message
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("usertext").value;
    let encodedMessage = encodeURIComponent("Hello Saurabhhh!!, I am " + name + ". My phone number is " + phone + ". I would like to connect with you, ("+ message+")" ) ;

    window.location.href = "https://wa.me/7218710701?text=" + encodedMessage;
}
