<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<meta charset="utf-8">
	<meta name="author" content="Joshua Commey">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-- Favicon -->
	<link rel="shortcut icon" href="assets/img/favicon.png">
	<!-- Angular material -->
	<link rel="stylesheet" type="text/css" href="./src/css/angular-material.min.css">
	<!-- Icomoon -->
	<link rel="stylesheet" type="text/css" href="./src/fonts/icomoon/icomoon.css">    
	<!-- AnimatedSVGIcons -->
	<link rel="stylesheet" type="text/css" href="./src/fonts/animatedsvgicons/css/codropsicons.css">
    <!-- CSS - allcp forms -->
    <!-- <link rel="stylesheet" type="text/css" href="assets/allcp/forms/css/forms.css"> -->

    <!-- mCustomScrollbar -->
    <!-- <link rel="stylesheet" type="text/css" href="assets/js/utility/malihu-custom-scrollbar-plugin-master/jquery.mCustomScrollbar.min.css"> -->

    <!-- CSS - theme -->
   <link rel="stylesheet" type="text/css" href="./src/css/theme.css">
   <link rel="stylesheet" type="text/css" href="./src/css/addon.css">
</head>
<body class="sales-stats-page sb-top sb-top-lg">
	<div id="main">
		<page-header></page-header>
		<main-menu 
			v-on:render-page="this.renderPage" 
			v-if="page !== notfound">
		</main-menu>
		<section id="content_wrapper" class="mb80 mln">
			<section class="content_container">
				<page-loader v-if="showPageLoader"></page-loader>
				<!-- <dashboard-page v-if="page === 'dashboard'"></dashboard-page> -->
				<new-report-page v-if="page === 'new-report'"></new-report-page>
				<!-- <sent-reports-page v-if="page === 'sent-reports'"></sent-reports-page> -->
				<!-- <saved-reports-page v-if="page === 'saved-reports'"></saved-reports-page> -->
				<settings-page v-if="page === 'settings'"></settings-page>
				<notfound-page 
					v-if="page === 'notfound'"
					v-on:render-page="this.renderPage"></notfound-page>
			</section>
		</section>
	</div>

	<script type="module" src="./src/vue/vue.js"></script>
	<script type="module" src="./src/main.js"></script>
</body>
</html>