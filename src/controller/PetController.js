import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class PetController {


    async listPets(request, response) {
        try {
            const { species, status, min_age, max_age, size, personality } = request.query;

            const filters = {
                ...(size && { size }),
                ...(personality && { personality }),
                ...(species && { species }),
                ...(status && { status }),
            };

            if (min_age || max_age) {
                const currentDate = new Date();
                filters.birth_date = {};

                if (min_age) {
                    filters.birth_date.lte = new Date(
                        currentDate.getFullYear() - parseInt(min_age),
                        currentDate.getMonth(),
                        currentDate.getDate()
                    );
                }

                if (max_age) {
                    filters.birth_date.gte = new Date(
                        currentDate.getFullYear() - parseInt(max_age),
                        currentDate.getMonth(),
                        currentDate.getDate()
                    );
                }
            }

            const pets = await prisma.pet.findMany({
                where: filters
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
                where: { id }
            })
            return response.status(200).json(pet)
        } catch (error) {
            return response.status(500).json({ error: error.message })
        }
    }

    async addPet(request, response) {
        const { name, img, species, birth_date, description, status, size, personality } = request.body
        try {
            const pet = await prisma.pet.create({
                data: {
                    name,
                    img,
                    species,
                    birth_date,
                    description,
                    status,
                    size,
                    personality
                }
            })
            return response.status(200).json(pet)
        } catch (error) {
            return response.status(500).json({ error: error.message })
        }
    }

    async editPetById(request, response) {
        const { name, img, species, birth_date, description, status, size, personality } = request.body
        const { id } = request.params
        try {
            const pet = await prisma.pet.update({
                data: {
                    name,
                    img,
                    species,
                    birth_date,
                    description,
                    status,
                    size,
                    personality
                },
                where: { id }
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
                where: { id }
            })
            return response.status(200).json({ message: 'Pet excluído com sucesso' })
        } catch (error) {
            return response.status(500).json({ error: error.message })
        }
    }
}

export { PetController }