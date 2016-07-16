angular.module('contatos')
  .controller('contatosController', function ($scope, $http) {
    $scope.total = 0;
    $scope.filtro = '';

    $scope.contatos = [];

    $http.get('/contatos')
      .success(function (data) {
        $scope.contatos = data;
      })
      .error(function (statusText) {
        console.log(statusText);
      });

    $scope.somar = function () {
      $scope.total++;
    };

  });
