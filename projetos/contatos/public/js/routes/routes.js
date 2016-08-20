angular.module('contatos').config(function ($routeProvider) {

    $routeProvider.when('/contatos', {
      templateUrl: 'partials/contatos.html',
      controller: 'contatosController'
    });

    $routeProvider.when('/contatos/new',{
      templateUrl: 'partials/formulario.html',
      controller: 'contatoController'
    });

    $routeProvider.when('/contatos/:id',{
      templateUrl: 'partials/formulario.html',
      controller: 'contatoController'
    });

    $routeProvider.otherwise(
        {redirectTo: '/contatos'});
  });
