$(document).ready(function() {
  $('.awesomeness_teller').on('click', function() {
  	 var buttonText = $(this).data("heading")
  	 console.log(buttonText)
  	 $('#awesomeness_holder').text(buttonText)
  });
  $(".meal_teller").on("click", function(){
  	//on click, we get the .sample to be called 
  	var meal = mealArray[Math.floor(Math.random()* mealArray.length)];
  	$("#meal_holder").text(meal); 
  }); 
  $(".skill_teller").on("click", function(){
  	var url = window.location.pathname.split('/');
  	console.log(url[2]);
  	 $("#skill_holder").text(url[2]); 
  });
  // What other events do you need to bind to make the other pages work?
});


// var pathArray = window.location.pathname.split( '/' );


// <% @meals %> 
// <%= @meals.sample  %>