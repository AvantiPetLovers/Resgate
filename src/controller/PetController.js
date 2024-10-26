import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class PetController {

    async findPets(request, response) {
        try {
            const pets = await prisma.pet.findMany()
            return response.status(200).json(pets)
        } catch (error) {
            return response.status(500).json({ error: error.message })
        }

    }

    async savePet(request, response) {
        const { name, species } = request.body
        try {
            const pet = await prisma.pet.create({
                data: {
                    name,
                    species
                }
            })
            return response.status(200).json(pet)
        } catch (error) {
            return response.status(500).json({ error: error.message })
        }
    }

}

export { PetController }