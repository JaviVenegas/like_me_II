
//este archivo es para definir los endpoints 

const { Router } = require ('express');   //exportando el router de express para ser usado. 
const {handleObtenerPosts, handleCrearPost, handleModificarPost, handleEliminarPost} = require('../controllers/index');  //importamos los controladores que continene la logica para manejar las solicitudes a los endpoints correspondientes. 

const router = Router();

router.get('/posts', handleObtenerPosts);  //obtener post 
router.post('/posts', handleCrearPost);  //crear un nuevo post 
router.put('/posts/:id', handleModificarPost);  //modificar un nuevo post 
router.delete('/posts/:id', handleEliminarPost);  //modificar un nuevo post 



module.exports = router; 
