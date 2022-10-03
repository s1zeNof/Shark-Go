<?php

if (isset($_POST["firstname"]) && isset($_POST["lastname"]) && isset($_POST["phonenumber"])&& isset($_POST["email"])  ) { 
    $file = "data.json";
    $result = array(
    	'firstname' => $_POST["firstname"],
        'lastname' => $_POST["lastname"],
        'phonenumber' => $_POST["phonenumber"],
    	'email' => $_POST["email"]
    ); 
    $json_string = json_encode($result);
file_put_contents($file, '[' . "\n" . "\n"  .$json_string.']', FILE_APPEND);

    $file = file_get_contents('data.json', true);
    echo json_encode($result); 
}

?>





