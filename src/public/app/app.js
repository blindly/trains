document.addEventListener('DOMContentLoaded', function() {
  
  netlifyIdentity.on("login", user => console.log(user));
  var user = $.getCurrentUser();
  console.log( user );
  
  var trainsUrl = "http://tmp.fivecat.xyz/api/collections/get/trains?token=757400b31e2aa4b13bad134c86c89a";
  var tripsUrl = "http://tmp.fivecat.xyz/api/collections/get/trips?token=757400b31e2aa4b13bad134c86c89a";
  var trainData = $.getApiData(trainsUrl);
  var tripsData = $.getApiData(tripsUrl);
  var myTrain = new Train( trainData[0] );

  console.log(myTrain);

  tripsData.forEach( function(tripData) {
    var myTrip = new Trip( myTrain, tripData );

    console.log( myTrip );

    var arrival = myTrip.arrival;
    var customDiv = $("<div/>")
    customDiv.countdown(arrival, function(event) {
      $(this).text(event.strftime('%D days %H:%M:%S'));
    });

    $("#time").append( customDiv );

  });
  
}, false);