	mybutton.onclick = callOtherDomain;

	var invocation = new XMLHttpRequest();
	var url = 'http://bar.other/resources/credentialed-content/';
    
	function callOtherDomain(){
	  if(invocation) {
	    invocation.open('GET', url, true);
	    invocation.withCredentials = true;
	    invocation.onreadystatechange = handler;
	    invocation.send(); 
	  }