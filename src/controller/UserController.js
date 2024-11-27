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
                    img: true,
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
                    img: true,
                    email: true,
                    access: true,
                    phone: true,
                    street: true,
                    number: true,
                    neighborhood: true,
                    city: true
                },
                where: { id }
            });
            return response.status(200).json(user);
        } catch (error) {
            return response.status(500).json({ error: error.message });
        }
    }


    async addUser(request, response) {
        const { name,img, email, password, phone, street, number, neighborhood, city } = request.body;

        const newData = {
            name,
            img,
            email,
            phone,
            street,
            number,
            neighborhood,
            city,
            ...(password && { password: await bcrypt.hash(password, 10) }),
        };

        try {
            const user = await prisma.user.create({
                data: newData,
                select: {
                    id: true,
                    name: true,
                    img: true,
                    email: true,
                    access: true,
                    phone: true,
                    street: true,
                    number: true,
                    neighborhood: true,
                    city: true,
                },
            });
            return response.status(200).json(user);
        } catch (error) {
            return response.status(500).json({ error: error.message });
        }
    }


    async editUserById(request, response) {
        const { id } = request.params;
        const { name, img, email, password, phone, street, number, neighborhood, city } = request.body;

        const newData = {
            name,
            img,
            email,
            phone,
            street,
            number,
            neighborhood,
            city,
            ...(password && { password: await bcrypt.hash(password, 10) }),
        };

        try {
            const user = await prisma.user.update({
                where: { id },
                data: newData,
                select: {
                    id: true,
                    name: true,
                    img: true,
                    email: true,
                    access: true,
                    phone: true,
                    street: true,
                    number: true,
                    neighborhood: true,
                    city: true,
                },
            });

            return response.status(200).json(user);
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