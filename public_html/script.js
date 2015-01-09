





$("document").ready(function(){
    $("h1, p").css("background-color", "purple");
    
    $("h2").bind('mouseover', mouseOverMe).bind ('mouseout', mouseOutMe);
    
    $('h1').bind('click', mouseClick);
    
    $('p').bind('mouseover', mouseOverMe());
    
    
});

function mouseOverMe() {
    $('h2').html("this is easy");
}

function mouseOutMe() {
    $('h1').html('This will work');
}

function mouseClick() {
    $('p').html('workpls');
}