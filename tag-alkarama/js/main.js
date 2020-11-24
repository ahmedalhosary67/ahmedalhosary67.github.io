/*global console, alert, prompt, $, document*/
/*jslint plusplus : true, evil : true*/

$(document).ready(function () {
    'use strict';
        $('.owl-carousel').owlCarousel({
        stagePadding: 100,
        rtl: true,
        loop: true,
        margin: 20,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    var html5lightbox_options = {
            watermark: "http://html5box.com/images/html5boxlogo.png",
            watermarklink: ""
        };
    /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
    function openNav() {
        'use strict';
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }

    /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
    function closeNav() {
        'use strict';
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }
});

