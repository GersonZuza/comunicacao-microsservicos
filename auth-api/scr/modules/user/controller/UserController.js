import UserServices from "../services/UserServices.js";

class UserControler {
    async getAccessToken(req, res) {
        let accesToken = await UserServices.getAccessToken(req)
        return res.status(accesToken.status).json(user);
    }

async findByEmail(req, res) {
    let user = await UserServices.findByEmail(req);
    return res.status(user.status).json(user);
}

}

export default new UserControler();