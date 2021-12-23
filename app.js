


$(document).keydown('body', function(e){
    if (e.keyCode === 65) {
        $('div[data-key=65]').toggleClass('playing')
        $('audio[data-key=65]').get(0).play();
    }
    if(e.keyCode === 83){
        $('audio[data-key=83]').get(0).play();
    }
    if(e.keyCode === 68){
        $('audio[data-key=68]').get(0).play();
    }
    if(e.keyCode === 70){
        $('audio[data-key=70]').get(0).play();
    }
    if(e.keyCode === 71){
        $('audio[data-key=71]').get(0).play();
    }
    if(e.keyCode === 72){
        $('audio[data-key=72]').get(0).play();
    }
    if(e.keyCode === 74){
        $('audio[data-key=74]').get(0).play();
    }
    if(e.keyCode === 75){
        $('audio[data-key=75]').get(0).play();
    }
    if(e.keyCode === 76){
        $('audio[data-key=76]').get(0).play();
    }
})