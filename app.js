import express from "express";
import morgan from "morgan"; // to this "import" download babel
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middlewares";
import routes from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
const app = express();

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

// (all of them are middlewear)
app.use(helmet()); // for Security (both of them are middlewear)
app.set("view engine", "pug");
app.use(cookieParser()); //for save cookies
app.use(bodyParser.json()); // to get info from User
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev")); // going to log anything
app.use(localsMiddleware);

// rout
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
