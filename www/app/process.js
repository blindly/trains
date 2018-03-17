/*
function getTrainData(){
  var url = "http://tmp.fivecat.xyz/api/collections/get/trains?token=757400b31e2aa4b13bad134c86c89a";
  $.get( url, function( data ) {
    trainData = data.entries[0];
  })
  .done( function() {
    return trainData;
  });
}
*/

jQuery.extend({
    getApiData: function(url) {
        var result = null;
        $.ajax({
            url: url,
            type: 'get',
            dataType: 'json',
            async: false,
            success: function(data) {
                result = data.entries;
            }
        });
       return result;
    }
});