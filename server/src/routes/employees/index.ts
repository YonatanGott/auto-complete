import { Router } from "express";
import { addEmployee, deleteEmployee, getEmployees, searchEmployees, updateEmployee } from "../../controllers/employeesController";

const employeesRoutes = (): Router => {
    const router = Router()

    router.post("/", addEmployee)

    router.get("/", getEmployees)

    router.put("/:id", updateEmployee)

    router.delete("/:id", deleteEmployee)

    router.get("/search", searchEmployees)

    return router
}

export default employeesRoutes