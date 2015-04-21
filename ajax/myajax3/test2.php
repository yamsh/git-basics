<?php

  echo $viewstate = $_POST['viewstate'] . "</br>";
  echo $viewstategenerator = $_POST['viewstategenerator'] . "</br>";
  echo $eventvalidation = $_POST['eventvalidation'] . "</br>";

  /*$url = 'http://back.lexplate.ru/Account/Login.aspx';
  $data = array('__VIEWSTATE' => urlencode($viewstate), '__VIEWSTATEGENERATOR' => urlencode($viewstategenerator), '__EVENTVALIDATION' => urlencode($eventvalidation), 'Username' => urlencode('InetUser'), 'Password' => urlencode('InetUser123'), 'UserLogin' => urlencode('Войти'));

// use key 'http' even if you send the request to https://...
$options = array(
    'http' => array(
        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
        'method'  => 'POST',
        'content' => http_build_query($data),
    ),
);
$context  = stream_context_create($options);
$result = file_get_contents($url, false, $context);

echo $result;*/

/*echo file_get_contents('http://back.lexplate.ru/Handlers/Query.ashx?type=query&name=Base.MenuForSite');*/


$url = 'http://back.lexplate.ru/Account/Login.aspx';
$fields = array(
            '__VIEWSTATE'=>urlencode($viewstate),
            '__VIEWSTATEGENERATOR'=>urlencode($viewstategenerator),
            '__EVENTVALIDATION'=>urlencode($eventvalidation),
            'Username' => urlencode('InetUser'),
            'Password' => urlencode('InetUser123'),
            'UserLogin' => urlencode('Войти')
        );

//url-ify the data for the POST
foreach($fields as $key=>$value) { $fields_string .= $key.'='.$value.'&'; }
rtrim($fields_string,'&');

//open connection
$ch = curl_init();

//set the url, number of POST vars, POST data
curl_setopt($ch,CURLOPT_URL,$url);
curl_setopt($ch,CURLOPT_POST,count($fields));
curl_setopt($ch,CURLOPT_POSTFIELDS,$fields_string);

//execute post
$result = curl_exec($ch);
print $result;







$url = 'http://back.lexplate.ru/Handlers/Query.ashx?type=query&name=Base.MenuForSite';
$options = array(
    'http' => array(
        'header'  => "Content-type: application/json\r\n",
        'method'  => 'GET',
        'content' => http_build_query($data),
    ),
);
$context  = stream_context_create($options);
$result = file_get_contents($url, false, $context);

echo $result;

?>