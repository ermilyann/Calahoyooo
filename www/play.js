var game = new Phaser.Game(800, 500, Phaser.CANVAS, 'gameDiv');

var desert, player;
var bomb , button1 , jumps;
var bgAudio;
var sprite1;
var sprite2;
var cursors;
var goRight;
var goLeft;
var goUp;
var goDown;
var pasueText;
var restart;
var pause;
var scoreText;
var bestScoreText;
var keyboard;
var reset;
var pause;
var player;
var pause;
var taya;
var text;
var niceText;
var score = 0;
var tonette;
var left=false;
var right=false;
var up = false;
var down = false;
var mainState =
    {

        preload:function()
        {
            game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;

            game.load.image("bg1","img/d.jpg");
            game.load.image("bg2","img/bg11..png");
            game.load.image("bg3","img/bg22.png");
            game.load.image("bg4","img/bg33.png");
            game.load.image("bg5","img/bg44.png");
            game.load.image("me","img/ch1.png");
            game.load.spritesheet("button1","img/button1.png",115,105);
            game.load.image("jumpbutton","img/jumps.png",100,100);
            game.load.image("up", "img/btnup.png");
            game.load.image("down", "img/btndown.png");
            game.load.image("left", "img/btnleft.png");
            game.load.image("right", "img/btnright.png");
            game.load.spritesheet("aw", "img/pamitok.png",70,60);
            game.load.image("hole", "img/hole.png");
            
        },

        create:function(){
            game.stage.backgroundColor="blue";
        
           bg1= game.add.tileSprite(0,
            game.height- game.cache.getImage("bg1").height,
            game.width,
            game.cache.getImage("bg1").height,
            "bg1");


            bg2= game.add.tileSprite(0,
            game.height- game.cache.getImage("bg2").height,
            game.width,
            game.cache.getImage("bg2").height,
            "bg2");

             bg3= game.add.tileSprite(0,
            game.height- game.cache.getImage("bg3").height,
            game.width,
            game.cache.getImage("bg3").height,
            "bg3");

             bg4= game.add.tileSprite(0,
            game.height- game.cache.getImage("bg4").height,
            game.width,
            game.cache.getImage("bg4").height,
            "bg4");

             bg5= game.add.tileSprite(0,
            game.height- game.cache.getImage("bg5").height,
            game.width,
            game.cache.getImage("bg5").height,
            "bg5");

             buttonleft = game.add.button(55, 380, 'left');
        buttonleft.anchor.setTo(0.5, 0.5);
        buttonleft.events.onInputOver.add(function(){left=true;});
        buttonleft.events.onInputOut.add(function(){left=false;});
        buttonleft.events.onInputDown.add(function(){left=true;});
        buttonleft.events.onInputUp.add(function(){left=false;});
              
        buttonright = game.add.button(160, 380, 'right');
        buttonright.anchor.setTo(0.5, 0.5);
        buttonright.events.onInputOver.add(function(){right=true;});
        buttonright.events.onInputOut.add(function(){right=false;});
        buttonright.events.onInputDown.add(function(){right=true;});
        buttonright.events.onInputUp.add(function(){right=false;});

        buttonup = game.add.button(110, 340, 'up');
        buttonup.anchor.setTo(0.5, 0.5);
        buttonup.events.onInputOver.add(function(){up=true;});
        buttonup.events.onInputOut.add(function(){up=false;});
        buttonup.events.onInputDown.add(function(){up=true;});
        buttonup.events.onInputUp.add(function(){up=false;});

        buttondown = game.add.button(110, 435, 'down');
        buttondown.anchor.setTo(0.5, 0.5);
        buttondown.events.onInputOver.add(function(){down=true;});
        buttondown.events.onInputOut.add(function(){down=false;});
        buttondown.events.onInputDown.add(function(){down=true;});
        buttondown.events.onInputUp.add(function(){down=false;});

            player = game.add.sprite(250, game.world.height -400, 'aw');
            game.physics.arcade.enable(player);

        player.body.bounce.y = 0.2;
        player.body.collideWorldBounds = true;

        player.animations.add('left', [9,1, 3],10, true); 
        player.animations.add('right', [1, 3,9],10, true); 
        player.animations.add('up', [4, 5,6 ,7],10, true); 
        player.animations.add('down', [4, 5,6 ,7],10, true); 

        hole = game.add.group();
        hole.enableBody=true;
        var tonette = hole.create(350,80,"hole");
        tonette.body.immovable=true;



        button1 = game.add.button(10,20,"button1",pause);
        button1.scale.x = 1;
        button1.scale.y= 1;
        //jumpbutton = game.add.button(600,300,"jumpbutton",jump);

        keyboard = game.input.keyboard.createCursorKeys();


    },
        update: function ()
        {
            bg1.tilePosition.x -=.1;
            bg2.tilePosition.x -=.5;
            bg3.tilePosition.x -=.4;
            bg4.tilePosition.x -=.6;
            bg5.tilePosition.x -=.8;

            // if(keyboard.left.isDown){
       // player.animations.play('walk-left');
        //player.body.velocity.x = -400;
    //}
    //else if(keyboard.right.isDown){
      //  player.animations.play('walk-right');
        //player.body.velocity.x = 400;
    //}
    //else {
      //  player.body.velocity.x = 0;
        //player.animations.stop();
    //}

    //if(keyboard.up.isDown && player.body.touching.down){
      //  player.body.velocity.y = -300;
    //}
     if (left){
        player.body.velocity.x=-120;
        player.animations.play('left');
        }

    else if (right){
        player.body.velocity.x=120;
        player.animations.play('right');
        } 
    else {
        player.body.velocity.x=0;
        player.frame = 1;
        }
    if (game.input.currentPointers == 0 && !game.input.activePointer.isMouse){ fire=false; right=false; left=false; duck=false; jump=false;} //this 

    if (up){   
        player.body.velocity.y=-120;
        player.animations.play('up');
        }
    else if (down){
        player.body.velocity.y=120;
        player.animations.play('down');
        } 
    if (game.input.currentPointers == 0 && !game.input.activePointer.isMouse){ fire=false; up=false; down=false; duck=false; jump=false;} //this 
        },

    }
    
             function pause(){
                button1.frame =0;
              {game._paused = true;}
                button1.frame =1;
               // continueText.text = "Tap to continue!"
               // continueText.visible = true;
                game.input.onTap.addOnce(tuloy,game);
              }

              function tuloy(){
              {game._paused = false;
              //continueText.visible = false;
              }
              button1.frame =0;
              }
            // function jump(){
             //jumpbutton.frame = 0;
            //if(player.body.touching.down){
              //{player.animations.play("jump");
            //player.body.velocity.y = -600;
            //}
              //setTimeout(function(){
              //jumpbutton.frame=1;
            //},300)

//}
          //me.body.gravity.x = -50;


    game.state.add("mainState",mainState);
    game.state.start("mainState");