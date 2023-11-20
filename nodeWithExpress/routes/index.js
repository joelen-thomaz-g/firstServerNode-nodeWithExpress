import { Router } from 'express';
import { UserController } from '../controllers/userController/UserController.js';

const routes = Router();

const user = new UserController();

routes.post("/user", async (req, res) => {
    const { name, email, password } = req.body;
    const newUser = await user.createUser({ name, email, password });
    res.status(201).json(newUser);
})

routes.get("/user", async (req, res) => {
    const allUsers = await user.listUsers();
    res.status(200).json(allUsers)
})

routes.get("/user/:id", async (req, res) => {
    const {id} = req.params;
    const userId = await user.listUserById(id);
    res.status(200).json(userId);
})

routes.get("/user/email/:email", async (req, res) => {
    const {email} = req.params;
    const userEmail = await user.listUserByEmail(email);
    if(!userEmail) {
        res.status(400).json("Email não encontrado!");
    } else {
    res.status(200).json([userEmail]);
}
})

routes.delete("/user/:id", (req, res) => {
    const {id} = req.params;
    const deleteUser = user.deleteUserById(id);
    if(!deleteUser) {
        res.status(400).json("Usuário não existe");
    } else {
        res.status(204).json("Usuário deletado com sucesso");
    }
})

export { routes }

