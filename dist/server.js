"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
console.log(port);
app.get('/', (req, res) => {
    console.log("Runnig");
    res.send("Running");
});
http_1.default.createServer(app).listen(port, () => {
    console.log(`Running at port ${port}`);
});