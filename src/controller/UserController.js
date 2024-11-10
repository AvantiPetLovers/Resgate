import { PrismaClient } from '@prisma/client'
import bcrypt from "bcrypt"

const prisma = new PrismaClient()

class UserController {

    async listUsers(request, response) {
        try {
            const user = await prisma.user.findMany({
                select: {
                    id: true,
                    name: true,
                    email: true,
                    access: true
                }
            })
            return response.status(200).json(user)
        } catch (error) {
            return response.status(500).json({ error: error.message })
        }
    }

    async getUserById(request, response) {
        const { id } = request.params;
        try {
            const user = await prisma.user.findUnique({
                select: {
                    id: true,
                    name: true,
                    email: true,
                    access: true,
                    phone: true,
                    adress: {
                        select: {
                            street: true,
                            number: true,
                            neighborhood: true,
                            city: true
                        }
                    }
                },
                where: { id }
            });
            return response.status(200).json(user);
        } catch (error) {
            return response.status(500).json({ error: error.message });
        }
    }


    async addUser(request, response) {
        const { name, email, password, phone, adress } = request.body

        const newData = {
            ...((name && { name }) || {}),
            ...((email && { email }) || {}),
            ...((phone && { phone }) || {}),
            ...((password && { password: await bcrypt.hash(password, 10) }) || {}),
        };
        if (adress) {
            newData.adress = {
                create: {
                    street: adress.street,
                    number: adress.number,
                    neighborhood: adress.neighborhood,
                    city: adress.city,
                }
            };
        }

        try {
            const user = await prisma.user.create({
                data: newData,
                select: {
                    id: true,
                    name: true,
                    email: true,
                    access: true,
                    phone: true,
                    adress: { 
                        select: {
                            street: true,
                            number: true,
                            neighborhood: true,
                            city: true
                        }
                    }
                }
            });
            return response.status(200).json(user)
        } catch (error) {
            return response.status(500).json({ error: error.message })
        }
    }

    async editUserById(request, response) {
        const { id } = request.params
        const { name, email, password, phone, adress } = request.body

        const newData = {
            ...((name && { name }) || {}),
            ...((email && { email }) || {}),
            ...((phone && { phone }) || {}),
            ...((password && { password: await bcrypt.hash(password, 10) }) || {}),
        };

        if (adress) {
            newData.adress = {
                update: {
                    street: adress.street,
                    number: adress.number,
                    neighborhood: adress.neighborhood,
                    city: adress.city,
                }
            }
        }

        try {
            const user = await prisma.user.update({
                data: newData,
                select: {
                    id: true,
                    name: true,
                    email: true,
                    access: true,
                    phone: true,
                    adress: {
                        select: {
                            street: true,
                            number: true,
                            neighborhood: true,
                            city: true
                        }
                    }
                },
                where: { id }
            })
            return response.status(200).json(user)
        } catch (error) {
            return response.status(500).json({ error: error.message })
        }
    }

    async deleteUserById(request, response) {
        const { id } = request.params
        try {
            await prisma.user.delete({
                where: { id }
            })
            return response.status(200).json({ message: 'Usuario excluído com sucesso' })
        } catch (error) {
            return response.status(500).json({ error: error.message })
        }
    }
}

export { UserController }