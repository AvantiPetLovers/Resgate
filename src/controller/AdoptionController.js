import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Criar controller de adoção
class AdoptionController {
    async createAdoption(request, response) {
        const { pet_id, user_id } = request.body;

        try {
            const adoption = await prisma.adoption.create({
                data: {
                    pet_id,
                    user_id,
                },
            });

            // Atualiza automaticamente o status do pet para "adotado"
            await prisma.pet.update({
                where: { id: pet_id },
                data: { status: 'ADOPTED' },
            });

            return response.status(200).json(adoption);

        } catch (error) {
            return response.status(500).json({ error: error.message });
        }
    };

    async listAdoptions(request, response) {

        try {
            const adoptions = await prisma.adoption.findMany();
            return response.status(200).json(adoptions);
        } catch (error) {
            return response.status(500).json({ error: error.message });
        }
    };

    async getAdoptionsByUserId(request, response) {
        const { user_id } = request.params;

        try {
            const adoptions = await prisma.adoption.findMany({
                where: { user_id },
            });
            return response.status(200).json(adoptions);
        } catch (error) {
            return response.status(500).json({ error: error.message });
        }
    }

    async approveAdoption(request, response) {
        const { pet_id, user_id } = request.params;

        try {
            const adoption = await prisma.adoption.update({
                where: { pet_id, user_id },
                data: { status: 'APPROVED' },
            });
            return response.status(200).json(adoption);
        } catch (error) {
            return response.status(500).json({ error: error.message });
        }
    };

    async rejectAdoption(request, response) {
        const { pet_id, user_id } = request.params;

        try {
            const adoption = await prisma.adoption.update({
                where: { pet_id, user_id },
                data: { status: 'REJECTED' },
            });
            return response.status(200).json(adoption);
        } catch (error) {
            return response.status(500).json({ error: error.message });
        }
    };
}

export { AdoptionController }