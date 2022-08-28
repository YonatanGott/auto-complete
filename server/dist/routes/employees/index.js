"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const employeesController_1 = require("../../controllers/employeesController");
const employeesRoutes = () => {
    const router = (0, express_1.Router)();
    router.post("/", employeesController_1.addEmployee);
    router.get("/", employeesController_1.getEmployees);
    router.put("/:id", employeesController_1.updateEmployee);
    router.delete("/:id", employeesController_1.deleteEmployee);
    router.get("/search", employeesController_1.searchEmployees);
    return router;
};
exports.default = employeesRoutes;
//# sourceMappingURL=index.js.map