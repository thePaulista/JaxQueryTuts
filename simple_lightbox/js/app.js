//problem: user when clicking on image goes to a dead end
//solution: create an overlay with the large image - Lightbox 

//1.Capture the click event on a link to an image 
var $overlay = $('<div id="overlay"></div>')
var $image = $("<img>");
var $caption = $("<p></p>");
//an image to overlay
$overlay.append($image);
//add overlay
$("body").append($overlay)
//a caption to overlay
$overlay.append();
//capture the click event on a link
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  //update the overlay with the image linked
  $image.attr("src", imageLocation);
  //show the overlay
  $overlay.show();

  //Get child's alt attribute and set caption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});
//when overlay is clicked
$overlay.click(function() {
  //hide the overlay
  $overlay.hide();
});
