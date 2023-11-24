// Typewritter Effect
let typed = new Typed(".changeable", {
    strings: ["Web Developement.", "Android Development.", "Graphics Designing.", "Video Editing.", "Automation and Robotics."],
    typeSpeed: 70,
    backSpeed: 70,
    loop: true
})


// Music
function toggleMusic() {
    var audio = document.getElementById("music");

    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
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
