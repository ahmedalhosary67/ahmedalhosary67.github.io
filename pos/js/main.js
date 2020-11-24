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
                items: 2
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
        
        $("*").removeClass("active-card")
        
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
    
});