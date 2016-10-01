(function() {
'use strict';
    angular
        .module('App')
        .factory('setting', setting)

        setting.$inyect = ['$rootScope'];

        function setting ($rootScope){
            var setting = {
                layout: {
                    holdTransition: false,
                    loginPage: false,
                    containerFluid: false
                }
            };
            return setting;
        }
        return setting;

})();