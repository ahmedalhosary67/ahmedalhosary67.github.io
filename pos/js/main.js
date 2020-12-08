/*global $, document*/
/*jslint plusplus : true, evil : true*/



$(document).ready(function () {
    'use strict';
    $('.owl-carousel').owlCarousel({
        margin: 20,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3
            },
            576: {
                items: 4
            },
            900: {
                items: 6
            },
            1000: {
                items: 8
            }
        }
    });
    
    $(".type-of-meal a").on("click", function () {
        
        $(".meals .col").fadeOut();
        
        $("*").removeClass("active-card");
        
        $(this).parent().addClass("active-card");
    });
    
    $(".type-of-meal .active-card a").on("click", function () {
        
        $(".meals .col").fadeIn();
    });
    
    $(".type-of-meal .1 a").on("click", function () {
        
        $(".meals .1").fadeIn();
    });
    
    $(".type-of-meal .2 a").on("click", function () {
        
        $(".meals .2").fadeIn();
    });
    
    $(".type-of-meal .3 a").on("click", function () {
        
        $(".meals .3").fadeIn();
    });
    $(".type-of-meal .4 a").on("click", function () {
        
        $(".meals .4").fadeIn();
    });
    
});


// pure javascript functions





//
//function fullname(first, last) {
//    return first + last
//}
//
//function sum( num1, num2) {
//    return num1 + num2
//}


function getMeal(name, price, image) {
    
    'use strict';
    
    let item = `<div class="card mb-3 mt-3">
                    <div class="row no-gutters">
                        <div class="col-lg-4">
                            <img src=${image} class="card-img" alt="...">
                        </div>
                        <div class="col-lg-5 col-6">
                            <div class="card-body">
                                <p class="card-text"><span class="amount">1X</span> ${name}</p>
                            </div>
                        </div>
                        <div class="col-lg-2 col-4">
                            <div class="card-body text-right">
                                <p class="card-text"><small class="text-muted">&#36;${price}</small></p>
                            </div>
                        </div>
                        <div class="col-lg col-2">
                            <div class="card-body text-right mr-1">
                                <button class="close" id="close" type="button">x</button>
                            </div>
                        </div>
                    </div>
                </div>`;
    
    var myOrders = document.getElementById("orders");
        
    myOrders.innerHTML += item;
    
    let total = document.getElementById("total").innerText;
    
    document.getElementById("total").innerHTML = Number(total) + Number(price);
    
    var myCloseButton = document.getElementsByClassName("close");
    
    myCloseButton.onclick = function () {
        
        'use strict';
        
        this.parentElement.parentElement.parentElement.classList.add("hidden")
    }  
}





