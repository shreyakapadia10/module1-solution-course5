(function () {
	'use strict';

	angular.module("lunchChecker", [])

	.controller("lunchCheckerController", lunchCheckerController);

	function lunchCheckerController($scope) {
		
		$scope.seperateItems = function(){
			var items = $scope.dishes;
			
			if(items == undefined){
				return 0;
			}
			else{
				return items.split(', ');
			}
		};

		$scope.checkItems = function() {
			var sepItems = $scope.seperateItems();
			if (sepItems == 0){
				$scope.message = "Please Enter Data First!";
				return;
			}

			var count = sepItems.length;
			
			if (count> 0 && count < 4) {
				$scope.message = "Enjoy!";
			} else {
				$scope.message = "Too much!";
			}
		};
		
	};

})();