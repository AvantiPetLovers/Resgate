import { PrismaClient } from '@prisma/client'

import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

class LoginController {

    async login(request, response) {
        const { email, password } = request.body
        try {
            const login = await prisma.user.findFirst({
                where: { email }
            })
            if (!login) {
                return response.status(404).json({ error: 'Usuário não encontrado' })
            }

            const match = await bcrypt.compare(password, login.password)
            if (!match) {
                return response.status(401).json({ error: 'Senha invalida' })
            }

            const payload = { id: login.id, email: login.email, access: login.access }
            const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '2h' })
            return response.status(200).json({ data: payload, token: token })

        } catch (error) {
            return response.status(500).json({ error: error.message })
        }
    }
}

export { LoginController }