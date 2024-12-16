const { DB} = require('../config/bd');

//funcion para obtenerPost 

const obtenerPost = async () => {
    try{
        const SQLQuery = "SELECT * FROM POSTS"
        const response = await DB.query(SQLQuery);
        return response; 
    }catch (error){
        throw error 
    }
}


//funcion para crearPost 
const crearPost = async (titulo, img, descripcion, likes) => {
    try{
        const SQLQuery = "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *"; 
        const SQLValues = [titulo, img, descripcion, likes];
        
        const { rowCount, rows } = await DB.query(SQLQuery, SQLValues); 
        return { rowCount, rows }; 
    }catch (error){
        throw error
    }
}


//funcion para modificarPost 

const modificarPost = async (id) => {
    try{
        const SQLQuery = "UPDATE posts SET likes = likes + 1 WHERE id =$1 RETURNING *";
        const SQLValues = [id]
        const {rowCount, rows} = await DB.query (SQLQuery, SQLValues)
        return {
            rowCount, rows
        }
    }catch(error){
        throw error 
    }
}

//funcion para eliminarpost 

const eliminarPost = async (id) => {
    try{
        const SQLQuery = "DELETE FROM posts WHERE id =$1 RETURNING *";
        const SQLValues = [id]
        const {rowCount, rows} = await DB.query (SQLQuery, SQLValues)
        return {rowCount, rows}
    } catch (error){
        throw error
    }
}

module.exports = {
    crearPost, obtenerPost, modificarPost, eliminarPost
}
