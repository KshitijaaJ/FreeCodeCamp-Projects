// API used - https://random-quote-generator.herokuapp.com/api/quotes
// Used jQuery as CDN -- https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
$(document).ready(function(){
  $("#nextQuote").on("click", function(){ // to be executed when the user clicks the button with id as #nextQuote
    var quoteIndex = Math.floor(Math.random() * 80); //gets a random number to be used as index for the random quote
      $.getJSON("hhttps://gist.githubusercontent.com/KshitijaaJ/ce98c45e5885ff9c9c7876ee0b6a7b3f/raw/21964d0c26407a1f7f8f209ec6a93dda34bf2ff2/Quotes.json", function(json){ //gets the json file as the variable json
        $(".quote-text").html(json[quoteIndex].quote);
        $(".author").html(json[quoteIndex].author);
      });
  }); 
      $(".tweet-quote").on("click", function(){
        var textToTweet = document.getElementById("quoteText").textContent;
        var linkTweet = "http://twitter.com/home?status= " + encodeURIComponent(textToTweet);
        window.open(linkTweet,'_blank');
      });   });