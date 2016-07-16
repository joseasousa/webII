module.exports = function (app) {
  var controller = {};
  var Contatos = app.models.contato;

  /**
   * fucao que listas todos os contatos
   */
  controller.listaContatos = function (req, res) {
    Contatos.find().exec()
      .then(
        function (contatos) {
          res.json(contatos);
        },
        function (erro) {
          console.error(erro);
          res.status(500).json(erro);
        }
    );

  };

  /**
   * funcao que lista o contato pelo id 
   */
  controller.listaContatoId = function (req, res) {
    var _id = req.params.id;
    Contatos.findById(_id).exec()
      .then(function (contato) {
        if (!contato) throw new Error('Contato não encontrado');
        res.json(contato);
      },
        function (erro) {
          console.log(erro);
          res.status(404).json(erro);
        }
    );
  };

  /**
   * funcao que adciona um contato
   */
  controller.addContato = function (req, res) {
    var contato = req.body;
    Contatos.create(contato,
      function (erro, contato) {
        if (erro) {
          console.log(erro);
          res.status(500).json(erro);
        }
        res.status(201).json(contato);
      });
  };

  controller.deleteContato = function (req, res) {
    var query = {'_id': req.params.id};
    Contatos.remove(query, function (erro) {
      if (erro) {
        console.error(erro);
        res.status(500).json(erro);
      } else {
        res.status(204).end();

      }
    });
  };

  controller.updateContato = function (req, res) {
    var id = req.params.id;
    Contatos.findByIdAndUpdate(id, req.body,
      function (erro, contato) {
        if (erro) {console.error(erro);
          res.status(500).json(erro);} else {
          res.json(contato);
        }
      });

  };

  return controller;
};
