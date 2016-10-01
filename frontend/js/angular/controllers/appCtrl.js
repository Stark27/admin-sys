(function() {
	'use strict';
	 angular
	    .module('App')
		.controller('AppCtrl', App);

		App.$inject = ['$scope','FunctionsService'];

		function App($scope,FunctionsService){ 

			$scope.containerFluid = true;
			$scope.loginPage 	  = true;
			$scope.holdTransition = true;

			FunctionsService.imprimir('hola que hace!'); 
			FunctionsService.saludar('Cristian'); 
		}
		
})();	

// Nota
// no cambia los estilos al pasar a otra vista ya que por ejemplo en el home es otro controlador
// no tiene el 'acceso' a las variables que estaban declaras en el controlador app