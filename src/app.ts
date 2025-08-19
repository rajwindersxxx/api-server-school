import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import path from "path";

import { globalHandler } from "./utils/globalHandler";
import { appError } from "./utils/appError";

import hpp from "hpp";
import rateLimit from "express-rate-limit";
import { devMode } from "./config/server.config";
import schoolRoute from "./routes/school.routes";
dotenv.config({ path: "./.env" });
const app = express();
app.set("trust proxy", 1);

app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

if (devMode) app.use(morgan("dev"));

app.use(helmet());
app.use(hpp());
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 200,
  standardHeaders: true,
  message: "Too many requests from this IP , please try again in an hour!",
});
if (!devMode) app.use(limiter);

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

app.use("/api/v1/school", schoolRoute)
app.all(/(.*)/, (req, res, next) => {
  next(
    new appError(
      `Can't find ${req.originalUrl} on this server!`,
      404,
      "INVALID_ROUTE"
    )
  );
});

app.use(globalHandler);
export default app;
