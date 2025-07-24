var score= 0;
var timer=61;
var hitrn=0;


function makeBubble(){
var clutter="";
for(var i=1; i<200 ; i++){
    var a= Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${a}</div>` ;
}

document.querySelector("#bottom").innerHTML = clutter;

}

function getNewhit(){
    hitrn =Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent= hitrn;
}

function runTimer(){
    var timerint = setInterval(function(){
        if(timer>0){
        timer-- ;
        document.querySelector('#Timerval').textContent= timer;
        }
        else{
            clearInterval(timerint);
            
            //gameover sound
            var gameOverSound = document.getElementById("gameOverSound");
            gameOverSound.currentTime = 0; 
            gameOverSound.play(); 

            document.querySelector("#bottom").innerHTML = `
            <h1>Game Over!!<h1> 
           <div class = "sc" <p>Your final score: ${score}</p> </div>` ;
        }
    }, 1000);
}

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent= score;
}

document.querySelector("#bottom").addEventListener("click",function(details) {
    var clickedNumber = Number(details.target.textContent);  //convert string into number using Number keyword
    if(clickedNumber === hitrn){
        increaseScore();
        makeBubble();
        getNewhit();
    }

    // Play the click sound
    var clickSound = document.getElementById("clickSound");
    clickSound.currentTime = 0; 
    clickSound.play(); 
    
}); 
runTimer(); 
makeBubble();
getNewhit();
