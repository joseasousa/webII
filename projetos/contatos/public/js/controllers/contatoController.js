angular.module('contatos')
  .controller('contatoController',
    function ($scope, $http, $routeParams) {
      $scope.contato = {};
      $scope.mensagem = '';

      if ($routeParams.id) {
        $http.get('api/contatos/' + $routeParams.id)
          .success(function (contato) {
            $scope.contato = contato;
          })
          .error(function (erro) {
            console.log(erro);
            $scope.mensagem = 'Não foi possível obter';
          });
      }

      $scope.submeter = function () {
        if ($scope.formulario.$valid) {
          if ($routeParams.id) {
            $http.put('/api/contatos/' + $scope.contato._id, $scope.contato)
              .success(function () {
                $scope.mensagem = 'Contato alterada com sucesso';
              }).error(function (erro) {
              console.log(erro);
              $scope.mensagem = 'Não foi possível alterar';
            });
          } else {
            $http.post('/api/contatos', $scope.contato)
              .success(function () {
                $scope.contato = {};
                $scope.mensagem = 'Foto cadastrada com sucesso';
              })
              .error(function (erro) {
                console.log(erro);
                $scope.mensagem = 'Não foi possível cadastrar a foto';
              });
          }
        }};

    });
