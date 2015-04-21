$(document).ready(function(){  


	$.getJSON('elipeli.json', function(data){
		var output = "<ul>";
		//var output2 = "<ul>";
		//var output3 = "<ul>";
		

			function unique(arr) {
				  var obj = {};
				  var result = [];
				 
				  nextInput:
				  for(var i=0; i<arr.length; i++) {
				    var str = arr[i].CategoryName;                      // для каждого элемента
				    for(var j=0; j<result.length; j++) {   // ищем, был ли он уже?
				      if (result[j].CategoryName == str) continue nextInput; // если да, то следующий
				    }
				    result.push(str);
				  }
				  console.log(result);
				  return result;
				  
				}

				data2 = unique(data); // Получаем индексированный массив имен категорий

				function unique2(arr) {

				  var obj = {};
				  var result = [];
				 
				  nextInput:
				  for(var i=0; i<arr.length; i++) {
				    var str = arr[i];                      // для каждого элемента
				    for(var j=0; j<result.length; j++) {   // ищем, был ли он уже?
				      if (result[j] == str) continue nextInput; // если да, то следующий
				    }
				    result.push(str);
				  }
				  
				  return result;
				}


				data3 = unique2(data2); // Получаем индексированный массив уникальных имен категорий
				
				
					//var categ = [];
				for(i = 0; i < data3.length; i++){
					
					var str = data3[i];
					//console.log(str);
					output += '<li class=menu>' + '<a href=' + str + '>' +   str + '</a>' + '</li>';
					//output2 += '<li class=menu2>' +  str + '</a>' + '</li>';
					
				}

			
		output += "</ul>";
		//output2 += "</ul>";
		$('#content').append(output);


		//$('#content2').append(output2);

		

		$(document).on( "click", ".menu", function(event) {
			event.preventDefault();
			//window.location.hash = $('.menu').attr('href');
			var output4 = "<ul>";
			
			var element = $(this).text();
			var hash = $(this).text();
			window.location.hash = hash;


			function categorize(arr){
				var result = [];

				nextInput:
				for(var i=0; i<arr.length; i++) {
				    var str = arr[i];                      // для каждого элемента
				    if(str.CategoryName == element) {
				    	result.push(str)
				    	
				    }  // {console.log(result)}; // если да, то следующий
				}
				return result;				
			}

			
				//console.log(data);
				data4 = categorize(data);
			    for(j = 0; j < data4.length; j++){
			    	var str2 = data4[j];
			    	//console.log(str2);
			    	output4 += '<li class=menu3>' + '<h2>' + str2.CourseName + '</h2>' + '</li>';
			    	//output4 += '<li class=menu3>' +  str2.CategoryName + '</li>';
			    }

			    output4 += "</ul>";
			    
			    //console.log(output4);

				$('#content2').html(output4);					  	

		});	

		
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