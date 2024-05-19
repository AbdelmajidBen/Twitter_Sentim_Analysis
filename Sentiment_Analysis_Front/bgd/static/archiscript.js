// Function to check if an element is in the viewport
// ---------Responsive-navbar-active-animation-----------
function test(){
	var tabsNewAnim = $('#navbarSupportedContent');
	var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
	var activeItemNewAnim = tabsNewAnim.find('.active');
	var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
	var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
	var itemPosNewAnimTop = activeItemNewAnim.position();
	var itemPosNewAnimLeft = activeItemNewAnim.position();
	$(".hori-selector").css({
		"top":itemPosNewAnimTop.top + "px", 
		"left":itemPosNewAnimLeft.left + "px",
		"height": activeWidthNewAnimHeight + "px",
		"width": activeWidthNewAnimWidth + "px"
	});
	$("#navbarSupportedContent").on("click","li",function(e){
		$('#navbarSupportedContent ul li').removeClass("active");
		$(this).addClass('active');
		var activeWidthNewAnimHeight = $(this).innerHeight();
		var activeWidthNewAnimWidth = $(this).innerWidth();
		var itemPosNewAnimTop = $(this).position();
		var itemPosNewAnimLeft = $(this).position();
		$(".hori-selector").css({
			"top":itemPosNewAnimTop.top + "px", 
			"left":itemPosNewAnimLeft.left + "px",
			"height": activeWidthNewAnimHeight + "px",
			"width": activeWidthNewAnimWidth + "px"
		});
	});
}
$(document).ready(function(){
	setTimeout(function(){ test(); });
});
$(window).on('resize', function(){
	setTimeout(function(){ test(); }, 500);
});
$(".navbar-toggler").click(function(){
	$(".navbar-collapse").slideToggle(300);
	setTimeout(function(){ test(); });
});

// --------------add active class-on another-page move----------
jQuery(document).ready(function($){
	// Get current path and find target link
	var path = window.location.pathname.split("/").pop();

	// Account for home page with empty path
	if ( path == '' ) {
		path = 'index.html';
	}

	var target = $('#navbarSupportedContent ul li a[href="'+path+'"]');
	// Add active class to target link
	target.parent().addClass('active');
});

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/* the part for the slide in animation for explanation part */


document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');
    const imageContainer = document.querySelector('.image-container');

    function checkSlide() {
        const slideInAt = window.scrollY + window.innerHeight - 150; // Adjust threshold as needed

        // Loop through each card to check if it's in view
        cards.forEach(card => {
            const cardTop = card.offsetTop;
            const cardBottom = card.offsetTop + card.offsetHeight;

            const isHalfShown = slideInAt > cardTop;
            const isNotScrolledPast = window.scrollY < cardBottom;

            if (isHalfShown && isNotScrolledPast) {
                card.classList.add('slide-in-active');
            } else {
                card.classList.remove('slide-in-active');
            }
        });

        // Check if the image container is in view
        const imageTop = imageContainer.offsetTop;
        const imageBottom = imageContainer.offsetTop + imageContainer.offsetHeight;

        const isImageHalfShown = slideInAt > imageTop;
        const isImageNotScrolledPast = window.scrollY < imageBottom;

        if (isImageHalfShown && isImageNotScrolledPast) {
            imageContainer.classList.add('slide-in-active');
        } else {
            imageContainer.classList.remove('slide-in-active');
        }
    }

    // Event listener for scroll event
    window.addEventListener('scroll', checkSlide);

    // Trigger checkSlide on page load
    checkSlide();
});



