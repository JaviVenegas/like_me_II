const errorMiddleware = (err, req, res, next) => {
    console.error(err,'error desde el middlewar')

    const response = {
        id: '',
        message: '',
        description: '',
    }
    res.status().json(respnse)
}

module.exports = errorMiddleware 