<?php
require_once('connection.php'); 
$input = file_get_contents('php://input');
$date = json_decode($input,true);
if($date){
    $sql = "SELECT id_task, title, task_text FROM done;";
    $stmt = $dbh->prepare($sql);
    $stmt -> execute();
    $doneList = $stmt->fetchall(PDO::FETCH_ASSOC);
    
    if(empty($doneList)){
        echo"LIST EMPTY";
    }else{
        header('Content-Type:application/json');
        echo (json_encode($doneList));
    }
}else{
    echo('Error: ');
}
?>



