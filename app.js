let toggleMenu= document.getElementById("toggleMenu");
let menuButton= document.getElementById("menuButton");
let CloseMenuButton =document.getElementById("CloseMenuButton");

config = {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
} 

flatpickr("input[type=datetime-local]", "config");

  


function openToggleMenu(){
    //open the mobile menu by changing the display none 
    //to display block
    document.getElementById("toggleMenu").style.display="block";
    document.getElementById("CloseMenuButton").style.display="block"
    document.getElementById("menuButton").style.display="none"
}

//creat function to close the menu
function closeToggleMenu(){
    //to close the menu chang the 
    document.getElementById("toggleMenu").style.display="none";
    document.getElementById("CloseMenuButton").style.display="none"
    document.getElementById("menuButton").style.display="block"
}