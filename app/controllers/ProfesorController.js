const Profesor = require('../models/Profesor');

function index(req, res){
    Profesor.find({})
        .then(profesors => {
                if(profesors.length) return res.status(200).send({profesors});
                return res.status(204).send({message: 'NO CONTENT'});
        }).catch(error => res.status(500).send({error}));
}

function show(req, res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.profesors) return res.status(404).send({message: 'NOT FOUND'}); 
    let profesors = req.body.profesors;
    return res.status(200).send({profesors});   
}

function create(req, res){
    new Profesor(req.body).save().then(product => res.status(201).send({product}))
        .catch(error => res.status(500).send({error}));
}

function update(req, res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.profesors) return res.status(404).send({message: "NOT FOUND"});
    let product = req.body.profesors[0];
    product = Object.assign(product, req.body);
    product.save().then(product => res.status(200).send({message: "UPDATED", product})).catch(error => res.status(500).send({error}));   
}

function remove(req, res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.profesors) return res.status(404).send({message: "NOT FOUND"});
    req.body.profesors[0].remove().then(product => res.status(200).send({message: 'REMOVED', product})).catch(error => res.status(500).send({error}));
}

function find(req, res, next){
    let query = {};
    query["email"] = req.params.email;
    query["password"] = req.params.password;
    //query['category'] = 'Hogarr';

    //console.log("Si LLEGO LA PET JEJE");
    //    console.log(query);

    Profesor.find(query).then(profesors => {
        if(!profesors.length) return next();
        req.body.profesors = profesors;
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