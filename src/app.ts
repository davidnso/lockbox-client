import { ExpressDriver } from "./drivers/express/expressDriver";
import * as http from "http";
import { MongoDriver } from "./drivers/mongo/mongoDriver";
require("dotenv").config();

MongoDriver.buildDriver(process.env.DB_URI as string).then(res => {});

const app = ExpressDriver.build();
/**
 * build the express driver and start the application server.
 */
const server = http.createServer(app);
server.listen(process.env.PORT, () => {
  console.log("LockBox Api running on port " + process.env.PORT);
});
