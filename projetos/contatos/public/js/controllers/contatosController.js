angular.module('contatos')
  .controller('ContatosController', function ($scope) {
    $scope.total = 0;

    $scope.somar = function(){
      $scope.total++;
    }

  });
