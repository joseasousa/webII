module.exports = function (app) {
    var controller = app.controllers.contato;

    //organnizacao das rotas
    app.route('/contatos')
        .get(controller.listaContatos)
        .post(controller.addContato);

    app.route('/contatos/:id')
        .get(controller.listaContatoId);
}