const Alumno = require('../models/Alumno');

function index(req, res){
    Alumno.find({})
        .then(alumnos => {
                if(alumnos.length) return res.status(200).send({alumnos});
                return res.status(204).send({message: 'NO CONTENT'});
        }).catch(error => res.status(500).send({error}));
}

function show(req, res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.alumnos) return res.status(404).send({message: 'NOT FOUND'}); 
    let alumnos = req.body.alumnos;
    return res.status(200).send({alumnos});   
}

function create(req, res){
    new Alumno(req.body).save().then(alumno => res.status(201).send({alumno}))
        .catch(error => res.status(500).send({error}));
}

function update(req, res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.alumnos) return res.status(404).send({message: "NOT FOUND"});
    let product = req.body.alumnos[0];
    product = Object.assign(product, req.body);
    product.save().then(product => res.status(200).send({message: "UPDATED", product})).catch(error => res.status(500).send({error}));   
}

function remove(req, res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.alumnos) return res.status(404).send({message: "NOT FOUND"});
    req.body.alumnos[0].remove().then(product => res.status(200).send({message: 'REMOVED', product})).catch(error => res.status(500).send({error}));
}

function find(req, res, next){
    let query = {};
    query["id"] = req.params.id;
    //query['category'] = 'Hogarr';

    //console.log("Si LLEGO LA PET JEJE");
    //    console.log(query);

    Alumno.find(query).then(alumnos => {
        if(!alumnos.length) return next();
        req.body.alumnos = alumnos;
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