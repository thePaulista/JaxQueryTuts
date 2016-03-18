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
  //deal with selected options depending on current page 
  if($anchor.parent().hasClass(".selected")) {
    $option.prop( 'selected', true);;
  }
                  //option's value is the href
                  $option.val($anchor.attr("href"));
                  //option's text is the text of link 
                  $option.text($anchor.text());
                  //append option to select
                  $select.append($option);
});
//bind change listener to the selected
$select.change(function() {

  //Go to 'select's location
  window.location = $select.val();
});



//modify CSS to hide links on mall width and show button and select
//also hides select and button on larger width and show's links
//deal with selected options depending on current page
