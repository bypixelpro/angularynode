/* Dependencias implicitas */
const express = require('express');
const cors = require('cors');
const bp = require('body-parser');
const jwt = require('jsonwebtoken');
const config = require('./configs/config');
const MongoClient = require('mongodb').MongoClient;

/* Constantes */
const uri = 'mongodb://username:password@ds249967.mlab.com:49967/todolist';
const app = express();
const api = express.Router();
const auth = express.Router();
const corsOpt = {
      origin: 'http://localhost:4200',
      optionsSuccessStatus: 200,
}

/* Conexión a la base de datos */
MongoClient.connect(uri, {useUnifiedTopology: true}, function(err, data){
    if(err) throw err;
    const db = data.db('todolist');
    const mtareas = db.collection('tareas');
    let musers = db.collection('usuarios');

    let tareas = [];

    mtareas.find({}).toArray(function(err, result){
        tareas = result;
    })

/* APIREST Contenidos*/
app.use(bp.json());
api.use(cors())
api.get('/tareas', cors(corsOpt), (req, res)=>{
    res.json(tareas);
})

api.get('/tareas/:username', cors(corsOpt), (req, res)=>{
    let username = req.params.username;
    let resultado = tareas.filter(tarea => tarea.usuario == username);
    res.json(resultado);
})

api.post('/tarea', cors(corsOpt), (req, res)=>{
    mtareas.insertOne(req.body).then(result =>{
    }).catch(error => console.error(error))
    res.json(req.body);
})


/* APIREST USERS */
auth.use(cors())
auth.post('/login', cors(corsOpt), getusers,(req, res)=>{
    let user = musers.find(user => user.email == req.body.email);
    if(!user)
    senderrorauth(res);
    if (user.password == req.body.password)
    sendtoken(user, res);
    else
    senderrorauth(res);
})

auth.post('/register', cors(corsOpt), getusers, (req, res)=>{
    let index = musers.push(req.body) -1;
    let user = musers[index];
    user._id = index;
    sendtoken(user, res);
})

/* Funciones  */
function getusers(req, res, next){
    musers.find({}).toArray(function(err, result) {
    if (err) throw err;
    musers = result;
    next()
    })
}
function sendtoken(user, res){
    let token = jwt.sign(user._id, config.llave);
    res.json({nombre: user.nombre, token});
}

function senderrorauth(res){
    return res.json({success: false, message: 'Email o password erroneo'});
}

function checkauth(req, res, next){
    if(!req.header('Authorization'))
    return res.status(401).send({message: 'No tienes autorizacion'})
    let token = req.header('authorization').split(' ')[1];
    let decode = jwt.verify(token, config.llave);
    if(!decode)
    return res.status(401).send({message: 'El token no es valido'})
    req.user = decode;
    next();
}

/* Levantar servidor y puerto */
app.use('/api', api);
app.use('/auth', auth);
app.listen(7070);

});
