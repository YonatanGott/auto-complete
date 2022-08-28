import { Request, Response, NextFunction } from "express";
import { Employee } from "../models/employee/employeeModel";

export const addEmployee = async (req: Request, res: Response) => {
    try {
        const { name, workTitle, imageUrl } = req.body
        const nameExists = await Employee.findOne({ name: name })
        if (nameExists) {
            res.status(406).json({ "error": 'Name already in use' })
        }
        const employee = await Employee.create({ name, workTitle, imageUrl })

        res.status(201).json(employee);
    } catch (error) {
        res.status(500).json({ "error": error });
    }
}

export const getEmployees = async (req: Request, res: Response) => {
    try {
        const employees = await Employee.find()
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ "error": error });
    }
}

export const updateEmployee = async (req: Request, res: Response) => {
    try {
        const { id, name, workTitle, imageUrl } = req.body
        const employeeExists = await Employee.findById(id)
        if (!employeeExists) {
            res.status(404).json({ "error": 'Employee not found' })
        }
        const employee = await Employee.findByIdAndUpdate(id, { name, workTitle, imageUrl })
        res.status(201).json(employee);
    } catch (error) {
        res.status(500).json({ "error": error });
    }
}

export const deleteEmployee = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        await Employee.findByIdAndDelete(id)
        res.status(204)
    } catch (error) {
        res.status(500).json({ "error": error });
    }
}

export const searchEmployees = async (req: Request, res: Response) => {
    try {
        const query = req.query.query
        const limit = Number(req.query.limit)
        const results = await Employee.find({ $or: [{ name: { $regex: `${query}`, $options: 'i' } }, { workTitle: { $regex: `${query}`, $options: 'i' } }] }).limit(limit)
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ "error": error });
    }
}