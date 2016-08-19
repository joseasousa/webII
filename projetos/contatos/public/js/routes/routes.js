angular.module('contatos')
  .config(function ($routeProvider) {

    $routeProvider.when('/contatos', {
      templateUrl: 'partials/contatos.html',
      controller: 'contatosController'
    });
    $routeProvider.when('/contatos/:contatoId', {
      templateUrl: 'partials/formulario.html',
      controller: 'contatosController'
    });

    $routeProvider.otherwise(
        {redirectTo: '/contatos'});
  });
