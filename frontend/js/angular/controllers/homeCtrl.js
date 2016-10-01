(function() {
	'use strict';
	 angular
	    .module('App')
		.controller('HomeCtrl', Home, 'loginService'); 

		 function Home($scope,loginService){ 
			$scope.txt = 'Page HomeCtrl';
			$scope.containerFluid = true;
			$scope.loginPage 	  = false;
			$scope.holdTransition = false;
			$scope.logout=function(){
				loginService.logout();
			}
		}
		
})();	