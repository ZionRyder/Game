var Player, playerwalk, playerimage, friendlyBase, enemyBase, friendlyBaseImg, enemyBaseImg, Enemy1, enemybasecorner1, enemybasecorner2, enemybasecorner3, enemybasecorner4;

function preload(){
    playerwalk = loadAnimation("Playerwalk2.png","Playerwalk3.png","Player.png");
    playerimage = loadImage("Player.png");
    friendlyBaseImg = loadImage("FriendlyCastle.png");
    enemyBaseImg = loadImage("EnemyCastle.png");
}

function setup(){
    createCanvas(displayWidth, displayHeight);
    Player = createSprite(displayWidth/2, displayHeight/2 ,100,100);
    Player.addImage("a", playerimage);
    Player.addAnimation("e", playerwalk);
    friendlyBase = createSprite(displayWidth/4, displayHeight/2, 100, 100);
    friendlyBase.addImage(friendlyBaseImg);
    enemyBase = createSprite(displayWidth/4 + 1200, displayHeight/2, 100, 100);
    enemyBase.addImage(enemyBaseImg);
    friendlyBase.scale = 0.5
    enemyBase.scale = 0.5
    Enemy1 = createSprite(displayWidth/4 +1200, displayHeight/2, 100, 100);
    Enemy1.addImage("I drew the image", playerimage);
    enemybasecorner1 = createSprite(displayWidth/4 +1199, displayHeight/2+200, 50, 50);
    enemybasecorner2 = createSprite(displayWidth/4 +1199, displayHeight/2+200, 50, 50);
    enemybasecorner3 = createSprite(displayWidth/4 +1400, displayHeight/2+1, 50, 50);
    enemybasecorner4 = createSprite(displayWidth/4 +1000, displayHeight/2+1, 50, 50);

}

function draw(){
    background("white");
    Enemy1.y=Enemy1.y+10 //it waits 2 seconds at each stop, 4 stops, for each corner.
    if(Enemy1.isTouching())
    camera.position.x = Player.x
    camera.position.y = Player.y
    if(keyDown("w")){
        Player.y=Player.y-10;
        Player.changeAnimation("e", playerwalk);
    }
    if(keyDown("a")){
        Player.x=Player.x-10;
        Player.changeAnimation("e", playerwalk);
    }
    if(keyDown("s")){
        Player.y=Player.y+10;
        Player.changeAnimation("e", playerwalk);
    }
    if(keyDown("d")){
        Player.x=Player.x+10;
        Player.changeAnimation("e", playerwalk);
    }
    if(keyWentUp("w")){
        Player.y=Player.y-10;
        Player.changeAnimation("a", playerimage);
    }
    if(keyWentUp("a")){
        Player.x=Player.x-10;
        Player.changeAnimation("a", playerimage);
    }
    if(keyWentUp("s")){
        Player.y=Player.y+10;
        Player.changeImage("a", playerimage);
    }
    if(keyWentUp("d")){
        Player.x=Player.x+10;
        Player.changeAnimation("a", playerimage);
    }
    drawSprites();
}