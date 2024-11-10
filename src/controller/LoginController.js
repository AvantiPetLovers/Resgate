import { PrismaClient } from '@prisma/client'

import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

class LoginController {

    async login(request, response) {
        const { email, password } = request.body

        // Garante que o admin sempre esta cadastrado
        // TODO: Melhorar essa solucão antes de publicar
        if (email === "admin@admin.com" && password === "admin123") {
            if (await prisma.user.findFirst({ where: { email } })) {
                await prisma.user.delete({ where: { email } })
            }
            const encryptedPassword = await bcrypt.hash(password, 10)
            const adminUser = await prisma.user.create({
                data: {
                    email: 'admin@admin.com',
                    name: 'Super Administrador',
                    password: encryptedPassword,
                    access: 'ADMIN',
                }
            })
            const payload = { id: adminUser.id, email: adminUser.email, access: adminUser.access }
            const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '2h' })
            return response.status(200).json({ data: payload, token: token })
        }


        try {
            const user = await prisma.user.findFirst({
                where: { email }
            })
            if (!user) {
                return response.status(404).json({ error: 'Usuário não encontrado' })
            }

            const match = await bcrypt.compare(password, user.password)
            if (!match) {
                return response.status(401).json({ error: 'Senha invalida' })
            }

            const payload = { id: user.id, email: user.email, access: user.access }
            const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '2h' })
            return response.status(200).json({ data: payload, token: token })

        } catch (error) {
            return response.status(500).json({ error: error.message })
        }
    }
}

export { LoginController }