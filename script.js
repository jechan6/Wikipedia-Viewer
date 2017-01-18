$(document).ready(function() {

  $("#subSearch").submit(function(e) {
    var search = document.getElementById('search').value;
   
    e.preventDefault();
    //emptying previous content inside result
    $("#result").html(""); 
    //grab wikipedia api
    $.ajax({
      url: 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=' + search + "&callback=?",
      dataType: 'jsonp',
      type: 'GET',
      success: function(data) {
       
        
        var res = data.query.search;
        //for each search result, append the title and snippet to #result
        for(var i = 0; i<res.length;i++) {
          
          var html = "<a href='https://en.wikipedia.org/wiki/"
+ res[i].title +"'target='_blank' style=\"text-decoration:none;\"><h2>"  + res[i].title + "</a></h2>";
          html += "<p>" + res[i].snippet + "</p>";
          $("#result").append(html);
        }
        
      }
   

    });
  });
});