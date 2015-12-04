//define app
var app = angular.module('app', []);

//takes the scope of the controller and the Data passed from the service we created to bind the Data service to $scope.data
function firstCtrl($scope, Data) {
	$scope.data = Data; 
	$scope.clearng = function(){
		$scope.data = "";
	}	
}
//create service for any controllers to use with factory
app.factory('Data', function(){
	return {message:'omg live-updating text'};
})
//this is how you make filters
app.filter('filterName', function(outsideData){
	return function(thingToBeFiltered){
		return thingToBeFiltered//stuff to do to filtered object
	}
})

function menuCtrl($scope) {
	$scope.items = [
		{title:"Home", page:"pages/home.html"},
		{title:"Services", page:"pages/services.html"},
		{title:"About Us", page:"pages/about.html"},
		{title:"Contact ", page:"pages/contact.html"}
	];
	$scope.active = "pages/home.html";
	$scope.setPage = function(x) {
		$scope.active = x;
	};
	$scope.service = "webDesign";
	$scope.servSelect = function(x) {
		$scope.setPage("pages/services.html");	
		$scope.service = x;
	};
	$scope.servShow = function(x) {
		return $scope.service == x; 
	};
}

/*
<div id="flexContainer">
	<div class="column"><!--jquery-->
		<h1>Jquery Testing</h1>
		<button type="button" id="testButton1">this does nothing</button>
	</div>
	<div ng-controller='firstCtrl' class="column"><!--angularjs-->
		<h1>Angular testing</h1>
		<input type="text" ng-model='data.message' ng-click='clearng()'>
		<p>Result: {{data.message}}</p>
	</div>
</div><!--flexContainer-->
#flexContainer {
	width: 100%;
	margin: 0em;
	padding: 0em 4em;
	display: flex;
	flex-flow:row nowrap;
	box-sizing:border-box;
}
.column {
	text-align: center; 
	flex:1;
}
*/