"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./db/connectToDB");
const express_1 = __importDefault(require("express"));
const customers_1 = __importDefault(require("./routes/customers"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const port = process.env.PORT || 9000;
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)({
    credentials: true,
    origin: `${process.env.CLIENT}`,
}));
app.use("/", customers_1.default);
app.listen(port, () => console.log(`app is listening on port ${process.env.PORT}`));
