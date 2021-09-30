import { Router } from "express";
import { create, update, index, show, getFlag } from "./controller";

const router = new Router();

router.post("/", create);
router.post("/update", update);
router.get("/all", index);
router.get("/", show);
router.get("/flag", getFlag);


export default router;
