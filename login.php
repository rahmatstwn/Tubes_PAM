<?php include 'config.php';

	$json = file_get_contents('php://input'); 	
	$obj = json_decode($json,true);

	$username = $obj['username'];
	
	$password = $obj['password'];
	
	if($obj['username']!=""){	
	
	$result= $mysqli->query("SELECT * FROM user where username='$username' and password='$password'");
	
		if($result->num_rows==0){
			echo json_encode('Wrong Details');				
		}
		else{		
		echo json_encode('ok');				
		}
	}	
	else{
	  echo json_encode('try again');
	}

?>

