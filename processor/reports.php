<?php 
	use	Commey\Joshua\WePort\Helpers as H;
 // sleep(10);
	require "../app/models/helpers.php";
		// require "models/reports.php";

	// H::returnJSON();

	if(isset($_POST["process"])){
		$process = $_POST["process"];

		switch ($process) {
			case 'send':
				H::json($projects);
				break;
			case "preview":
				require('../app/libraries/html2pdf.php');
				$post = processRawPOST();
				$fileName = "joshua_commey_".date("dmY", strtotime($post->to));
				$sh = new PDF_HTML();
				frontPage($sh, $post);
				tableOfContent($sh, $post);
				listOfTasks($sh, $post);
				projects($sh, $post);
				furtherComments($sh, $post);
				$sh->Output("F", "$fileName.pdf");
			break;
		}
		// H::json($_POST);
	}

	if(isset($_GET['preview'])){
		require('../app/libraries/html2pdf.php');
		$projects = processRawPOST();
		// var_dump($projects);
		$sh = new PDF_HTML();
		frontPage($sh);
		tableOfContent($sh);
		listOfTasks($sh);
		projects($sh);
		// furtherComments($sh);
		$sh->Output();
	}
	
	function processRawPOST(){
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
		$post->project = $projects;
		return $post;
	}

	function frontPage(&$sh, $data){
		$startDate = strtoupper(date("jS M Y", strtotime($data->from)));
		$endDate = strtoupper(date("jS M Y", strtotime($data->to)));
    $sh->AddPage();
		$sh->SetFont('Arial','B',16);
		$sh->SetTextColor(2, 94, 100);
		$sh->SetFontSize(100);
		$sh->Cell(0,75,'');
		$sh->Ln();
		$sh->Cell(0,54,'Weekly');
		$sh->Ln();
		$sh->Cell(0,40,'Report');
		$sh->Ln();
		$sh->SetTextColor(2, 2, 2);
		$sh->SetFontSize(18);
		$sh->Cell(0,20, "FROM $startDate - $endDate");
		$sh->Ln();
		$sh->SetTextColor(2, 94, 100);
		$sh->SetFont("", "I", 14);
		$sh->Cell(0,0,'By Joshua Commey');
		footer($sh);
	}

	function footer(&$sh){
    // Position at 1.5 cm from bottom
		$sh->SetY(-50);
    // Arial italic 8
		$sh->SetFont('Arial','B',18);
		$sh->SetTextColor(2, 94, 100);
		$sh->Cell(0,18,'Analitica Innovare');
		$sh->SetLineWidth(0.5);
		$sh->Line(11, $sh->GetY() +15, 200 , $sh->GetY()+15);
		$sh->Ln();
		$sh->SetFont('Arial','B',10);
		$sh->Cell(10,5,'Tel');
		$sh->SetFont('Arial','',10);
		$sh->Cell(60,5,'233.238758175');
		$sh->Cell(60,5,'No. 5 Wu-Biibi Lane');
		$sh->Cell(60,5,'https://analiticainnovare.com');
		$sh->Ln();
		$sh->Cell(70,5,'');
		$sh->Cell(60,5,'Ritz Junction, Accra, Ghana');
		$sh->Cell(60,5,'info@analiticainnovare.com');
		$sh->Ln();
		$sh->SetLineWidth(1.5);
		$sh->Line(11, $sh->GetY() +3, 200 , $sh->GetY()+3);
	}

	function tableOfContent(&$sh, $data){
		$sh->AddPage();
    // Arial italic 8
		$sh->SetFont('Arial','B',18);
		$sh->Cell(120,18,'');
		$sh->Cell(0,18,'Table Of Contents', 0, 0, "R");
		$sh->Ln();
		$sh->SetLineWidth(1.5);
		$sh->Line(11, $sh->GetY()-4, 200 , $sh->GetY()-4);
		$sh->Ln();
		$sh->SetFontSize(22);
		$sh->Cell(40,0,'');
		$sh->Cell(0,18,'Contents');
		$sh->Ln();
		$sh->Cell(40,0,'');
		$sh->SetTextColor(90,90,90);
		$sh->SetFont('','',10);
		$sh->Cell(26,5,'List of Tasks');
		$sh->SetLineWidth(0.1);
		$initX = $sh->GetX();
		$sh->SetX(-14);
		$sh->Line($initX, $sh->GetY()+3, $sh->GetX() , $sh->GetY()+3);
		$sh->Cell(2,5,'1');
		$sh->Ln();
		foreach ($data->project as $key => $pro) {
			$projectName = $pro['name'];
			if(empty($projectName)) continue;
			$sh->Cell(40,0,'');
			$sh->Cell(strlen($projectName)*2+2, 5, $projectName);
			$sh->SetLineWidth(0.1);
			$initX = $sh->GetX();
			$sh->SetX(-14);
			$sh->Line($initX, $sh->GetY()+3, $sh->GetX() , $sh->GetY()+3);
			$sh->Cell(2,5, $key+2);
			$sh->Ln();
		}
		$sh->Cell(40,0,'');
		$sh->Cell(32,5,'Further Comments');
		$sh->SetLineWidth(0.1);
		$initX = $sh->GetX();
		$sh->SetX(-14);
		$sh->Line($initX, $sh->GetY()+3, $sh->GetX() , $sh->GetY()+3);
		$sh->Cell(2,5, $key+2);
		footer($sh);
	}

	function listOfTasks(&$sh, $data){
		$sh->AddPage();
		$sh->SetFont('Arial','B',18);
		$sh->SetTextColor(120, 120, 120);
		$sh->Cell(120,18,'Pg.01');
		$sh->SetTextColor(2, 94, 100);
		$sh->Cell(0,18,'List Of Tasks', 0, 0, "R");
		$sh->Ln();
		$sh->SetLineWidth(1.5);
		$sh->Line(11, $sh->GetY()-4, 200 , $sh->GetY()-4);
		$sh->Ln();
		$sh->SetFontSize(18);
		$sh->Cell(40,0,'');
		$sh->SetTextColor(10,10,10);
		$sh->Cell(0,18,'List Of Tasks');
		$sh->Ln();
		$sh->SetTextColor(10,10,10);
		foreach ($data->project as $key => $pro) {
			$projectName = $pro["name"];
			if(empty($projectName)) continue;
			$sh->SetFont('','B',14);
			$sh->Cell(40,0,'');
			$sh->Cell(0,6, $projectName);
			$sh->SetFont('','',10);
			foreach ($pro['tasks'] as $key => $task) {
				$sh->Ln();
				$sh->Cell(50,0,'');
				$sh->Cell(0,6, $task['name']);
			}
			$sh->Ln();
		}
		footer($sh);
	}

	function projects(&$sh, $data){
		foreach ($data->project as $key => $pro) {
			$projectName = $pro["name"];
			if(empty($projectName)) continue;
			$sh->AddPage();
			$sh->SetFont('Arial','B',18);
			$sh->SetTextColor(120, 120, 120);
			$sh->Cell(120,18, 'Pg.'.($key < 8 ? '0':'').($key+2));
			$sh->SetTextColor(2, 94, 100);
			$sh->Cell(0,18, $projectName, 0, 0, "R");
			$sh->Ln();
			$sh->SetLineWidth(1.5);
			$sh->Line(11, $sh->GetY()-4, 200 , $sh->GetY()-4);
			$sh->Ln();
			$sh->SetFontSize(18);
			$sh->SetTextColor(10, 10, 10);
			$sh->Cell(40,0,'');
			$sh->Cell(0,6, $projectName);
			$sh->Ln();
			$sh->SetFont('','',10);
			foreach ($pro['tasks'] as $key => $task) {
				if(empty($task['name'])) continue;
				$sh->Cell(40,0,'');
				$sh->SetFont('','B',14);
				$sh->Cell(0,10, $task['name']);
				$sh->Ln();
				$sh->Cell(40,0,'');
				$sh->SetTextColor(2, 74, 80);
				$sh->SetFont('', '', 12);
				$sh->Cell(0,6, "State of the Task When Beginning");
				$sh->Ln();
				$sh->Cell(40,0,'');
				$sh->SetTextColor(10, 10, 10);
				$sh->SetFont('', 'I', 12);
				$sh->Cell(0,6, $task['start']);
				$sh->Ln(12);
				$sh->Cell(40,0,'');
				$sh->SetTextColor(2, 74, 80);
				$sh->SetFont('', '', 12);
				$sh->Cell(0,6, "What You Did on the Task");
				$sh->Ln();
				$sh->SetTextColor(10, 10, 10);
				$sh->SetFont('', 'I', 12);
				$sh->WriteHTML(str_replace(PHP_EOL, "<br>", $task['done']), 40);
				$sh->Ln(12);
				$sh->Cell(40,0,'');
				$sh->SetTextColor(2, 74, 80);
				$sh->SetFont('', '', 12);
				$sh->Cell(0,6, "Current State of the Task");
				$sh->Ln();
				$sh->Cell(40,0,'');
				$sh->SetTextColor(10, 10, 10);
				$sh->SetFont('', 'I', 12);
				$sh->Cell(0,6, $task['current']);
				$sh->Ln(20);
			}
		}
		footer($sh);

	}
	function furtherComments(&$sh, $data){
		$sh->AddPage();
		$sh->SetFont('Arial','B',18);
		$sh->SetTextColor(120, 120, 120);
			// $sh->Cell(120,18, 'Pg.'.($key < 8 ? '0':'').($key+2));
		$sh->SetTextColor(2, 94, 100);
		$sh->Cell(0,18, "Further Comments", 0, 0, "R");
		$sh->Ln();
		$sh->SetLineWidth(1.5);
		$sh->Line(11, $sh->GetY()-4, 200 , $sh->GetY()-4);
		$sh->Ln();
		foreach ($data->project as $key => $pro) {
			$projectName = $pro["name"];
			if(empty($projectName)) continue;
			$sh->SetFontSize(18);
			$sh->SetTextColor(10, 10, 10);
			$sh->Cell(40,0,'');
			$sh->Cell(0,6, $projectName);
			$sh->Ln();
		}
		footer($sh);

	}

?>