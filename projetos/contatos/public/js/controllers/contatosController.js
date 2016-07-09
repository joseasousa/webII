angular.module('contatos')
  .controller('contatosController', function ($scope) {
    $scope.total = 0;
    $scope.filtro ='';

    $scope.somar = function () {
      $scope.total++;
    }

      $scope.contatos = [{
        "id": 1,
        "name": "Kenneth Garrett",
        "fone": "51-(412)632-0814"
      }, {
          "id": 2,
          "name": "Carl Bowman",
          "fone": "86-(537)708-0351"
        }, {
          "id": 3,
          "name": "Lois Williamson",
          "fone": "242-(777)332-4194"
        }, {
          "id": 4,
          "name": "Juan Barnes",
          "fone": "60-(100)708-6883"
        }, {
          "id": 5,
          "name": "Jose Campbell",
          "fone": "51-(985)986-8571"
        }, {
          "id": 6,
          "name": "Carol Rice",
          "fone": "86-(525)283-2905"
        }, {
          "id": 7,
          "name": "Willie Cruz",
          "fone": "7-(982)503-4760"
        }, {
          "id": 8,
          "name": "Jack Walker",
          "fone": "86-(589)256-3540"
        }, {
          "id": 9,
          "name": "Philip Boyd",
          "fone": "7-(667)469-8253"
        }, {
          "id": 10,
          "name": "Carlos Lewis",
          "fone": "55-(743)671-3300"
        }, {
          "id": 11,
          "name": "Angela Pierce",
          "fone": "7-(469)253-0312"
        }, {
          "id": 12,
          "name": "Ann Torres",
          "fone": "81-(792)168-7434"
        }, {
          "id": 13,
          "name": "Sean Walker",
          "fone": "351-(349)340-0506"
        }, {
          "id": 14,
          "name": "Jimmy Kelley",
          "fone": "63-(809)413-7973"
        }, {
          "id": 15,
          "name": "Chris Green",
          "fone": "7-(674)442-8947"
        }];
    
  });
