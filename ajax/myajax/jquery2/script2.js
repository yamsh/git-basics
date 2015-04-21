$(document).ready(function(){              
	/*$.ajax({
			    type: "GET",
			    url: 'test.html',
				cache: false,
			    dataType : "html",
				success: function(msg){
				     alert( "Data Saved: " + msg );
				     console.log($(msg));
       		   	}
       		   	
       		    
			});
	alert($('head title').html());

	*/
	$.get("test.html").success(function(data) { console.log( data) });
});
