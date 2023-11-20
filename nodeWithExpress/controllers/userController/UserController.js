import { User } from "../../model/User.js";
const users = [];

class UserController {
    createUser({ name, email, password }) {
        const user = new User();
        return new Promise((resolve, reject) => {
            Object.assign(user, {
                name,
                password,
                email
            })
            users.push(user)
            resolve(user)
        })
    }

    listUsers() {
        return new Promise((resolve, _) => {
            resolve(users)
        });
    }

    async listUserById(id) {
        const userId = await users.find(user => user.id === id);
        return userId;
    }

    async listUserByEmail(email) {
        const userEmail = await users.find(user => user.email === email);
        return [userEmail];
    }

    async deleteUserById(id) {
        const index = users.findIndex(user => user.id === id);
        console.log(index);
        if(index > -1) {
            users.splice(index, 1)
        }
    }
}

export { UserController }