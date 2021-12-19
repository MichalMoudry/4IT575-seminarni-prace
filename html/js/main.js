$(document).ready(function () {
    $("#home-page-content").load("../README.html");
});

// Open and close the sidebar on medium and small screens
function openSidebar() {
    document.getElementById("sidebar").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function closeSidebar() {
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

// Change style of top container on scroll
window.onscroll = function() {myFunction()};
    function myFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("myTop").classList.add("w3-card-4", "w3-animate-opacity");
        document.getElementById("myIntro").classList.add("w3-show-inline-block");
    } else {
        document.getElementById("myIntro").classList.remove("w3-show-inline-block");
        document.getElementById("myTop").classList.remove("w3-card-4", "w3-animate-opacity");
    }
}

// Accordions
function myAccordion(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        x.previousElementSibling.className += " w3-theme";
    } else { 
        x.className = x.className.replace("w3-show", "");
        x.previousElementSibling.className = 
        x.previousElementSibling.className.replace(" w3-theme", "");
    }
}