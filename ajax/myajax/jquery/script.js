$(document).ready(function(){  


	$.getJSON('elipeli.json', function(data){
            var output = "<ul>";
            //var output2 = "<ul>";
           
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
				  //console.log(result);
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
                output += '<li class=menu>' + '<a href=' + '#' + '>' +   str + '</a>' + '</li>';
                //output2 += '<li class=menu2>' +  str + '</a>' + '</li>';

            }

		    output += "</ul>";
		    //output2 += "</ul>";
		    $('#content').append(output); // Вставляем полученные имена блюд в div контент

		    //$('#content2').append(output2);

		$(document).on( "click", ".menu", function(event) { // при клике на каждый элемент меню
			event.preventDefault();
			//window.location.hash = $('.menu').attr('href');
			var output3 = "<ul>";

			var element = $(this).text(); // получаем название элемента, по которому кликаем
			var hash = $(this).text();
			window.location.hash = hash;

			function categorize(arr){
				var result = [];

				nextInput:
				for(var i=0; i<arr.length; i++) {
				    var str = arr[i];                      // для каждого элемента
				    if(str.CategoryName == element) { // сравниваем название элемента с категорией и выводим категорию
				    	result.push(str)

				    }  // {console.log(result)}; // если да, то следующий
				}
				return result;
			}


				//console.log(data);
            data4 = categorize(data); // получаем только те объекты(блюда), которые принадлежат категории
            for(j = 0; j < data4.length; j++){
                var str2 = data4[j];
                //console.log(str2);
                output3 += '<li class=menu3>' + '<h2>' + str2.CourseName + '</h2>' + '</li>';
                //output3 += '<li class=menu3>' +  str2.CategoryName + '</li>';
            }

            output3 += "</ul>";

            //console.log(output3);

            $('#content2').html(output3); // Вставляем блюда, относящиеся к данной категории в div контент2

		});

		$(window).hashchange( function(){ // функция для отслеживания хэша в строке браузера

				var output4 = [];

				function categorize2(arr){
					var result = [];

					nextInput:
					for(var i=0; i<arr.length; i++) {
					    var str = arr[i];
					    var url = document.location.toString(); // берем хеш из строки браузера и преобразуем в строку
	    				var a = url.split('#')[1]; // убираем знак # из строки

					    console.log(a);                   // для каждого элемента
					    if(a == str.CategoryName) { // если строка совпадает с категорией блюда, то выводим все блюда, относящиеся к категории
					    	result.push(str)

					    }  // {console.log(result)}; // если да, то следующий
					}
					return result;
				}


				//console.log(data);
				data5 = categorize2(data); // получаем блюда, относяшиеся к категории, по которой мы кликнули
			    for(j = 0; j < data5.length; j++){
			    	var str2 = data5[j];
			    	//console.log(str2);
			    	output4 += '<li class=menu3>' + '<h2>' + str2.CourseName + '</h2>' + '</li>';
			    	//output3 += '<li class=menu3>' +  str2.CategoryName + '</li>';
			    }

			    output4 += "</ul>";

			    //console.log(output3);

				$('#content2').html(output4); // Вставляем полученные блюда в div контент2

		});

		// Since the event is only triggered when the hash changes, we need to trigger

		// the event now, to handle the hash the page may have loaded with.

		$(window).hashchange(); // Вызываем функцию для отслеживания хэша в браузерерной строке

	});	

});