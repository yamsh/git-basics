$(document).ready(function(){              
	$.ajax({
			    type: "GET",
			    url: 'http://back.lexplate.ru/Handlers/Query.ashx?type=query&name=Base.MenuForSite',
				cache: false,
			    dataType: "jsonp",
			    crossDomain: true,
			    withCridentials: true,
			    username: "InetUser",
			    password: "InetUser123",
			    /*data: {
			    	'__VIEWSTATE' : jQuery("#__VIEWSTATE").val(),
			    	'__VIEWSTATEGENERATOR' : jQuery("#__VIEWSTATEGENERATOR").val(),
			    	'__EVENTVALIDATION' : jQuery("#__EVENTVALIDATION").val(),
			    	'Username' : "InetUser",
					'Password' : "InetUser123",
					'UserLogin' : "Войти"
			    },*/
				success: function(data){
				     alert( "Data Saved: " + data );
       		    }

			});
});
