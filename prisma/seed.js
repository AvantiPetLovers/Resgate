import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Delete all existing records
    await prisma.adoption.deleteMany();
    await prisma.pet.deleteMany();
    await prisma.user.deleteMany();

    // Usuários
    await prisma.user.createMany({
        data: [
            {
                name: 'Jheyele',
                img: 'https://avatars.githubusercontent.com/u/27314825?v=4',
                email: 'jheyele@jheyele.com',
                password: 'senha123',
                phone: '11987654321',
                street: 'Rua das Flores',
                number: '100',
                neighborhood: 'Centro',
                city: 'São Paulo',
            },
            {
                name: 'Joedo',
                img: 'https://avatars.githubusercontent.com/u/16735088?v=4',
                email: 'joedo@joedo.com',
                password: 'senha123',
                phone: '21912345678',
                street: 'Avenida Brasil',
                number: '200',
                neighborhood: 'Zona Sul',
                city: 'Rio de Janeiro',
            },
            {
                name: 'Alyne',
                img: 'https://avatars.githubusercontent.com/u/22006756?v=4',
                email: 'alyne@alyne.com',
                password: 'senha123',
                phone: '21976543210',
                street: 'Rua do Amor',
                number: '150',
                neighborhood: 'Zona Norte',
                city: 'Rio de Janeiro',
            },
            {
                name: 'Ricardo',
                img: 'https://avatars.githubusercontent.com/u/88405145?v=4',
                email: 'ricardo@ricardo.com',
                password: 'senha123',
                phone: '21998765432',
                street: 'Avenida Copacabana',
                number: '300',
                neighborhood: 'Zona Sul',
                city: 'Rio de Janeiro',
            },
            {
                name: 'Ivan',
                img: 'https://avatars.githubusercontent.com/u/134899476?v=4',
                email: 'ivan@ivan.com',
                password: 'senha123',
                phone: '21987654321',
                street: 'Rua do Comércio',
                number: '250',
                neighborhood: 'Centro',
                city: 'Rio de Janeiro',
            },
            {
                name: 'Michele',
                img: 'https://avatars.githubusercontent.com/u/122487936?v=4',
                email: 'michele@michele.com',
                password: 'senha123',
                phone: '21911223344',
                street: 'Avenida Atlântica',
                number: '500',
                neighborhood: 'Zona Sul',
                city: 'Rio de Janeiro',
            },
            {
                name: 'Adrielle',
                img: 'https://avatars.githubusercontent.com/u/36175845?v=4',
                email: 'adrielle@adrielle.com',
                password: 'senha123',
                phone: '21944556677',
                street: 'Rua do Meio',
                number: '400',
                neighborhood: 'Zona Norte',
                city: 'Rio de Janeiro',
            },
        ],
    });

    // Pets
    await prisma.pet.createMany({
        data: [
            {
                name: 'Rex',
                img: 'https://i.imgur.com/XgbZdeA.jpeg',
                species: 'DOG',
                birth_date: new Date('2022-01-10'),
                description: 'Um cachorro brincalhão e amigável.',
                status: 'AVAILABLE',
                size: 'MEDIUM',
                personality: 'PLAYFUL',
            },
            {
                name: 'Mimi',
                img: 'https://i.imgur.com/Jvh1OQm.jpeg',
                species: 'CAT',
                birth_date: new Date('2021-06-20'),
                description: 'Uma gata calma e carinhosa.',
                status: 'ADOPTED',
                size: 'SMALL',
                personality: 'LOVING',
            },
            {
                name: 'Fifi',
                img: 'https://i.imgur.com/7DCeduJ.jpeg',
                species: 'CAT',
                birth_date: new Date('2021-06-20'),
                description: 'Uma gata brincalhão e alegre.',
                status: 'AVAILABLE',
                size: 'SMALL',
                personality: 'PLAYFUL',
            },
            {
                name: 'Luna',
                img: 'https://i.imgur.com/fSHVB4W.jpeg',
                species: 'CAT',
                birth_date: new Date('2021-06-20'),
                description: 'Uma gata calma e carinhosa.',
                status: 'AVAILABLE',
                size: 'SMALL',
                personality: 'LOVING',
            },
            {
                name: 'Mickelangelo',
                img: 'https://i.imgur.com/gsf0kar.jpeg',
                species: 'TURTLE',
                birth_date: new Date('2021-06-20'),
                description: 'Uma tartaruga calma e curiosa.',
                status: 'AVAILABLE',
                size: 'SMALL',
                personality: 'CURIOUS',
            },
            {
                name: 'Almofadas',
                img: 'https://i.imgur.com/JzZm5r2.jpeg',
                species: 'RABBIT',
                birth_date: new Date('2021-06-20'),
                description: 'Um coelho brincalhão e alegre.',
                status: 'AVAILABLE',
                size: 'SMALL',
                personality: 'PLAYFUL',
            },
            {
                name: 'Pontas',
                img: 'https://i.imgur.com/X7VJ5xj.jpeg',
                species: 'RABBIT',
                birth_date: new Date('2021-06-20'),
                description: 'Um coelho calmo e carinhoso.',
                status: 'AVAILABLE',
                size: 'SMALL',
                personality: 'LOVING',
            },
            {
                name: 'Max',
                img: 'https://i.imgur.com/9iwk1so.jpeg',
                species: 'DOG',
                birth_date: new Date('2020-12-05'),
                description: 'Um cachorro protetor e leal.',
                status: 'AVAILABLE',
                size: 'LARGE',
                personality: 'LOYAL',
            },
            {
                name: 'Bella',
                img: 'https://i.imgur.com/0bfJErK.jpeg',
                species: 'DOG',
                birth_date: new Date('2019-07-22'),
                description: 'Uma cachorra dócil e tranquila.',
                status: 'AVAILABLE',
                size: 'MEDIUM',
                personality: 'CALM',
            },
        ],
    });

    // Adoções
    const usuarios = await prisma.user.findMany();
    const pets = await prisma.pet.findMany();

    await prisma.adoption.createMany({
        data: [
            {
                pet_id: pets.find(pet => pet.name === 'Mimi').id,
                user_id: usuarios.find(user => user.email === 'michele@michele.com').id,
                status: 'APPROVED',
                adoption_date: new Date(),
            },
            {
                pet_id: pets.find(pet => pet.name === 'Rex').id,
                user_id: usuarios.find(user => user.email === 'ricardo@ricardo.com').id,
                status: 'PENDING',
                adoption_date: new Date(),
            },
            {
                pet_id: pets.find(pet => pet.name === 'Luna').id,
                user_id: usuarios.find(user => user.email === 'adrielle@adrielle.com').id,
                status: 'PENDING',
                adoption_date: new Date(),
            },
            {
                pet_id: pets.find(pet => pet.name === 'Luna').id,
                user_id: usuarios.find(user => user.email === 'michele@michele.com').id,
                status: 'PENDING',
                adoption_date: new Date(),
            },
        ],
    });

    console.log('Banco de dados populado com sucesso!');
}

main()
    .catch((e) => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });

