	var mybutton = document.getElementById("loadbutton");
	mybutton.onclick = loadAJAX;

	function loadAJAX(){
			var request;
			var url = 'http://aruner.net/resources/access-control-with-credentials/';
		if (window.XMLHttpRequest) {
			request = new XMLHttpRequest;
		} else {
			request = new ActiveXObject("Microsoft.XMLHTTP");
		}

		request.open('GET', 'http://google.com');
		request.onreadystatechange = function(){
			if ((request.readyState === 4) && (request.status === 200)){
				/*console.log(request.responseXML.getElementsByTagName('name'));
				var items = request.responseXML.getElementsByTagName('name');
				var output = "<ul>";
					for(var i = 0; i < items.length; i++){
					output += '<li>' + items[i].firstChild.nodeValue + '</li>';
				}
				output += "</ul>";
				document.getElementById("content").innerHTML = output;
				*/

				/*var items = JSON.parse(request.responseText);
				var output = '<ul>';
					for (var key in items){
						output += "<li>" + items[key].name + "</li>";
					}
				output += '</ul>';
				document.getElementById("content").innerHTML = output;*/
				
				request.setRequestHeader("Access-Control-Allow-Origin:", "http://mysite.local");
				console.log(request.responseText);
			}

		}
		request.send();
	}

	
	var invocation = new XMLHttpRequest();
    var url = 'http://aruner.net/resources/access-control-with-credentials/';
    var invocationHistoryText;

    
    function callOtherDomain(){
        if(invocation)
        {
            invocation.open('GET', url, true);
            invocation.withCredentials = "true";
            invocation.onreadystatechange = handler;
            invocation.send(); 
        }
        else
        {
            invocationHistoryText = "Whoops -- Sorry.  No Invocation TookPlace At All or Errors Took Place";
            var textNode = document.createTextNode(invocationHistoryText);
            var textDiv = document.getElementById("textDiv");
            textDiv.appendChild(textNode);
        }
        
    }
    function handler(evtXHR)
    {
        if (invocation.readyState == 4)
        {
                if (invocation.status == 200)
                {
                    var response = invocation.responseText;
                    invocationHistoryText = document.createTextNode(response);
                    var textDiv = document.getElementById("textDiv");
                    textDiv.appendChild(invocationHistoryText);
                    
                }
                else
                    alert("Invocation Errors Occured" + invocation.readyState);
        }
        else
        {
            dump("currently the application is at" + invocation.readyState);
        }
    }