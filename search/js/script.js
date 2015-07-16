$(document).ready(function(){
	
	var rootUrl = 'http://jsonplaceholder.typicode.com';
	var searchInput = $("#searchInput");
	
	searchInput.autocomplete({
		source: function( request, response ) {
			$.ajax({
				  url: rootUrl + '/users',
				  method: 'GET',
				  datatype: 'JSON',
				  data:  {
		            q: request.term
		          },
		          success: function( data ) {
		        	  var matches = $.map( data, function(v, i) {
		        	      if (v.name.toUpperCase().indexOf(request.term.toUpperCase()) >= 0 ) {
		        	        return v.name;
		        	      }
		        	  });
		        	    response(matches);
		            
		          }
			});
		},
		minLength: 1,
		select: function(event, ui){
			
			var today = new Date();
			var hours = today.getHours();
			var minutes = today.getMinutes();
			
			$('.searchResults').append("<div class='searchResultsWrapper'><p class='searchResult'>" + ui.item.value + " - " + $.datepicker.formatDate('yy/mm/dd', new Date()) + " " + hours + ":" + minutes + "</p></div>");
			
			$(this).val(''); 
			return false; 
		}
	});
});


