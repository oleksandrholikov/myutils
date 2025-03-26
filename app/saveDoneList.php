<?php
require_once('connection.php');
$input = file_get_contents('php://input');
$DoneList = json_decode($input, true);
if($DoneList){
    
    foreach ($DoneList as $k => $v){
        $id_task = $v['id'];
        $title = $v['title'];
        $task_text = $v['text'];
        $sql = "INSERT INTO done (id_task, title, task_text) 
            VALUE (:id_task, :title, :task_text)";
        $stmt = $dbh->prepare($sql);
        $stmt->execute([
            'id_task' => $id_task,
            'title'=> $title,
            'task_text'=>$task_text
        ]);
    }
    echo json_encode([
        "status"=>"success"
    ]);
    
}else{
    echo json_encode([
        "error"=>"error"
    ]);
}