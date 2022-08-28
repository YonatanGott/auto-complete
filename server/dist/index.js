"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const mongo_config_1 = require("./config/mongo.config");
const initialDatabase_1 = require("./utils/initialDatabase");
// express app
const app = (0, express_1.default)();
const corsConfig = {
    origin: true,
    credentials: true,
};
app.use((0, cors_1.default)(corsConfig));
app.options('*', (0, cors_1.default)(corsConfig));
// middleware
app.use(express_1.default.json());
// routes
app.use("/", (0, index_1.default)());
// connect to database
(0, mongo_config_1.initMongoDB)();
// This is for initial database population with dummy data - comment next line if not needed
(0, initialDatabase_1.initialDatabase)();
// app
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map