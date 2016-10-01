(function() {
'use strict';

angular
    .module('App')
  	.controller('LoginCtrl', LoginCtrl);

  	LoginCtrl.$inyect = ['$scope','loginService']; // dependencias 

  	function LoginCtrl($scope,loginService){ // funcion principal del controlador
    	$scope.msgtxt = '';
	    $scope.estado = '';	

	    $scope.Login = function(user){
	    	loginService.login(user,$scope);
	    }
  	} 

})();  	