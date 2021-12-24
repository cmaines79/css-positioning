// when the user scrolls the page, execute the function
window.onscroll = function() {stickyStuff()};

// get the navbar
var navbar = document.getElementById("nav");

// get the side-bar
var sideBar = document.getElementById('side-bar');

// get the bottom of the more-topics
var moreTopics = document.getElementById('more-topics');

// get the offset position of the navbar, side-bar, &
var navbarTop = navbar.offsetTop;
// var sideBarTop = sideBar.offsetTop;
var moreTopicsBottom = moreTopics.offsetTop;


// useful items
var sideBarPosition = sideBar.offsetLeft - 25;



const updateSideBarPosition = () => {
    
}





// add the sticky class to the navbar when you reach its scroll position.  
// remove sticky class when you leave the scroll position
const stickyStuff = () => {
    
    // sticking the navbar
    if (window.pageYOffset >= navbarTop) {
        navbar.classList.add("sticky-nav");
    } else {
        navbar.classList.remove("sticky-nav");
    }

    // sticking the sideBar
    if (window.pageYOffset >= navbarTop) {
        // add the sticky-side-bar class
        sideBar.classList.add('sticky-side-bar');

        // adjust the positioning for the left to compensate for the width of the page
        document.querySelector('.sticky-side-bar').style.left = sideBarPosition + "px";        
    } else {
        sideBar.classList.remove('sticky-side-bar');
    }
}