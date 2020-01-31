<?php 
	use	Commey\Joshua\WePort\Helpers as H;
 
	require "../app/models/helpers.php";
		// require "models/settings.php";

	H::returnJSON();
		H::json($_R);

	if(isset($_POST["process"])){
		H::json($_POST);
	}
?>