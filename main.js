// ################### LOADER #####################
let loader = document.getElementById('loader');
window.addEventListener("load", function() {
    loader.style.display = "none";
})



// ################## NAVBAR ###################
$(document).ready(function () {
    $(".menu").click(function(){
        $(this).toggleClass("fa-times");
        $(".navbar").toggleClass('nav-toggle');

        $window.on("load scroll", function(){
            $(".menu").removeClass("fa-times");
            $(".navbar").removeClass('nav-toggle');
        })
    });
});

// ##################### NAV ACTIVE ANIMATTION #######################

$(document).ready(function(){
    var home = document.querySelector(".home");
    var about = document.querySelector(".about");
    var services = document.querySelector(".services");
    var experience = document.querySelector(".experience");
    var works = document.querySelector(".works");
    var contact = document.querySelector(".contact");

    $(home).on("click", function(){
        $(this).addClass("active");
        $(about).removeClass("active");
        $(services).removeClass("active");
        $(experience).removeClass("active");
        $(works).removeClass("active");
        $(contact).removeClass("active");
        $(contact).removeClass("active");
    });

    $(about).on("click", function(){
        $(this).addClass("active");
        $(home).removeClass("active");
        $(services).removeClass("active");
        $(experience).removeClass("active");
        $(works).removeClass("active");
        $(contact).removeClass("active");
    })

    $(services).on("click", function(){
        $(this).addClass("active");
        $(home).removeClass("active");
        $(about).removeClass("active");
        $(experience).removeClass("active");
        $(works).removeClass("active");
        $(contact).removeClass("active");
    })

    $(experience).on("click", function(){
        $(this).addClass("active");
        $(home).removeClass("active");
        $(about).removeClass("active");
        $(services).removeClass("active");
        $(works).removeClass("active");
        $(contact).removeClass("active");
    })

    $(works).on("click", function(){
        $(this).addClass("active");
        $(home).removeClass("active");
        $(about).removeClass("active");
        $(services).removeClass("active");
        $(experience).removeClass("active");
        $(contact).removeClass("active");
    })

    $(contact).on("click", function(){
        $(this).addClass("active");
        $(home).removeClass("active");
        $(about).removeClass("active");
        $(services).removeClass("active");
        $(experience).removeClass("active");
        $(works).removeClass("active");
    })
});

// ######################## AUTO TYPE #########################
    var typed = new Typed(".dynamic_text",{
        strings: ["Web Designer", "Coder", "Freelancer", "YouTuber"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
    });

// ###################### COUNTER ##################### 
    $(document).ready(function () {
        $('.count').counterUp({
            delay: 10,
            time: 1000
        });
    });

// ####################### TESTIMONIAL SLIDER #########################
    $(document).ready(function () {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            grabCursor: true,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            // when window is >= 576px
            breakpoints:{
                768:{
                    slidesPerView: 2,
                }
            },
        });
    });

// ##################### ANIMATION OS SCROLL #########################

    $(document).ready(function () {
        AOS.init();
    });

