/*global $, document*/
/*jslint plusplus : true, evil : true*/



window.onresize = changeSize;

window.onload = changeSize;

function changeSize(event) {
        
    $(".loader").fadeOut("slow");
    
    let newWidth = window.innerWidth;
    
    let newHeight = window.innerHeight;
    
    let myWidth = document.querySelector(".cont").clientWidth;
    
    let myHeight = document.querySelector(".cont").clientHeight
    
    
    
    if (newWidth <= myWidth) {

        
        let different = (myWidth - newWidth) / myWidth;

        let scaleValue = `scale(${1 - different})`;
        
        document.querySelector(".cont").style.transition = "transform 500ms ease-in-out";
        
        document.querySelector(".cont").style.transform = scaleValue;
        
        document.querySelector(".cont").style.top = "0px";
        
    } else if (newHeight < myHeight) {
        
        let different2 = (myHeight - newHeight) / myHeight;

        let scaleValue2 = `scale(${1 - different2})`;
        
        document.querySelector(".cont").style.transition = "transform 500ms ease-in-out";
        
        document.querySelector(".cont").style.transform = scaleValue2;
        
        document.querySelector(".cont").style.top = "0px";
        
    }  else {
        
        document.querySelector(".cont").style.transform = 'scale(1)';
    }
    
}



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
                                <button class="close" id="close" onclick="removeMeal(event, ${price})" type="button">x</button>
                            </div>
                        </div>
                    </div>
                </div>`;
    
    
    var myOrders = document.getElementById("orders");
        
    myOrders.innerHTML += item;
    
    let total = document.getElementById("total").innerText;
    
    document.getElementById("total").innerHTML = (Number(total) + Number(price)).toFixed(2);
    

}

function removeMeal(event, price) {
    
    event.target.parentElement.parentElement.parentElement.parentElement.style.display = "none";
    
    let total = document.getElementById("total").innerText;
    
    document.getElementById("total").innerHTML = (Number(total) - Number(price)).toFixed(2);
}




function plus() {
    
    'use strict';
    
    let personNo = document.getElementById("personNo").innerText;
    
    document.getElementById("personNo").innerHTML = Number(personNo) + 1;
}

function minus() {
    
    'use strict';
    
    let personNo = document.getElementById("personNo").innerText;
    
    if (Number(personNo) > 0){
        
        document.getElementById("personNo").innerHTML = Number(personNo) - 1;
    }
}










var adContain = document.querySelector("div.adress"),
        
    adress = document.getElementById("adress"),
    
    inputAd = document.createElement("input"),
    
    editButton = document.getElementById("edit");

inputAd.setAttribute('id', 'inputAdress');

adContain.appendChild(inputAd);

var inputAdress = document.getElementById("inputAdress");

inputAdress.style.display = "none";

editButton.onclick = function () {
    
    'use strict';

    inputAdress.style.display = "inline-block";

    adress.style.display = "none";

    document.querySelector("button.edit").textContent = "save";
    
    console.log(adress.style.display = "none")


//    document.querySelector("button.edit").id = 'save';

    editButton.addEventListener("click", function () {

        'use strict';

        adress.style.display = "inline-block";

        adress.textContent = inputAdress.value;

        inputAdress.style.display = "none";

        document.querySelector("button.edit").textContent = "Edit";
    })
}

//var saveButton = document.getElementById('save');




