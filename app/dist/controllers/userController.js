"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const userModel_1 = require("../models/userModel");
const userModel = new userModel_1.UserModel();
class UserController {
    async getUserList(req, res) {
        const list = await userModel.getAllUser();
        return res.json(list);
    }
    async createUser(req, res) {
        console.log(`Name => ${req.body.name}`);
        console.log(`Email => ${req.body.email}`);
        console.log(`Mobile => ${req.body.mobile}`);
        const name = req.body.name;
        const email = req.body.email;
        const mobile = req.body.mobile;
        const createResp = await userModel.saveUser(name, email, mobile);
        console.log(createResp);
        if (createResp === true) {
            res.status(201).json({ message: "User Created" });
        }
        else {
            res.status(400).json({ message: "Uset not created" });
        }
    }
}
exports.UserController = UserController;
