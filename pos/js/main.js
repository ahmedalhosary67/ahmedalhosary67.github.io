/*global $, document*/
/*jslint plusplus : true, evil : true*/

// $('.total').css('height',  (960*74/100)+15+'px');
// $('.cont').css('height',  (960*74/100)+'px');

// var pageWidth, pageHeight;

// var basePage = {
//   width: 1280,
//   height: 960,
//   scale: 1,
//   scaleX: 1,
//   scaleY: 1
// };

// $(function(){
//   var $page = $('.total');

//   getPageSize();
//   scalePages($page, pageWidth, pageHeight);

//   //using underscore to delay resize method till finished resizing window
//   $(window).resize(_.debounce(function () {
//     getPageSize();
//     scalePages($page, pageWidth, pageHeight);
//   }, 150));

// function getPageSize() {
//   pageHeight = $('#container').height();
//   pageWidth = $('#container').width();
// }

// function scalePages(page, maxWidth, maxHeight) {
//   var scaleX = 1, scaleY = 1;
//   scaleX = maxWidth / basePage.width;
//   scaleY = maxHeight / basePage.height;
//   basePage.scaleX = scaleX;
//   basePage.scaleY = scaleY;
//   basePage.scale = (scaleX > scaleY) ? scaleY : scaleX;

//  // var newLeftPos = Math.abs(Math.floor(((basePage.width * basePage.scale) - maxWidth)/2));
//  // var newTopPos = Math.abs(Math.floor(((basePage.height * basePage.scale) - maxHeight)/2));
//  var newLeftPos = Math.abs(Math.floor(((basePage.width * basePage.scale) - maxWidth)/2));
//   var newTopPos = 0;
//   page.attr('style', '-webkit-transform:scale(' + basePage.scale + ');left:' + newLeftPos + 'px;top:' + newTopPos + 'px;');
// }
// });
// var mainWidth = document.querySelector(".total").outerWidth,

//     mainHeight = document.querySelector(".total").outerHeight;

// window.onresize = changeSize;

// window.onload = changeSize;

// function changeSize(event) {

//     $(".loader").fadeOut("slow");

//     let newWidth = window.innerWidth;

//     let newHeight = window.innerHeight;

//     let myWidth = document.querySelector(".total").clientWidth;

//     let myHeight = document.querySelector(".total").clientHeight

//     if (newWidth <= myWidth) {

//         let different = (myWidth - newWidth) / myWidth;

//         let scaleValue = `scale(${1 - different})`;

//         document.querySelector(".total").style.transition = "transform 500ms ease-in-out";

//         document.querySelector(".total").style.transform = scaleValue;

//         document.querySelector(".total").style.top = "0px";

//     } else if (newHeight < myHeight) {

//         let different2 = (myHeight - newHeight) / myHeight;

//         let scaleValue2 = `scale(${1 - different2})`;

//         document.querySelector(".total").style.transition = "transform 500ms ease-in-out";

//         document.querySelector(".total").style.transform = scaleValue2;

//         document.querySelector(".total").style.top = "0px";

//     }  else {

//         document.querySelector(".total").style.transform = 'scale(1)';
//     }

// }

$(document).ready(function () {
  "use strict";
  $(".owl-carousel").owlCarousel({
    margin: 20,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 3,
      },
      576: {
        items: 4,
      },
      900: {
        items: 6,
      },
      1000: {
        items: 8,
      },
    },
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

var myArray = [];
var myOrders = document.getElementById("orders");
var total = document.getElementById("total").innerText;
function getMeal(name, price, image, id) {
  
  if (myArray.indexOf(id) == -1) {
    let item = `<div class=" card mb-3 mt-3">
                        <div class="row no-gutters">
                            <div class="col-lg-4">
                                <img src=${image} class="card-img" alt="...">
                            </div>
                            <div class="col-lg-5 col-6">
                                <div class="card-body">
                                    <p class="card-text"><span type="text" class="amount" id="${
                                      id + 1
                                    }">1</span>X ${name}</p>
                                </div>
                            </div>
                            <div class="col-lg-2 col-4">
                                <div class="card-body text-right">
                                    <p class="card-text"><small class="text-muted">&#36;${price}</small></p>
                                </div>
                            </div>
                            <div class="col-lg col-2">
                                <div class="card-body text-right mr-1">
                                    <button class="close" id="close" onclick="removeMeal(event, ${price}, ${
      id + 1
    })" type="button">x</button>
                                </div>
                            </div>
                        </div>
                    </div>`;

    myOrders.innerHTML += item;

    myArray.push(id);

    document.getElementById("total").innerHTML = (
      Number(total) + Number(price)
    ).toFixed(2);
  } else {
    let amount = document.getElementById(id + 1);
    amount.innerText = Number(amount.innerText) + 1;
    document.getElementById("total").innerHTML = (
      Number(total) + Number(price)
    ).toFixed(2);
  }
}

function removeMeal(event, price, id) {
  event.target.parentElement.parentElement.parentElement.parentElement.remove();

//   myArray = [];
console.log(myArray[id - 1]);
  

  document.getElementById("total").innerHTML = (
    Number(total) -
    Number(price) * Number(id.innerText)
  ).toFixed(2);
}

function plus() {
  let personNo = document.getElementById("personNo").innerText;

  document.getElementById("personNo").innerHTML = Number(personNo) + 1;
}

function minus() {
  let personNo = document.getElementById("personNo").innerText;

  if (Number(personNo) > 0) {
    document.getElementById("personNo").innerHTML = Number(personNo) - 1;
  }
}

var adContain = document.querySelector("div.adress"),
  adress = document.getElementById("adress"),
  editButton = document.getElementById("edit");

editButton.onclick = function () {
  let yourAdress = prompt("please write your adress");

  if (yourAdress == null || yourAdress == "") {
    adress.textContent = "Unknown";
  } else {
    adress.textContent = yourAdress;
  }
};

function changeTime() {
  let time = prompt("please enter time that you need");

  if (time == null || time == "") {
    document.querySelector(".time .time-number").textContent = "Unknown";
  } else {
    document.querySelector(".time .time-number").textContent = time;
  }
}

$(".cont main nav .menu button").click(function () {
  $("aside").toggle(400);
});
