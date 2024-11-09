import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// TODO: Adicionar o JOI para validações


class UserController {

    async listUsers(request, response) {
        try {
            const user = await prisma.user.findMany({
                include: {
                    adress: true,
                }
            })
            return response.status(200).json(user)
        } catch (error) {
            return response.status(500).json({ error: error.message })
        }
    }

    async getUserById(request, response) {
        const { id } = request.params
        try {
            const user = await prisma.user.findUnique({
                where: {
                    id
                },
                include: {
                    adress: true,
                }
            })
            return response.status(200).json(user)
        } catch (error) {
            return response.status(500).json({ error: error.message })
        }
    }

    async addUser(request, response) {
        const { name, email, password, phone, adress } = request.body
        encryptedPassword = await bcrypt.hash(password, 10)
        try {
            const user = await prisma.user.create({
                data: {
                    name, email, phone,
                    password: encryptedPassword,
                    adress: { create: adress }
                },
                select: {
                    name: true,
                    email: true,
                    phone: true,
                },
                include: {
                    adress: true,
                }
            });
            return response.status(200).json(user)
        } catch (error) {
            return response.status(500).json({ error: error.message })
        }
    }

    async editUserById(request, response) {
        const { name, email, password, phone, adress } = request.body
        const { id } = request.params

        try {
            const user = await prisma.user.update({
                data: {
                    name, email, password, phone,
                    adress: {
                        update: {
                            street: adress.street,
                            number: adress.number,
                            neighborhood: adress.neighborhood,
                            city: adress.city,
                        },
                    },
                },
                where: {
                    id
                },
                include: {
                    adress: true,
                }
            })
            return response.status(200).json(user)
        } catch (error) {
            return response.status(500).json({ error: error.message })
        }
    }

    async deleteUserById(request, response) {
        const { id } = request.params
        try {
            const user = await prisma.user.delete({
                where: {
                    id
                },
                include: {
                    adress: true,
                }
            })
            return response.status(200).json(user)
        } catch (error) {
            return response.status(500).json({ error: error.message })
        }
    }
}

export { UserController }