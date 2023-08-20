import { FieldPacket, RowDataPacket } from "mysql2";
import { db } from "../dbcon";
import moment from "moment"

export class UserModel {

    async getAllUser() {
        const results = await db.promise().query("SELECT * FROM `tbl_users` ORDER BY `id` DESC")

        if(results && (results[0] as any).length > 0) {
			return results[0]
		}

        return [] 
    }

    async saveUser(name: string, email: string, mobile: string) {
        const dateToday = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')

        const insertQuery = "INSERT INTO tbl_users " +
            "(name, email, mobile, date_created) " +
            "VALUES(?, ?, ?, ?)"

        const result: RowDataPacket[] | RowDataPacket | FieldPacket = await db.promise().query(insertQuery, 
            [name, email, mobile, dateToday])

        if(result != null) {
            if(result[0].affectedRows > 0) return true
        }
        
        return false 
    }

}