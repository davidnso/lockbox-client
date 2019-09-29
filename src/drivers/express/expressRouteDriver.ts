import { Router, Request } from "express";
import * as userHandlerFunctions from "../../user-module/Business-Logic";
import { Response } from "express-serve-static-core";
import { loginRequest, User } from "../../shared/entity";
const version = require("../../../package.json").version;

export class ExpressRouteDriver {
  public static buildRoutes() {
    const router: Router = Router();

    /**
     * initialize welcome route
     */
    router.get("/", async (req, res) => {
      res.json({ version, message: "Welcome to the Lockbox API " + version });
    });
    console.log("building routes");

    /**
     * initialize public routes
     */
    this.initUserRoutes(router);
    this.initAccessLogRoutes(router);
    return router;
  }
  private static initUserRoutes(router: Router) {
    //get all users
    router.get("/users", async (req, res) => {
      const payload = await userHandlerFunctions.fetchUsers();
      res.send(payload);
    });
    //search all users, add query filters, text searching etc...
    router.get("/users/search", async (req, res) => {
      res.send("search users route");
    });

    router.get("/users/dashboard");

    /**
     * Fetching a users rommates based on the student's id.
     */
    router.get("/users/roommates", fetchRoommates);
    router.get("/users/:id", async (req, res) => {
      res.send("Get a specific user");
    });
    //add a user ( register )
    router.post("/users", createUserAccount);
    router.get("/users/login", login);
    /**
     * update user account with new status or.. whatever
     */
    router.patch("/users/:id", async (req, res) => {
      res.send("update a single user account");
    });

    router.get("/users/dashboard");
  }
  private static initAccessLogRoutes(router: Router) {
    /**
     * fetch all access logs, sort by date...
     */
    router.get("/logs", async (req, res) => {
      res.send("Show all access logs");
    });
    /**
     * fetch single access log
     */
    router.get("/logs/:id", async (req, res) => {
      res.send("Fetch one access log");
    });
    /**
     * fetch and download archived routes. add query params to allow downloading bundles.
     */
    router.get("/logs/bundle", async (req, res) => {
      res.send("download archives..");
    });
    /**
     * post a new access log, flip granted or not granted flag.
     */
    router.post("/logs", async (req, res) => {
      res.send("post a new access log");
    });
  }
}

async function createUserAccount(req: Request, res: Response) {
  try {
    const user = req.body.user;
    const accountType = req.body.accountType;
    const accessRights = req.body.accessRights;
    await userHandlerFunctions.createUserAccount({ user, accountType });
    res.sendStatus(200).json();
  } catch (err) {
    res.sendStatus(404);
  }
}

async function login(req: Request, res: Response) {
  try {
    const loginRequest: loginRequest = { ...req.body };
    const user = await userHandlerFunctions.login({ loginRequest });
    res.status(200).send(user);
  } catch (err) {
    res.status(404);
  }
}

async function fetchRoommates(req: Request, res: Response) {
  try {
    const studentId = req.body.studentId;
    const roommates: User[] = await userHandlerFunctions.loadStudentRoommates({
      id: studentId
    });
    res.status(200).send(roommates);
  } catch (err) {
    res.status(404);
  }
}
