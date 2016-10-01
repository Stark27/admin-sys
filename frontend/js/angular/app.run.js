(function() {
	'use strict';
	 angular
	    .module('App')
		.run(RoutePermission);

		function RoutePermission($rootScope, $location, loginService){
			var routespermission=['/home'];
			$rootScope.$on('$routeChangeStart', function (){
				if(routespermission.indexOf($location.path()) !=-1)
				{
					var connected=loginService.islogged();
					connected.then(function	(msg){
									if(!msg.data) $location.path('/login');
								   });

				}
			})
		}

})();	 