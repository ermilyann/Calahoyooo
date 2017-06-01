var game = new Phaser.Game(800, 500, Phaser.CANVAS, 'gameDiv');

var desert;


var mainState =

    {

        preload:function()
        {
            game.load.image("bg1","img/d.jpg");
            game.load.image("bg2","img/bg11..png");
            game.load.image("bg3","img/bg22.png");
            game.load.image("bg4","img/bg33.png");
            game.load.image("bg5","img/bg44.png");
            
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

        
        },


        update: function ()
        {
            bg1.tilePosition.x -=.1;
            bg2.tilePosition.x -=.5;
            bg3.tilePosition.x -=.4;
            bg4.tilePosition.x -=.6;
            bg5.tilePosition.x -=.8;
        },
    

    }
    game.state.add("mainState",mainState);
    game.state.start("mainState");