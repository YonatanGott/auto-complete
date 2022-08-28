"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchEmployees = exports.deleteEmployee = exports.updateEmployee = exports.getEmployees = exports.addEmployee = void 0;
const employeeModel_1 = require("../models/employee/employeeModel");
const addEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, workTitle, imageUrl } = req.body;
        const nameExists = yield employeeModel_1.Employee.findOne({ name: name });
        if (nameExists) {
            res.status(406).json({ "error": 'Name already in use' });
        }
        const employee = yield employeeModel_1.Employee.create({ name, workTitle, imageUrl });
        res.status(201).json(employee);
    }
    catch (error) {
        res.status(500).json({ "error": error });
    }
});
exports.addEmployee = addEmployee;
const getEmployees = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const employees = yield employeeModel_1.Employee.find();
        res.status(200).json(employees);
    }
    catch (error) {
        res.status(500).json({ "error": error });
    }
});
exports.getEmployees = getEmployees;
const updateEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, name, workTitle, imageUrl } = req.body;
        const employeeExists = yield employeeModel_1.Employee.findById(id);
        if (!employeeExists) {
            res.status(404).json({ "error": 'Employee not found' });
        }
        const employee = yield employeeModel_1.Employee.findByIdAndUpdate(id, { name, workTitle, imageUrl });
        res.status(201).json(employee);
    }
    catch (error) {
        res.status(500).json({ "error": error });
    }
});
exports.updateEmployee = updateEmployee;
const deleteEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield employeeModel_1.Employee.findByIdAndDelete(id);
        res.status(204);
    }
    catch (error) {
        res.status(500).json({ "error": error });
    }
});
exports.deleteEmployee = deleteEmployee;
const searchEmployees = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = req.query.query;
        const limit = Number(req.query.limit);
        const results = yield employeeModel_1.Employee.find({ $or: [{ name: { $regex: `${query}`, $options: 'i' } }, { workTitle: { $regex: `${query}`, $options: 'i' } }] }).limit(limit);
        res.status(200).json(results);
    }
    catch (error) {
        res.status(500).json({ "error": error });
    }
});
exports.searchEmployees = searchEmployees;
//# sourceMappingURL=employeesController.js.map