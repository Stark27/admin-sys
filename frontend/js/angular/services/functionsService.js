(function() {

    'use strict';

    angular
        .module('App')
        .factory('FunctionsService', functionsService)

        functionsService.$inyect = ['$filter'];

        function functionsService($filter){
            return {
                imprimir: function (args){
                    console.log('args',args);
                },
                saludar: function (args){
                    console.log('hola ',args)
                }
            };
        }

})();