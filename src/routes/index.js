import { Router } from 'express'
import { PetController } from '../controller/PetController.js';

const router = Router();

const petController = new PetController();

// Rotas de pet
router.post("/pet", petController.addPet);
router.get("/pet", petController.listPets);
router.get("/pet/:id", petController.getPetById);
router.delete("/pet/:id", petController.deletePetById);
router.put("/pet/:id", petController.editPetById);

export { router };