<?php 
	use	Commey\Joshua\WePort\Helpers as H;
 
	require "../app/models/helpers.php";
		// require "models/reports.php";

	// H::returnJSON();

	if(isset($_POST["process"])){
		$process = $_POST["process"];

		switch ($process) {

			case 'send':
				$post = (object) $_POST;
				$projects = [];
				if(!empty($post->project)){
					foreach ($post->project as $key => $projectName) {
						$projects[$key]["name"] = $projectName;
						array_walk($post->task[$key], function($value, $index) use (&$projects, $post, $key){
							$projects[$key]["tasks"][$index] = [
								"name" => $value,
								"start" => $post->start[$key][$index],
								"done" => $post->done[$key][$index],
								"current" => $post->current[$key][$index],
							];
							// var_dump($index, $value);
						});
					}
				}
				H::json($projects);
				// var_dump($post);
				break;
		}
		// H::json($_POST);
	}
?>