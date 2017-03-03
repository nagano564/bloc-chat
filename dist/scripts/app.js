
(function () {
     function config($stateProvider, $locationProvider) {
         $locationProvider
             .html5Mode({
                 enabled: true, //disable URL
                 requireBase: false
             });
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'MainCtrl as main',
                templateUrl: '/templates/home.html'
              });
            
        }
 angular
    .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap'])
    .config(config);
})();