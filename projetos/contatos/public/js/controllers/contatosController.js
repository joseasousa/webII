angular.module('contatos')
  .controller('contatosController', ['$scope', '$http',
    function ($scope, $http) {
      $scope.total = 0;
      $scope.filtro = '';
      $scope.sortValue = 'nome';
      $scope.order = false;

      $scope.contatos = [];

      $http.get('api/contatos')
        .success(function (data) {
          $scope.contatos = data;
        })
        .error(function (statusText) {
          console.log(statusText);
        });

      $scope.sort = sort;
      function sort (fild) {
        $scope.sortValue = fild;
        $scope.order = !$scope.order;
      }

      $scope.del = del;
      function del (id) {
        $http.delete('api/contatos/' + id)
          .success(function () {
            console.log('usuario deletado com sucesso');

            $http.get('api/contatos')
              .success(function (data) {
                $scope.contatos = data;
              })
              .error(function (statusText) {
                console.log(statusText);
              });

          }).error(function (statusText) {
          console.log(statusText);
        });
      }

    }]);
