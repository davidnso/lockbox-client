import * as mongodb from "mongodb";
require("dotenv").config();

export class MongoDriver {
  static _instance: mongodb.Db;

  public static getInstance() {
    if (!this._instance) {
      console.log("MongoDriver not yet instantiated...");
    } else {
      return this._instance;
    }
  }
  public static async buildDriver(uri: string) {
    const mongoUri = uri.replace(/<password>/g, process.env
      .DB_PASSWORD as string);
    console.log(mongoUri);
    const client = new mongodb.MongoClient(mongoUri, { useNewUrlParser: true });
    try {
      await client.connect();
      this._instance = client.db("safe");
    } catch (err) {
      console.log("Error on connect: " + err);
    }
  }
}
