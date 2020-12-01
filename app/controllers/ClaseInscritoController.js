const ClaseInscrito = require('../models/ClaseInscrito');

function index(req, res){
    ClaseInscrito.find({})
        .then(clase_inscrito => {
                if(clase_inscrito.length) return res.status(200).send({clase_inscrito});
                return res.status(204).send({message: 'NO CONTENT'});
        }).catch(error => res.status(500).send({error}));
}

function show(req, res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.clase_inscrito) return res.status(404).send({message: 'NOT FOUND'}); 
    let clase_inscrito = req.body.clase_inscrito;
    return res.status(200).send({clase_inscrito});   
}

function create(req, res){
    new ClaseInscrito(req.body).save().then(product => res.status(201).send({product}))
        .catch(error => res.status(500).send({error}));
}

function update(req, res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.clase_inscrito) return res.status(404).send({message: "NOT FOUND"});
    let product = req.body.clase_inscrito[0];
    product = Object.assign(product, req.body);
    product.save().then(product => res.status(200).send({message: "UPDATED", product})).catch(error => res.status(500).send({error}));   
}

function remove(req, res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.clase_inscrito) return res.status(404).send({message: "NOT FOUND"});
    req.body.clase_inscrito[0].remove().then(product => res.status(200).send({message: 'REMOVED', product})).catch(error => res.status(500).send({error}));
    
}

function find(req, res, next){
    let query = {};
    query[req.params.key] = req.params.value;
    query['category'] = 'Hogarr';

   console.log("ESTE ES EL QUERY");
       console.log(query);

    ClaseInscrito.find(query).then(clase_inscrito => {
        if(!clase_inscrito.length) return next();
        req.body.clase_inscrito = clase_inscrito;
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