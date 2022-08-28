"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
const mongoose_1 = require("mongoose");
const employeeSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    workTitle: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
    },
}, {
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
        },
    },
});
const Employee = (0, mongoose_1.model)("Employee", employeeSchema);
exports.Employee = Employee;
//# sourceMappingURL=employeeModel.js.map