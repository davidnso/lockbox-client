import { MongoDriver } from "../../drivers";
import { Db } from "mongodb";

import { User } from "../../shared/entity";
require("dotenv").config();

export class UserMongoDataStore {
  userdb: any;
  constructor() {
    MongoDriver.buildDriver(process.env.DB_URI as string, "users").then(
      dataStore => {
        this.userdb = dataStore;
      }
    );
  }
  /**
   * User MongoDB CRUD Operations
   */
  async addUser(user: User) {
    try {
      await this.userdb.insertOne(user);
    } catch (err) {}
  }
  async fetchUser(id: string) {
    try {
      return await this.userdb.find({ _id: id });
    } catch (err) {
      console.log(err);
    }
  }
  async fetchAllUsers() {
    try {
      return await this.userdb.find({}).toArray();
    } catch (err) {
      console.log(err);
    }
  }
}
