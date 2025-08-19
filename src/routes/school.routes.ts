import express from "express";
import { schoolController } from "../controller/school.controller";
import { validationMiddleware } from "../middleware/validationMiddleware";
import { createSchool, getSchoolData } from "../zod/school.zod";
const schoolRoute = express.Router();

schoolRoute
  .route("/")
  .post(validationMiddleware(createSchool), schoolController.createSchool)
  .get(validationMiddleware(getSchoolData), schoolController.listSchool);

export default schoolRoute;
