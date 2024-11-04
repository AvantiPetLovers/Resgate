import { Router } from 'express'
import { PetController } from '../controller/PetController.js';

// Não sabia se o import era aqui ou na parte de baixo, segui convenção de lógica de programação e coloquei aqui
import { AdopterController } from '../controller/AdopterController.js';

const router = Router();

const petController = new PetController();

// Rotas de pet
router.post("/pet", petController.addPet);
router.get("/pet", petController.listPets);
router.get("/pet/:id", petController.getPetById);
router.delete("/pet/:id", petController.deletePetById);
router.put("/pet/:id", petController.editPetById);


//Adotantes

const adopterController = new AdopterController();

//Rotas de adopter
router.post("/adopter", adopterController.addAdopter)
router.get("/adopter", adopterController.listAdopters);
router.get("/adopter/:id", adopterController.getAdopterById);
router.delete("/adopter/:id", adopterController.deleteAdopterById);
router.put("/adopter/:id", adopterController.editAdopterById);

export { router };