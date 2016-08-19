module.exports = function (app) {
    var controller = app.controllers.contato;

    //organnizacao das rotas
    app.route('/api/contatos')
        .get(controller.listaContatos)
        .post(controller.addContato);

    app.route('/api/contatos/:id')
        .get(controller.listaContatoId)
        .delete(controller.deleteContato)
        .put(controller.updateContato);
}