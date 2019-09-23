import { Router } from "express";
import { fetchUsers } from "../../user-module/Business-Logic";
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
      const payload = await fetchUsers();
      res.send(payload);
    });
    //search all users, add query filters, text searching etc...
    router.get("/users/search", async (req, res) => {
      res.send("search users route");
    });
    router.get("/users/:id", async (req, res) => {
      res.send("Get a specific user");
    });
    //add a user ( register )
    router.post("/users", async (req, res) => {
      res.send("add a user route");
    });
    router.get("/users/auth/login", async (req, res) => {
      res.send("login route for users");
    });
    /**
     * update user account with new status or.. whatever
     */
    router.patch("/users/:id", async (req, res) => {
      res.send("update a single user account");
    });
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
