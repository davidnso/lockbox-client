import { Router } from "express";
const version = require("../../../package.json").version;

export class ExpressRouteDriver {
  public static buildRoutes() {
    const router: Router = Router();

    router.get("/", async (req, res) => {
      res.json({ version, message: "Welcome to the Lockbox API " + version });
    });
    console.log("building routes");
    return router;
  }
}
