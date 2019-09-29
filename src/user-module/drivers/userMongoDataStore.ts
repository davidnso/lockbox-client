import { MongoDriver } from "../../drivers";
import { Db } from "mongodb";

import { User, loginRequest } from "../../shared/entity";
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
      return await this.userdb.find({ _id: id }).toArray();
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
  async matchUserCredentials(loginRequest: loginRequest) {
    try {
      const user = await this.userdb.find(loginRequest);
      return user;
    } catch (err) {
      console.log("Mongo Error : ", err);
    }
  }
}
