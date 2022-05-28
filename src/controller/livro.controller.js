'use strict';

const Livro = require('../models/livro.model');

exports.findAll = function(req, res){

    Livro.findAll(function(err,livro){
        console.log("controller");
        if(err)
            res.send(err);

        console.log('res', livro);
        res.send(livro);    
    });
};

exports.create = function(req, res){
    const livro = new Livro(req.body);

    if(req.body.construtor === Object && Object.keys(req.body).length === 0){

        res.status(400).send({
            error: true, message: 'erro na requisição'
        });
    
    }else{
        Livro.create(livro, function(err, livro){
            if(err)
                res.send(err);

            res.json({
                error: false,
                message: "livro cadastrado com sucesso!",
                data: livro
            })    
        });
    }
};


exports.findById = function(req, res) {
    Livro.findById(req.params.id, function(err, livro){
        if(err)
            res.send(err);
            res.json(livro);
    });
}

exports.update = function(req, res) {

    if(req.body.construtor === Object && Object.keys(req.body).length === 0){

        res.status(400).send({
            error: true,
            message: "erro ao atualizar dados do livro"
        });

    }else{
        console.log(req.params.id, new Livro(req.body));
        Livro.update(req.params.id, new Livro(req.body),
        function(err, livro) {
            if(err)
                res.send(err);

            res.json({
                error: true,
                message: "Erro ao deletar Livro"
            });    
        });
    }
};

exports.delete = function(req, res) {
    Livro.delete(req.params.id, function(err, livro){

        if(err)
        res.send(err);

        res.json({
            error: true,
            message: "Livro deletado com sucesso"
        });
    });
};
