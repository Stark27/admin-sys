(function() {
	'use strict';
	 angular
	    .module('App')
		.controller('MainCtrl', Main); // tratar de no usar funciones anonimas en el callback

		function Main($scope){ 
			this.bienvenida = 'Hola Usuario';
		}
		
})();	