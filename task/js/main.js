/*global console, $, document, window*/



window.onresize = changeSize;

window.onload = changeSize;

function changeSize(event) {
        
    $(".loader").fadeOut("slow");
    
    let newWidth = window.innerWidth;
    
    let newHeight = window.innerHeight;
    
    let myWidth = document.querySelector("main").clientWidth;
    
    let myHeight = document.querySelector("main").clientHeight
    
    
    
    if (newWidth <= myWidth) {

        
        let different = (myWidth - newWidth) / myWidth;

        let scaleValue = `scale(${1 - different})`;
        
        document.querySelector("main").style.transition = "transform 500ms ease-in-out";
        
        document.querySelector("main").style.transform = scaleValue;
        
        document.querySelector("main").style.top = "0px";
        
    } else if (newHeight < myHeight) {
        
        let different2 = (myHeight - newHeight) / myHeight;

        let scaleValue2 = `scale(${1 - different2})`;
        
        document.querySelector("main").style.transition = "transform 500ms ease-in-out";
        
        document.querySelector("main").style.transform = scaleValue2;
        
        document.querySelector("main").style.top = "0px";
        
    }  else {
        
        document.querySelector("main").style.transform = 'scale(1)';
    }
    
}






var correctAnswers = ["pen", "ruler", "pencil", "book", "eraser"];
    

function choose(event) {
    
    'use stict';
    
    var chooses = document.querySelectorAll("section .choose-box .choose span");
    
    for(let one of chooses) {
        
        one.classList.remove("active");
    }
    
    event.target.classList.add("active");
}

function answer() {
    
    var activeChoose = document.querySelector("section .choose-box .choose span.active");
    
    if (correctAnswers.includes(activeChoose.textContent)) {
        
        correctAudio();
        
        event.target.textContent = activeChoose.textContent;
        
        let correctImg = `<img src="./img/right.png" width="25" class="float-right pt-3">`;
        
        event.target.innerHTML += correctImg;
        
        activeChoose.classList.add("fade");
        
        activeChoose.classList.remove("active");
        
        event.target.style.cursor = "default";
        
        activeChoose.style.cursor = "default";
        
        activeChoose.removeAttribute("onclick");
        
        event.target.removeAttribute("onclick");
        
    } else {
        
        inCorrectAudio()
        
        event.target.textContent = activeChoose.textContent;
        
        let wrongImg = `<img src="./img/wrong.png" width="25" class="float-right pt-3">`;
        
        event.target.innerHTML += wrongImg;
        
        setTimeout(function() {
            
            var answerPlace = document.querySelectorAll("section .basket .answers span");
            
            for (let one of answerPlace){
                
                if (correctAnswers.includes(one.textContent)){
                
                } else {
                    
                    one.textContent = "";
                }
            };
            
        }, 500);
    };
}

function seeAnswer() {
    
    var chooses = document.querySelectorAll("section .choose-box .choose span");
    
    resetValue();
    
    mainLoop:
    
    for (let one of chooses) {
        
        if (correctAnswers.includes(one.textContent)) {
            
            var answerPlace = document.querySelectorAll("section .basket .answers span");
            
            childLoop:

            for (let item of answerPlace){

                if (correctAnswers.includes(item.textContent)) {
                    
                    continue ;

                } else {

                    item.textContent = one.textContent;

                    let correctImg = `<img src="./img/right.png" width="25" class="float-right pt-3">`;

                    item.innerHTML += correctImg;

                    item.style.cursor = "default";

                    item.removeAttribute("onclick");
                    
                    one.classList.add("fade");

                    break childLoop;
                }
            };
            
        } else {
            
            continue ;
        }
    }
}

function resetValue() {
    
    var answerPlace = document.querySelectorAll("section .basket .answers span");
    
    var chooses = document.querySelectorAll("section .choose-box .choose span");
    
    for(let one of answerPlace) {
        
        one.textContent = "";
        
        one.style.cursor = "pointer";
        
        one.setAttribute("onclick", "answer(event)");
    }
    
    for(let item of chooses) {
        
        item.classList.remove("fade", "active");
        
        item.style.cursor = "pointer";
        
        item.setAttribute("onclick", "choose(event)");
    }
}

function correctAudio() {
    
    document.getElementById("correct").play();
}
function inCorrectAudio() {
    
    document.getElementById("incorrect").play();
}












