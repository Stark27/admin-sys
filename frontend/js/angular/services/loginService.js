(function() {
'use strict';
angular
    .module('App')
  	.factory('loginService', function($http,$location,sessionService,$timeout) {
	     return{
	       login:function(user,scope){
			  var $promise=$http.post('backend/usuario_sesion.php',user);
	            $promise.then(function(res) {
	          
	              var uid=res.data;

	  			  if (uid.status==200) {
				      scope.msgtxt = 'Información Correcta!';
				      scope.estado = 'success'
				      sessionService.set('uid',uid);
				      $timeout(function() { 
            		  	$location.path('/home');		
        			  }, 750);
	              	  		
				  }

				  else {
					  scope.msgtxt = 'Información Incorrecta';		
					  scope.estado = 'danger'
				  }
				  
				},function(reason) { // para debugear
					console.log('reason',reason);
				  }
				);	
			  },
			logout:function(){
				sessionService.destroy('uid');
				$location.path('/login');
			},
			islogged:function(){
				var $checkSessionServer=$http.post('backend/check_session.php');
				return $checkSessionServer;
			}  
		  }
    });
})();	    