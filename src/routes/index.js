import { Router } from 'express'
import { LoginController } from '../controller/LoginController.js';
import { PetController } from '../controller/PetController.js';
import { UserController } from '../controller/UserController.js';
import { AdoptionController } from '../controller/AdoptionController.js';
import { verifyAuth, verifyAdminAuth } from '../auth/authMiddleware.js';

const router = Router();


// Login
const loginController = new LoginController();

router.post("/login", loginController.login); // DOUBT? Pq isso é um POST e nao GET?



// Pet
const petController = new PetController();

router.post("/pet", verifyAdminAuth, petController.addPet); // Apenas ADMIN pode cadastrar um pet
router.get("/pet", petController.listPets); // Qualquer um pode ver os pets
router.get('/pets/available', petController.listAvailablePets); // Qualquer um pode ver os pets disponíveis
router.get("/pet/:id", petController.getPetById); // Qualquer um pode ver um pet
router.delete("/pet/:id", verifyAdminAuth, petController.deletePetById); // Apenas ADMIN pode deletar um pet
router.put("/pet/:id", verifyAdminAuth, petController.editPetById); // Apenas ADMIN pode editar um pet



// Adotantes
const userController = new UserController();

router.post("/user", userController.addUser) // Qualquer um pode criar um perfil
router.get("/user", verifyAdminAuth, userController.listUsers); // Apenas ADMIN pode ver todos
router.get("/user/:id", verifyAuth, userController.getUserById); // Adotante deve poder ver o proprio perfil // TODO: Limitar ao proprio perfil de adotante logado
router.delete("/user/:id", verifyAdminAuth, userController.deleteUserById); // Apenas ADMIN pode deletar
router.put("/user/:id", verifyAdminAuth, userController.editUserById); // Adotante deve poder editar proprio perfil // TODO: Limitar ao proprio perfil de adotante logado



// Adoção
const adoptionController = new AdoptionController();

router.get('/adoption', verifyAdminAuth, adoptionController.listAdoptions); // Apenas ADMIN pode ver todas
router.get('/adoption/:id', verifyAdminAuth, adoptionController.getAdoptionById); // Apenas ADMIN pode ver uma adoção
router.post('/adoption', verifyAdminAuth, adoptionController.createAdoption); // Apenas ADMIN pode criar uma adoção

export { router };