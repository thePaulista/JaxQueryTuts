//Problem: It look gross in smaller browser widths and small devices
////Solution: To hide the text links and swap them out with a more appropriate navigation

//create a select and append to menu
var $select = $(" <select></select>");

//cycle over menu index
$("#menu").append($select);
$("#menu a").each(function()) {
  vor $anchor = $(this);
  //create an option
  var $option = $("<option></optiona>);
                  //option's value is the href
                  $option.val($anchor.attr("href"));
                  //option's text is the text of link 
                  $option.text($anchor.text());
                  //append option to select
                  $select.append($option);

});
//Create button 
var $button = $("<button> Go</button> ");
$("#menu").append($button);
//Bind click to button
$button.click(function() {
  //Go to 'select's location
  window.location = $select.val();
});
