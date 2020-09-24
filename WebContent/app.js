angular.module('APP', [])
       .controller('MyController', ['$scope','$timeout', '$http', MyController]);

function MyController($scope,$timeout,$http) {
	$scope.clock={
		now:new Date()	
	}
	var updateClock= function (){
		$scope.clock.now=new Date;
	};
	
	setInterval(function(){
		$scope.$apply(updateClock);
	}, 1000);
	
	$http
	.get("https://api.github.com").then(function(data) {
		$scope.data = data.data;
	});
}