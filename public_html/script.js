





$("document").ready(function(){
    $(".yeah").css("background-color", "purple");
    
    $('#superHumans').accordion({header: "h3"});
     $('#superHumans').css('width', '400px');
     
    $('h3').css('background', 'cyan');
    
    $('.2').css({'visability': 'hidden', 'position': 'absolute'});
    
    $('div:last p:nth-child(3)').css('background-color', 'pink');
    
    $("h2").bind('mouseover', mouseOverMe).bind ('mouseout', mouseOutMe);
    
    $('h1').bind('click', mouseClick);
    
    $('p').bind('mouseover', mouseOverMe());
    
    $('#replaceWText').bind('click', replaceWText);
    
    $('#randPara').bind('click', addAPara);
    
    $('#removePara').bind('click', removePara);
    
    $('#show').bind('visability', 'hidden');
    
    $('#hide').bind('click', hideThePage);
    
    $('#show').bind('click', showThePage);
    
    
});

function hideThePage() {
    $('#show').css('visability', 'visable');
    $('#div').hide('slide', {}, 2500);
    $('#show').show('fold', {}, 2500);
}

function showThePage() {
    $('div').show('fold', {}, 2500);
    $('#show').hide('puff', {}, 2500);
}

function removeAPara() {
    $('#randPara p:last').remove();
}

function addAPara() {
    $('#randPara').append('<p>ADDED</p>');
}

function replaceWText() {
    $('#randPara').html('<h1>Danny loves Twilight</h1>');
}

function mouseOverMe() {
    $('h2').html("this is easy");
}

function mouseOutMe() {
    $('h1').html('This will work');
}

function mouseClick() {
    $('p').html('workpls');
}