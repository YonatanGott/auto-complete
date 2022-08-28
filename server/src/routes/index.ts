import { Router } from "express";
//Routes
import employeesRoutes from "./employees";

const router = (): Router => {
    const router = Router({ mergeParams: true });

    router.use("/employees",employeesRoutes())
    
    return router;
};

export default router;
