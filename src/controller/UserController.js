import { PrismaClient } from '@prisma/client'
import bcrypt from "bcrypt"

const prisma = new PrismaClient()

// TODO: Adicionar o JOI para validações


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
        const { id } = request.params
        try {
            const user = await prisma.user.findUnique({
                where: { id },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    access: true,
                    adopter: {
                        select: {
                            phone: true,
                            adress: {
                                select: {
                                    street: true,
                                    number: true,
                                    neighborhood: true,
                                    city: true
                                }
                            },
                            pets: {
                                select: {
                                    name: true,
                                    species: true,
                                }
                            }
                        }
                    }
                }
            })
            return response.status(200).json(user)
        } catch (error) {
            return response.status(500).json({ error: error.message })
        }
    }

    async addUser(request, response) {
        const { name, email, password, phone, adress } = request.body
        const encryptedPassword = await bcrypt.hash(password, 10)
        try {
            const user = await prisma.user.create({
                data: {
                    name, email,
                    password: encryptedPassword,
                    adopter: {
                        create: {
                            phone,
                            adress: {
                                create: {
                                    // TODO: Checar se isso esta funcionando
                                    street: adress.street,
                                    number: adress.number,
                                    neighborhood: adress.neighborhood,
                                    city: adress.city,
                                }
                            }
                        }
                    }
                },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    access: true,
                    adopter: {
                        select: {
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
                    }
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
        const encryptedPassword = await bcrypt.hash(password, 10)
        try {
            const user = await prisma.user.update({
                data: {
                    name, email,
                    password: encryptedPassword,
                    adopter: {
                        update: {
                            phone,
                            adress: {
                                update: {
                                    // TODO: Checar se isso esta funcionando
                                    street: adress.street,
                                    number: adress.number,
                                    neighborhood: adress.neighborhood,
                                    city: adress.city,
                                }
                            }
                        }
                    }
                },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    access: true,
                    adopter: {
                        select: {
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
                where: { id },
            })
            return response.status(200).json({ message: 'Usuario excluído com sucesso' })
        } catch (error) {
            return response.status(500).json({ error: error.message })
        }
    }
}

export { UserController }