(function() {
'use strict';
angular
    .module('App')
	.directive('loginDirective',function () {
	    return{
	        templateUrl:'frontend/views/partials/iniciar.sesion.html'
	    }
	});
})();	