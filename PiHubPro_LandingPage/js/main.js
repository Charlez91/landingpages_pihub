$(document).ready(function(){ 

   /*-------------Features Carousel-------------*/

    $('.features-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
                0:{
                    items:1,
                   
                },
                600:{
                    items:2,
                    
                },
                1000:{
                    items:3,
                    
                }
        }
    });
    /*-- Toggle Theme Start - light and dark mode--*/
    function toggleTheme(){
        if(localStorage.getItem("pihub-theme") !== null){
             if(localStorage.getItem("pihub-theme") === "dark"){
                $("body").addClass("dark");
             }else{
                $("body").removeClass("dark");
             }
        }
        updateIcon();
    }
    toggleTheme();
    $(".toggle-theme").on("click",function(){
         $("body").toggleClass("dark");
         if($("body").hasClass("dark")){
            localStorage.setItem("pihub-theme","dark");
         }else{
            localStorage.setItem("pihub-theme","light");
         }
         updateIcon();
    });
    function updateIcon(){
        if($("body").hasClass("dark")){
            $(".toggle-theme i").removeClass("fa-moon");
            $(".toggle-theme i").addClass("fa-sun");
        }else{
             $(".toggle-theme i").removeClass("fa-sun");
             $(".toggle-theme i").addClass("fa-moon");
        }
    }
});





/*FAQs*/
    const faqs = document.querySelectorAll(".faq");

    faqs.forEach((faq) => {
        faq.addEventListener("click", () => {
            faq.classList.toggle("active");
        });
    });
/*end FAQs*/

/* App Service */
function OpenAppService(){

    $(".appService").animate( { "opacity": "show", top:"0"} , 1000 ); 
    
}
function CloseAppService(){

    $(".appService").animate( { "opacity": "hide", top:"100"} , 1000 ); 
    
}
/*End App Service*/