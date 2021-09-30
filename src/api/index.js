import { Router } from "express";
import country from "./country";

const router = new Router();

router.use("/country", country);

export default router;
