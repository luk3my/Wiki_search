//Initialise JQuery
$(document).ready(function(){
  //When search is clicked run code  
  $('#search').click(function(){
    //Gets search input 
    var searchTerm= $('#searchTerm').val();
    //API URL with searchterm
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm + "&format=json&callback=?";
    
    $.ajax({
      type:"GET",
      url:url,
      async:false,
      dataType:"json",
      success: function(data){
      // get heading console.log(data[1][0]); 
      // get description console.log(data[2][0]);
      // get link console.log(data[3][0]);
        $('#output').html('');
      for(var i=0;i<data[1].length;i++){
        $('#output').prepend("<li><a href="+ data[3][i] + ">" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>");
      }
      },
      error: function(errorMessage){
        alert("Error");
      }
      
    });
    
  });

});