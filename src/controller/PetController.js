import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class PetController {


    async listPets(request, response) {
        try {
            const pets = await prisma.pet.findMany()
            return response.status(200).json(pets)
        } catch (error) {
            return response.status(500).json({ error: error.message })
        }
    }

    async listAvailablePets(request, response) {
        try {
            const pets = await prisma.pet.findMany({
                where: {
                    status: 'AVAILABLE'
                }
            });
            return response.status(200).json(pets);
        } catch (error) {
            return response.status(500).json({ error: error.message });
        }
    }

    async getPetById(request, response) {
        const { id } = request.params
        try {
            const pet = await prisma.pet.findUnique({
                where: {
                    id
                }
            })
            return response.status(200).json(pet)
        } catch (error) {
            return response.status(500).json({ error: error.message })
        }
    }

    async addPet(request, response) {
        const { name, species, birth_date, description, status, size, personality } = request.body
        try {
            const pet = await prisma.pet.create({
                data: {
                    name, species, birth_date, description, status, size, personality
                }
            })
            return response.status(200).json(pet)
        } catch (error) {
            return response.status(500).json({ error: error.message })
        }
    }

    async editPetById(request, response) {
        const { name, species, birth_date, description, status, size, personality } = request.body
        const { id } = request.params
        try {
            const pet = await prisma.pet.update({
                data: {
                    name, species, birth_date, description, status, size, personality
                },
                where: {
                    id
                }
            })
            return response.status(200).json(pet)
        } catch (error) {
            return response.status(500).json({ error: error.message })
        }
    }

    async deletePetById(request, response) {
        const { id } = request.params
        try {
            const pet = await prisma.pet.delete({
                where: {
                    id
                }
            })
            return response.status(200).json(pet)
        } catch (error) {
            return response.status(500).json({ error: error.message })
        }
    }
}

export { PetController }