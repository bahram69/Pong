// Deklarera variabler
var c, ctx, bollX = 100, bollY = 100, bollVX = 1, bollVY = 2;
var leftPlY = 100, rightPlY = 200;

function init(){
    // Tilldela canvas
    c = document.getElementById("duk");
    ctx = c.getContext("2d");
    
    // Kör update var 20e ms
    window.setInterval(update, 20);
}

function update(){
    // SUdda canvas
    ctx.clearRect(0, 0, c.width, c.height);
    // Måla boll
    ctx.beginPath();
    ctx.arc(bollX, bollY, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    // Måla paddlar
    ctx.fillRect(10, leftPlY, 20, 50);
    ctx.fillRect(370, rightPlY, 20, 50);
    
    // Flytta bollen
    bollX = bollX + bollVX;
    bollY = bollY + bollVY;
    
    // Studs mot golv
    if(bollY > 300){
        bollVY = -bollVY;
        bollY = 300;
    }
    // Studs mot tak
    if(bollY < 0){
        bollVY = -bollVY;
        bollY = 0;
    }
}

function keyDown(e){
 e.keyCode
}