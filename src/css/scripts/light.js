var $overlay = $('<div id = "overlay"> </div>');
var $image = $('<img id="oImage">');
var $caption = $('<p></p>')
$overlay.append($image);
$overlay.append($caption);

$("body").append($overlay);
//1.click capture on link
$("#gallery a").click(function(event){
    $('#gallery').addClass('animated fadeOut');
    event.preventDefault();
    var imageLocation = $(this).attr("href");
    var altLocation = $(this).attr("alt");
    $image.attr("src",imageLocation);
    $('#oImage').addClass('animated fadeIn');
    $overlay.show();
    var captionText = $(this).children("img").attr("alt");
    $caption.text(captionText);
});
$overlay.click(function(){
    $('#oImage').removeClass('animated fadeIn');
    $('#gallery').removeClass('animated fadeOut');
    $('#gallery').addClass('animated fadeIn');

    $overlay.hide();

});
    //1.1 show overlay
    //1.2 update overlay with image
    //1.3 get child alt attribute and set caption

//3. hide overlay
$('#ImageGal').addClass('animated bounceIn');