document.addEventListener("DOMContentLoaded", function() {
    const slideInHeading = document.querySelector('.slide-in-heading');

    function checkSlide() {
        // Get the top and bottom positions of the element relative to the viewport
        const slideInAt = window.scrollY + window.innerHeight - slideInHeading.offsetHeight / 2;
        const elementBottom = slideInHeading.offsetTop + slideInHeading.offsetHeight;

        // Check if the element is half visible on the screen
        const isHalfShown = slideInAt > slideInHeading.offsetTop;
        const isNotScrolledPast = window.scrollY < elementBottom;

        if (isHalfShown && isNotScrolledPast) {
            slideInHeading.classList.add('slide-in-active');
        } else {
            slideInHeading.classList.remove('slide-in-active');
        }
    }

    // Event listener for scroll event
    window.addEventListener('scroll', checkSlide);

    // Trigger checkSlide on page load
    checkSlide();
});
// Function to check if an element is in the viewport
// ---------Responsive-navbar-active-animation-----------
function test(){
	var tabsNewAnim = $('#navbarSupportedContent');
	var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
	var activeItemNewAnim = tabsNewAnim.find('.active');
	var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
	var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
	var itemPosNewAnimTop = activeItemNewAnim.position();
	var itemPosNewAnimLeft = activeItemNewAnim.position();
	$(".hori-selector").css({
		"top":itemPosNewAnimTop.top + "px", 
		"left":itemPosNewAnimLeft.left + "px",
		"height": activeWidthNewAnimHeight + "px",
		"width": activeWidthNewAnimWidth + "px"
	});
	$("#navbarSupportedContent").on("click","li",function(e){
		$('#navbarSupportedContent ul li').removeClass("active");
		$(this).addClass('active');
		var activeWidthNewAnimHeight = $(this).innerHeight();
		var activeWidthNewAnimWidth = $(this).innerWidth();
		var itemPosNewAnimTop = $(this).position();
		var itemPosNewAnimLeft = $(this).position();
		$(".hori-selector").css({
			"top":itemPosNewAnimTop.top + "px", 
			"left":itemPosNewAnimLeft.left + "px",
			"height": activeWidthNewAnimHeight + "px",
			"width": activeWidthNewAnimWidth + "px"
		});
	});
}
$(document).ready(function(){
	setTimeout(function(){ test(); });
});
$(window).on('resize', function(){
	setTimeout(function(){ test(); }, 500);
});
$(".navbar-toggler").click(function(){
	$(".navbar-collapse").slideToggle(300);
	setTimeout(function(){ test(); });
});



// --------------add active class-on another-page move----------
jQuery(document).ready(function($){
	// Get current path and find target link
	var path = window.location.pathname.split("/").pop();

	// Account for home page with empty path
	if ( path == '' ) {
		path = 'index.html';
	}

	var target = $('#navbarSupportedContent ul li a[href="'+path+'"]');
	// Add active class to target link
	target.parent().addClass('active');
});




// Add active class on another page linked
// ==========================================
// $(window).on('load',function () {
//     var current = location.pathname;
//     console.log(current);
//     $('#navbarSupportedContent ul li a').each(function(){
//         var $this = $(this);
//         // if the current path is like this link, make it active
//         if($this.attr('href').indexOf(current) !== -1){
//             $this.parent().addClass('active');
//             $this.parents('.menu-submenu').addClass('show-dropdown');
//             $this.parents('.menu-submenu').parent().addClass('active');
//         }else{
//             $this.parent().removeClass('active');
//         }
//     })
// });
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');

    cards.forEach(function (card) {
        card.addEventListener('click', function () {
            // Toggle the 'active' class on the clicked card
            card.classList.toggle('active');

            // Toggle visibility of the card content (paragraph)
            const content = card.querySelector('p');
            content.style.display = card.classList.contains('active') ? 'block' : 'none';

            // Collapse other cards
            cards.forEach(function (otherCard) {
                if (otherCard !== card) {
                    otherCard.classList.remove('active');
                    otherCard.querySelector('p').style.display = 'none';
                }
            });
        });
    });
});





document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card");
    const detailsContainers = document.querySelectorAll(".details-container");

    // Event listener for card clicks
    cards.forEach(card => {
        card.addEventListener("click", function() {
            const description = this.getAttribute("data-description");

            // Toggle active class on corresponding details container
            detailsContainers.forEach(container => {
                if (container.id === description + "-details") {
                    container.classList.toggle("active");
                } else {
                    container.classList.remove("active");
                }
            });
        });
    });
});



$(document).ready(function() {
    $('.new-section').fadeIn(1000); // Example animation
});



// JavaScript to dynamically insert the wave divider before the new section
// Function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll event
function handleScroll() {
    const cards = document.querySelectorAll('.cardin');

    cards.forEach((card) => {
        if (isInViewport(card)) {
            card.classList.add('in-view');
        } else {
            card.classList.remove('in-view');
        }
    });
}

// Add scroll event listener to trigger animation on scroll
document.addEventListener('scroll', handleScroll);

