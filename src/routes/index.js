import { Router } from 'express'
import { LoginController } from '../controller/LoginController.js';
import { PetController } from '../controller/PetController.js';
import { UserController } from '../controller/UserController.js';
import { AdoptionController } from '../controller/AdoptionController.js';
import { verifyAuth, verifyAdminAuth } from '../auth/authMiddleware.js';

const router = Router();


// Login
const loginController = new LoginController();

router.get("/login", loginController.login);



// Pet
const petController = new PetController();

router.post("/pet", verifyAdminAuth, petController.addPet); // Apenas ADMIN pode cadastrar um pet
router.get("/pet", petController.listPets); // Qualquer um pode ver os pets
router.get("/pet/:id", petController.getPetById); // Qualquer um pode ver um pet
router.delete("/pet/:id", verifyAdminAuth, petController.deletePetById); // Apenas ADMIN pode deletar um pet
router.put("/pet/:id", verifyAdminAuth, petController.editPetById); // Apenas ADMIN pode editar um pet


//Adotantes
const userController = new UserController();

router.post("/user", userController.addUser) // Qualquer um pode criar um perfil
router.get("/user", verifyAdminAuth, userController.listUsers); // Apenas ADMIN pode ver todos
router.get("/user/:id", verifyAuth, userController.getUserById); // Adotante pode ver o proprio perfil (TODO: Descobrir como limitar ao proprio perfil)
router.delete("/user/:id",verifyAdminAuth, userController.deleteUserById); // Apenas ADMIN pode deletar
router.put("/user/:id", verifyAuth, userController.editUserById); // Adotante pode editar proprio perfil

//Adoção
const adoptionController = new AdoptionController();

router.post('adoptions', createAdoption);

export { router };