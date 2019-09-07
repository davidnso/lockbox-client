import { ExpressDriver } from "./drivers/express/expressDriver";
import * as http from "http";

const app = ExpressDriver.build();
/**
 * build the express driver and start the application server.
 */
const server = http.createServer(app);
server.listen(4000, () => {
  console.log("LockBox Api running on port 4000");
});
