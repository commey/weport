<?php 
 namespace Commey\Joshua\WePort;

 class Helpers{

 	static function returnJSON(){
 		header("content-type:application/json");
 	}

 	static function json($value){
 		echo json_encode($value);
 		exit;
 	}

 }
?>