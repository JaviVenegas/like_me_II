const Posts = require('../models/posts');


const handleObtenerPosts = async (req, res, next) => {
    try{
        const response = await Posts.obtenerPost();
        res.status(200).json({
            msg: 'Posts obtenidos con exito',
            data: response
        });
    }catch(error){
        next (error)
    }
}



const handleCrearPost = async (req, res, next) => {
    try{
        const { titulo, img, descripcion } = req.body;
        const response = await Posts.crearPost(titulo, img, descripcion);
        res.status(200).json({
            msg: 'post creado con exito',
            data: response
        });
    }catch(error){
        next (error)
    }
}

const handleModificarPost = async (req, res, next) => {
    try{
        const {id} = req.params //otra forma de escribir const id = req.param.idpost    
        const {likes} = req.body
    
        
        const response = await Posts.modificarPost(id, likes);
        res.status(200).json({
            msg: 'post modificado con exito',
            data: response
        });
    }catch(error){
        next (error)
    }

}

const handleEliminarPost = async (req, res, next) => {
    try{
        const {id} = req.params //otra forma de escribir const id = req.param.idpost    
        
        const exists = await Posts.existePost(id)
        if(!exists){
            throw new Error('Post_Eliminado_No_Encontrado', { cause: 'Error en la base de datos'})
        }


        const response = await Posts.eliminarPost (id);
        res.status(200).json({
            msg: 'post eliminado',
            data: response
        });
    }catch(error){
        //console.log (error)
        next (error)
    }

}




module.exports = {
    handleCrearPost, handleObtenerPosts, handleModificarPost, handleEliminarPost
}
