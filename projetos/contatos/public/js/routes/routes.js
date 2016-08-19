angular.module('contatos')
  .config(function ($routeProvider) {

    $routeProvider.when('/contatos', {
      templateUrl: 'partials/contatos.html',
      controller: 'contatosController'
    });
    
    $routeProvider.otherwise(
        {redirectTo: '/contatos'});
  });
