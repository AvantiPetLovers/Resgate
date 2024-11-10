import { Router } from 'express'
import { PetController } from '../controller/PetController.js';
import { AdopterController } from '../controller/AdopterController.js';

const router = Router();


// Pet
const petController = new PetController();

router.post("/pet", petController.addPet);
router.get("/pet", petController.listPets);
router.get("/pet/disponiveis", petController.listAvailablePets);
router.get("/pet/:id", petController.getPetById);
router.delete("/pet/:id", petController.deletePetById);
router.put("/pet/:id", petController.editPetById);


//Adotantes
const adopterController = new AdopterController();

router.post("/adopter", adopterController.addAdopter)
router.get("/adopter", adopterController.listAdopters);
router.get("/adopter/:id", adopterController.getAdopterById);
router.delete("/adopter/:id", adopterController.deleteAdopterById);
router.put("/adopter/:id", adopterController.editAdopterById);



export { router };