import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class AdopterController {

    async listAdopters(request, response) {
        try {
            const adopter = await prisma.adopter.findMany()
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
                }
            })
            return response.status(200).json(adopter)
        } catch (error) {
            return response.status(500).json({ error: error.message })
        }
    }

    async addAdopter(request, response) {
        const { name, email, password, phone } = request.body
        try {
            const adopter = await prisma.adopter.create({
                data: {
                    name, email, password, phone, adress
                }
            })
            return response.status(200).json(adopter)
        } catch (error) {
            return response.status(500).json({ error: error.message })
        }
    }

    async editAdopterById(request, response) {
        const { name, email, password, phone } = request.body
        const { id } = request.params
        try {
            const adopter = await prisma.adopter.update({
                data: {
                    name, email, password, phone, adress
                },
                where: {
                    id
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
                }
            })
            return response.status(200).json(adopter)
        } catch (error) {
            return response.status(500).json({ error: error.message })
        }
    }
}

export { AdopterController }