import { Router } from 'express'
import { PetController } from '../controller/PetController.js';

const router = Router();

const petController = new PetController();

// Rotas de pet
router.post("/pet", petController.savePet);
router.get("/pet", petController.findPets);

export { router };