/** The Game Rules **/
$(function(){
    
    var colors = $('#colors li');
    var mainColor = $('#main');
    var start = $('#start');
    var gameState = 'waiting';
    var gameSequence = new Array();
    var level = 1;
    var t;
    var flashNo;
    var clickedNo;
    var on; 
    var setupLightSequence = function() {
        var randomNum = Math.floor(Math.random() * 4);
        gameSequence[level-1] = randomNum;
        showLigthSequence();
    };
    var ligthOn = function(no) {
        colors.eq(gameSequence[no]).addClass('on');
    };
    var lightOff = function(){
        colors.removeClass('on');
    };
    var showLigthSequence = function() {
        lightOff();

        if(flashNo < level){
             on = setTimeout(function() {
                var off = setTimeout(function(){
                    showLigthSequence();
                    flashNo++;
                },500);
                ligthOn(flashNo);
            },500);
        }
        else {
            gameState = 'playing';
            $('body').addClass('playing');
            start.text('Your turn...');
            clearTimeout(on);
        }
    };
    
    colors.click(function() {
        $(this).fadeOut(500, function() {
            // Fade in the clicked square after fade out completes
            $(this).fadeIn(500);
        });
       

        if(gameState == 'playing'){
            var selectedSquare = $(this).index();
            var selectedColor = $(this).css('background-color');
            
            if(gameSequence[clickedNo] == selectedSquare){
                if(clickedNo == level-1){
                    gameState = 'waiting';
                    $('body').removeClass('playing');
                    start.text('WELL DONE. Go to the next level >');
                    level++;
                }

                ligthOn(clickedNo);
                var off = setTimeout(function(){
                    lightOff();
                    clickedNo++;
                },200);
            }
            else {
                gameState = 'waiting';
                $('body').removeClass('playing');
                start.text('GAME OVER. Try again?');
                $('body').removeClass('playing').addClass('game-over');
                gameSequence = new Array();

                level =1
            }
            
        }
    });

    var init = function() {
        $('#level').text('Level ' + level);
        flashNo = 0;
        clickedNo = 0;
        $(this).text('Simon says...');
        $('body').removeClass('game-over');
        $('li').animate({ left: 0 }, 1000 * (100 + 1)); 
        setupLightSequence();
    }
    start.click(init);

  

});