<?php
$dsn = 'mysql:dbname=to_do_list;host=127.0.0.1';
$username = 'sasha';
$password = 'losos';

try {
    $dbh = new PDO($dsn, $username, $password);
    echo "toto\n";
} catch (PDOException $exception) {
    echo $exception->getMessage();
    
}