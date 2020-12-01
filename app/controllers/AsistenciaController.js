const Asistencia = require('../models/Asistencia');

function index(req, res){
    Asistencia.find({})
        .then(asistencias => {
                if(asistencias.length) return res.status(200).send({asistencias});
                return res.status(204).send({message: 'NO CONTENT'});
        }).catch(error => res.status(500).send({error}));
}

function show(req, res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.asistencias) return res.status(404).send({message: 'NOT FOUND'}); 
    let asistencias = req.body.asistencias;
    return res.status(200).send({asistencias});   
}

function create(req, res){
    new Asistencia(req.body).save().then(product => res.status(201).send({product}))
        .catch(error => res.status(500).send({error}));
}

function update(req, res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.asistencias) return res.status(404).send({message: "NOT FOUND"});
    let product = req.body.asistencias[0];
    product = Object.assign(product, req.body);
    product.save().then(product => res.status(200).send({message: "UPDATED", product})).catch(error => res.status(500).send({error}));   
}

function remove(req, res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.asistencias) return res.status(404).send({message: "NOT FOUND"});
    req.body.asistencias[0].remove().then(product => res.status(200).send({message: 'REMOVED', product})).catch(error => res.status(500).send({error}));
    
}

function find(req, res, next){
    let query = {};
    query[req.params.key] = req.params.value;
    query['category'] = 'Hogarr';

   console.log("ESTE ES EL QUERY");
       console.log(query);

    Asistencia.find(query).then(asistencias => {
        if(!asistencias.length) return next();
        req.body.asistencias = asistencias;
        return next();
    }).catch(error => {
        req.body.error = error;
        next();
    })
}

module.exports = {
    index,
    show,
    create,
    update,
    remove,
    find
}