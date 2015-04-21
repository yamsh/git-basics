$(document).ready(function(){  

	$.getJSON('elipeli.json', function(data){
		var output = "<ul>";
		//var output2 = "<ul>";
		//var output3 = "<ul>";
		

			//console.log(data);
			console.log(_.indexBy(data, 'CategoryName'));
			var category = _.indexBy(data, 'CategoryName');
			$('#content2').html(category);
			


	});	

});


//$.each(data, function(key, val){
				/*output += '<li>' + val.CategoryName +'</li>';*/
				
				//console.log(val.CategoryName);
				//console.log(val);

				

				//console.log(data[0].CategoryName);

				/*var arr = [];
				arr.push(val.CategoryName)
				arrn = arr.toString(arr);
				console.log(arrn);*/

			//})


	/*$.getJSON('data.json', function(data){
		var output = "<ul>";
			$.each(data, function(key, val){
				output += '<li>' + val.name +'</li>';
			})
		output += "</ul>";
		$('#content').append(output);
	});*/