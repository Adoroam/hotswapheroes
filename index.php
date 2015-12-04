<html ng-app="app">
<head>
	<meta content="text/html;charset=utf-8" http-equiv="Content-Type">
	<meta content="utf-8" http-equiv="encoding">
	<title>HotswapHeroes.com</title>
	<link href='http://fonts.googleapis.com/css?family=Raleway' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" type="text/css" href="libs/style.css">
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.26/angular.min.js"></script>
	<script src="libs/jquery-2.0.3.min.js"></script>
	<script src="libs/app.js"></script>
<head>
<body ng-controller="menuCtrl as menu">
<?php include_once("analyticstracking.php") ?>
<header>
	<img src="images/gMenu.png" height="25em" width="25em" id="gMenu"/>
	<a href="/" id="title">HotswapHeroes.com</a>
</header>
<div id="headerProxy"></div>
<!--menu-->
<div id="menu">
	<div  id="menuDivTop">
		<a class="menuItem" ng-repeat="x in items" ng-click="setPage(x.page)">{{x.title}}</a>
	</div>
</div>
<!--MAIN CONTENT-->
<div id='contentWrapper'>
	<div class="content" ng-include='active' id="mainContent"></div>
<!-- CIRCLES -->
	<div class="content" id="lowerContent">
		<figure ng-click="servSelect('webDesign')">
			<img src="images/screen2.png" />
			<figcaption>Web Design & hosting</figcaption>
		</figure>
		<figure ng-click="servSelect('computerRepair');">
			<img src="images/wrenchgear2.png" />
			<figcaption>Computer Maintenance & Repair</figcaption>
		</figure>
		<figure  ng-click="servSelect('smallBusiness')">
			<img src="images/lightbulb2.png" />
			<figcaption>Small Business Solutions</figcaption>
		</figure>
	</div>
<!--COPYRIGHT-->
	<div class="content">
		<p id="copyright">© Copyright 2014 HotswapHeroes.com - All logos and trademarks are the properties of their respective owners.</p>
	</div>
</div>


<script>
$(document).ready(function(){
	$("#menuDivTop a:first-child").addClass("menuCurrent");	//select the home button
	$("#menu").animate({width: 'toggle'}, 0);			//minimize menu
	$("#gMenu").click(function(){				
		$(this).toggleClass("menuActive");		//toggle the menu's active state class
		$("#menu").animate({width: 'toggle'});		//toggle the menu's active state animation
	});
	$(".menuItem").click(function(){		
		$(".menuItem").removeClass("menuCurrent"); 	//un-tags all menu items
		$(this).addClass("menuCurrent");			//tags this item as selected & loads page	
		$("#gMenu").toggleClass("menuActive");		//toggles the menu button state
		$("#menu").animate({width: 'toggle'}, "slow");	//closes the menu			
	});
});
</script>
</body>
</html>