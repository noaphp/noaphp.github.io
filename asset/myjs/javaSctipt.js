const menus = document.querySelector("#menus");
const navbar = document.querySelector(".nav-mobile");
const header = document.querySelector(".mobile-header");

menus.onclick = () => {
    if(navbar.style.height == 0){
        navbar.style.height = "auto";
        menus.classList.add("afterMenu");
        menus.classList.add("afterMenu");
        header.classList.add("shadow-header")
    }
    else{
        navbar.style.height = "";
        menus.classList.remove("afterMenu");
        header.classList.remove("shadow-header");
    }
}


const menu = document.querySelector("#menu-icon");
const headerHeader = document.querySelector(".header-mobile");

menu.onclick = () => {
    alert()
    if(headerHeader.style.height == 0){
    }
    else{

    }
}


// function myFunction() {
//     let input = document.getElementById('myInput').value
//     input = input.toLowerCase();
//     let x = document.getElementsByClassName('table-row');

//     for (i = 0; i < x.length; i++) {
//         if (!x[i].innerHTML.toLowerCase().includes(input)) {
//             x[i].style.display = "none";
//         }
//         else {
//             x[i].style.display = "";
//         }
//     }
// }