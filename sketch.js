var hunter,hunterAnimation;
var zombie,zombieImage;

function preload(){
    
hunterImage1 = loadImage("Images/hunter1.png")
hunterImage2 = loadImage("Images/hunter2.png")
zombieImage = loadAnimation("Images/zombie1.png","Images/zombie2.png","Images/zombie3.png","Images/zombie4.png")
backgroundImage = loadImage("Images/background.jpg");

}

function setup(){
createCanvas(1580,850)
    hunter=createSprite(200,200)
hunter.addImage("movingHunter",hunterImage1);
hunter.scale=0.75

zombie=createSprite(400,400)
zombie.addAnimation("movingZombie",zombieImage);
zombie.scale=1.5
}
function draw(){
background(backgroundImage)

//zombie moving
    if(keyDown ("UP_ARROW")){
    zombie.y-=5;}

    if(keyDown ("DOWN_ARROW")){
    zombie.y+=5;}

    if(keyDown ("LEFT_ARROW")){
    zombie.x-=5;}

    if(keyDown ("RIGHT_ARROW")){
    zombie.x+=5;
                        
}

drawSprites();
}