angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })


/*  .state('teste', {
    url: '/teste',
    templateUrl: 'templates/my-modal.html',
    controller: 'teste'
  })
*/

  .state('ufalController', {
    url: '/page6',
    templateUrl: 'templates/ufalController.html',
    controller: 'ufalController'
  })

  .state('pageCesmac', {
    url: '/pageCesmac',
    templateUrl: 'templates/cesmacController.html',
    controller: 'cesmacController'
  })

  .state('pageUneal', {
    url: '/pageUneal',
    templateUrl: 'templates/unealController.html',
    controller: 'unealController'
  })

  .state('pageIfalT', {
    url: '/pageIfalT',
    templateUrl: 'templates/ifalTecnicoController.html',
    controller: 'ifalTecnicoController'
  })

  .state('calculadorUniversidades', {
    url: '/page7',
    templateUrl: 'templates/calculadorUniversidades.html',
    controller: 'calculadorUniversidadesCtrl'
  })


$urlRouterProvider.otherwise('/page7')

  

});