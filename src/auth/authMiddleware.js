import jwt from 'jsonwebtoken'


export function verifyAuth(request, response, next) {
    const { authorization } = request.headers
    if (!authorization) {
        return response.status(401).json({ error: 'Token ausente' })
    }
    const [, token] = authorization.split(' ')
    try {
        const { id } = jwt.verify(token, process.env.JWT_SECRET)
        if (!id) {
            return response.status(401).json({ error: 'Não autorizado' })
        }
        next()
    } catch (error) {
        return response.status(500).json({ error: error.message })
    }
}


export function verifyAdminAuth(request, response, next) {
    const { authorization } = request.headers
    if (!authorization) {
        return response.status(401).json({ error: 'Token ausente' })
    }
    const [, token] = authorization.split(' ')
    try {
        const { perfil } = jwt.verify(token, process.env.JWT_SECRET)
        if (perfil !== 'ADMIN') {
            return response.status(403).json({ error: 'Não autorizado' })
        }
        next()
    } catch (error) {
        return response.status(500).json({ error: error.message })
    }
}
