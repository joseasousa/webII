module.exports = function (app) {
  var controller = {};
  var Contato = app.models.contato;
  /**
   * fucao que listas todos os contatos
   */
  controller.listaContatos = function (req, res) {
    Contato.find().exec()
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
    Contato.findById(_id).exec()
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
    Contato.create(req.body)
      .then(
        function (contato) {
          res.status(201).json(contato);
        },
        function (erro) {
          console.log(erro);
          res.status(500).json(erro);
        });
  };

  controller.deleteContato = function (req, res) {
    var _id = req.params.id;
    Contato.remove({'_id': _id}).exec()
      .then(
        function () {
          res.status(204).end();
        },
        function (erro) {
          return console.error(erro);
        }
    );
  };

  controller.updateContato = function (req, res) {
      var _id = req.params.id;
    Contato.findByIdAndUpdate(_id, req.body).exec()
      .then(
        function (contato) {
          res.json(contato);
        },
        function (erro) {
          console.error(erro);
          res.status(500).json(erro);
        });
  };

  return controller;
};
