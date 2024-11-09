import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Criar controller de adoção
class AdopterController {
    async createAdoption(request, response) {
    const { pet_id, adopter_id, adopter_date } = request.body;
  
    try {
      const adoption = await prisma.adoption.create({
        data: {
          pet_id,
          adopter_id,
          adopter_date: new Date(adopter_date), //Registro da data de adoção no banco de dados.???
        },
      });
  
      // Implementar lógica para atualizar automaticamente o status do pet para "adotado".
      await prisma.pet.update({
        where: { id: pet_id },
        data: { status: 'ADOPTED' },
      });
  
      response.status(200).json(adoption);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
  };
}