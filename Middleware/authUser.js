const jwt = require('jsonwebtoken');

const authToken = (req, res, next) => {
    const { authorization } = req.headers
    try {
        const token = authorization.split(" ")[1]
        const decoded = jwt.verify(token, process.env.TOKEN)
        const { id } = decoded
        req.id = id
        next()
    } catch (error) {
        res.send('Invalited Token')
    }
}

module.exports=authToken