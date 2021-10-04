// console.log('Creative design.');
// console.log('Welcome to the console.');

var navBtn = document.querySelector('.nav-btn')
var navListContainer = document.querySelector('.nav-list-container')

navBtn.addEventListener("click", function(){
    // console.log('Hi')
    if (navListContainer.style.left == '-900px'){
        navListContainer.style.left = '0px';
    }

    else{
        navListContainer.style.left = "-900px";
    }
});