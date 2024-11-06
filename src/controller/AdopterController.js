import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class AdopterController {

    async listAdopters(request, response) {
        try {
            const adopter = await prisma.adopter.findMany({
                include: {
                    adress: true,
                }
            })
            return response.status(200).json(adopter)
        } catch (error) {
            return response.status(500).json({ error: error.message })
        }
    }

    async getAdopterById(request, response) {
        const { id } = request.params
        try {
            const adopter = await prisma.adopter.findUnique({
                where: {
                    id
                },
                include: {
                    adress: true,
                }
            })
            return response.status(200).json(adopter)
        } catch (error) {
            return response.status(500).json({ error: error.message })
        }
    }

    async addAdopter(request, response) {
        const { name, email, password, phone, adress } = request.body
        try {
            const adopter = await prisma.adopter.create({
                data: {
                    name, email, password, phone,
                    adress: { create: adress }
                },
                include: {
                    adress: true,
                }
            });
            return response.status(200).json(adopter)
        } catch (error) {
            return response.status(500).json({ error: error.message })
        }
    }

    async editAdopterById(request, response) {
        const { name, email, password, phone, adress } = request.body
        const { id } = request.params

        try {
            const adopter = await prisma.adopter.update({
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
            return response.status(200).json(adopter)
        } catch (error) {
            return response.status(500).json({ error: error.message })
        }
    }

    async deleteAdopterById(request, response) {
        const { id } = request.params
        try {
            const adopter = await prisma.adopter.delete({
                where: {
                    id
                },
                include: {
                    adress: true,
                }
            })
            return response.status(200).json(adopter)
        } catch (error) {
            return response.status(500).json({ error: error.message })
        }
    }
}

export { AdopterController }