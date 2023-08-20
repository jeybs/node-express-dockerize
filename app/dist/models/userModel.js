"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const dbcon_1 = require("../dbcon");
const moment_1 = __importDefault(require("moment"));
class UserModel {
    async getAllUser() {
        const results = await dbcon_1.db.promise().query("SELECT * FROM `tbl_users` ORDER BY `id` DESC");
        if (results && results[0].length > 0) {
            return results[0];
        }
        return [];
    }
    async saveUser(name, email, mobile) {
        const dateToday = (0, moment_1.default)(new Date()).format('YYYY-MM-DD HH:mm:ss');
        const insertQuery = "INSERT INTO tbl_users " +
            "(name, email, mobile, date_created) " +
            "VALUES(?, ?, ?, ?)";
        const result = await dbcon_1.db.promise().query(insertQuery, [name, email, mobile, dateToday]);
        if (result != null) {
            if (result[0].affectedRows > 0)
                return true;
        }
        return false;
    }
}
exports.UserModel = UserModel;
