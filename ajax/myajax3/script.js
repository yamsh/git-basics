function getXmlHttp() {
    var xmlhttp;
    try {
      xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
    try {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (E) {
      xmlhttp = false;
    }
    }
    if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
      xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp;
  }
  function send() {
    var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
    xmlhttp.open('POST', 'test.php', true); // Открываем асинхронное соединение
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
    xmlhttp.send("site=" + encodeURIComponent("http://back.lexplate.ru/Account/Login.aspx")); // Отправляем POST-запрос
    xmlhttp.onreadystatechange = function() { // Ждём ответа от сервера
      if (xmlhttp.readyState == 4) { // Ответ пришёл
        if(xmlhttp.status == 200) { // Сервер вернул код 200 (что хорошо)
          xhr = xmlhttp.responseText;
          document.getElementById("yandex").innerHTML = xhr; // Выводим ответ сервера
          viewstate = document.getElementById("__VIEWSTATE").value;
          viewstategenerator = document.getElementById("__VIEWSTATEGENERATOR").value;
          eventvalidation = document.getElementById("__EVENTVALIDATION").value;
          alert(viewstate);
          alert(viewstategenerator);
          alert(eventvalidation);

            var xmlhttp2 = getXmlHttp(); // Создаём объект XMLHTTP
            xmlhttp2.open('POST', 'test2.php', true); // Открываем асинхронное соединение
            xmlhttp2.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
            var params = 'viewstate=' + encodeURIComponent(viewstate) + '&viewstategenerator=' + encodeURIComponent(viewstategenerator) + '&eventvalidation=' + encodeURIComponent(eventvalidation);
            xmlhttp2.send(params); // Отправляем POST-запрос
            xmlhttp.onreadystatechange = function() { // Ждём ответа от сервера
              if (xmlhttp.readyState == 4) { // Ответ пришёл
                if(xmlhttp.status == 200) { // Сервер вернул код 200 (что хорошо)
                  xhr2 = xmlhttp2.responseText;
                  document.getElementById("yandex2").innerHTML = xhr2; // Выводим ответ сервера

                  /*$.ajax({
                  type: "GET",
                  url: 'http://back.lexplate.ru/Handlers/Query.ashx?type=query&name=Base.MenuForSite',
                  cache: false,
                  dataType: "jsonp",
                  crossDomain: true,
                  withCridentials: true,
                  username: "InetUser",
                  password: "InetUser123",
                  success: function(data){
                     alert( "Data Saved: " + data );
                      }

                  });*/

                  /*var xmlhttp3 = getXmlHttp();
                  xmlhttp3.open('GET', 'http://back.lexplate.ru/Handlers/Query.ashx?type=query&name=Base.MenuForSite', true);
                  xmlhttp3.setRequestHeader('Content-Type', 'application/json'); 
                  xmlhttp3.send(null);
                  xmlhttp.onreadystatechange = function() { // Ждём ответа от сервера
                    if (xmlhttp.readyState == 4) { // Ответ пришёл
                      if(xmlhttp.status == 200) { // Сервер вернул код 200 (что хорошо)
                        xhr3 = xmlhttp3.responseText;
                        console.log(xhr3);
                      }
                    }
                  };*/

                }
              }
            };

        }
      }
    };

    

    /*var xmlhttp2 = getXmlHttp();
    xmlhttp2.open('POST', 'test.php', true); // Открываем асинхронное соединение
    xmlhttp2.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
    xmlhttp2.send(viewstate)); // Отправляем POST-запрос
    xmlhttp.onreadystatechange = function() { // Ждём ответа от сервера
      if (xmlhttp.readyState == 4) { // Ответ пришёл
        if(xmlhttp.status == 200) { // Сервер вернул код 200 (что хорошо)
          xhr = xmlhttp.responseText;
          document.getElementById("yandex").innerHTML = xhr; // Выводим ответ сервера
          viewstate = document.getElementById("__VIEWSTATE").value;
          viewstategenerator = document.getElementById("__VIEWSTATEGENERATOR").value;
          eventvalidation = document.getElementById("__EVENTVALIDATION").value;
          alert(viewstate);
          alert(viewstategenerator);
          alert(eventvalidation);
        }
      }
    };*/
  }