var contatos = [
    {
        _id: 1, nome: 'Contato Exemplo 1',
        email: 'cont1@empresa.com.br'
    },
    {
        _id: 2, nome: 'Contato Exemplo 2',
        email: 'cont2@empresa.com.br'
    },
    {
        _id: 3, nome: 'Contato Exemplo 3',
        email: 'cont3@empresa.com.br'
    }
];

module.exports = function () {
    var controller = {};

    /**
     * fucao que listas todos os contatos
     */
    controller.listaContatos = function (req, res) {
        res.json(contatos);
    };

    /**
     * funcao que lista o contato pelo id 
     */
    controller.listaContatoId = function (req, res) {
        var idContato = req.params.id;
        var contato = contatos.filter(function (contato) {
            return contato._id == idContato;
        })[0];
        contato ?
            res.json(contato) :
            res.status(404).send('Contato não encontrado');
    };

    /**
     * funcao que adciona um contato
     */
    controller.addContato = function(req,res){
        var contato = req.body;
        
        contato._id = contatos.length+1;
        contatos.push(contato);

        res.json(contatos);
    }

    controller.deleteContato = function(req,res){
        var id = req.params.id;
        var resul =contatos.slice(id);        

        res.json(resul);
    }

    controller.updateContato = function(req,res){
        var id = req.params.id;
        var novoContato = req.body;
        contatos[id-1]=novoContato;

        res.json(contatos);
    }

    return controller;
}