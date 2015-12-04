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
app.controller('menuCtrl', function ($scope) {
	$scope.ham = false;
	$scope.hamActive = function() {
		if ($scope.ham == false) {
			$scope.ham = true;
		}	else { $scope.ham = false; }
	};
	$scope.items = [
		{title:"Home", page:"pages/home.html"},
		{title:"Services", page:"pages/services.html"},
		{title:"About Us", page:"pages/about.html"},
		{title:"Contact ", page:"pages/contact.html"}
	];
	$scope.active = $scope.items[0].page;
	$scope.setPage = function(index) {
		$scope.active = $scope.items[index].page;
	};
	$scope.servList = [
		{tag: "webDesign", label: "Web Design & Hosting"},
		{tag: "homeAudio", label: "Home Audio & Video Installation"},
		{tag: "homeOffice", label: "Home Office Setup"},
		{tag: "computerRepair", label: "Computer Repair & Maintenance"},
		{tag: "networking", label: "Networking"},
		{tag: "virusSpypware", label: "Virus/Spyware Protection & Removal"},
		{tag: "smallBusiness", label: "Small Business Solutions"},
		{tag: "remoteAssistance", label: "Remote Assistance"},
		{tag: "adviceConsult", label: "Advice & Consulting"}
	];
	$scope.service =  $scope.servList[0].tag;
	$scope.servSelect = function(index) {
		$scope.active = $scope.items[1].page;	
		$scope.service = $scope.servList[index].tag;
	};
	$scope.servShow = function(x) {
		return $scope.service == x; 
	};
});
