import { MongoDriver } from "../../drivers";
import { Db, ObjectId } from "mongodb";
import { ObjectID } from "mongodb";

import { User, loginRequest } from "../../shared/entity";
import { studentUser } from "../../shared/entity/user";
require("dotenv").config();

const USER_ROLES = {
  student: "Student",
  priv: "Privileged",
  admin: "admin"
};
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
      console.log(id);
      const objectId = new ObjectId(id);
      return await this.userdb.find({ _id: objectId }).toArray();
    } catch (err) {
      console.log(err);
    }
  }

  async fetchGuestsByHostId(id: string) {
    try {
      const objectId = new ObjectId(id);
      return await this.userdb
        .aggregate([
          { $match: { _id: objectId } },
          {
            $lookup: {
              from: "guests",
              localField: "_id",
              foreignField: "host",
              as: "guests"
            }
          },
          {
            $unwind: {
              path: "$guests",
              includeArrayIndex: false,
              preserveNullAndEmptyArrays: true
            }
          },
          {
            $replaceRoot: {
              newRoot: "$guests"
            }
          }
        ])
        .toArray();
    } catch (err) {
      console.log("Mongo Error: ", err);
    }
  }

  async fetchRoommates(ids: string[]) {
    try {
      let roommates = [];
      console.log(ids);
      /**
       * just in case it starts acting up again, use this to
       * trouble shoot.
       * @hex and @o_id
       */
      // var hex = /[0-9A-Fa-f]{6}/g;
      // const o_id = hex.test(id) ? new ObjectId(id) : id;
      let objectIds = [];
      for (let i = 0; i < ids.length; i++) {
        const id = new ObjectId(ids[i]);

        objectIds.push(id);
        console.log(objectIds);
      }
      roommates = await this.userdb
        .find({
          _id: { $in: objectIds },
          role: USER_ROLES.student
        })
        .toArray();
      return roommates;
    } catch (err) {
      console.log(err);
    }
  }
  async fetchAllUsers(role?:string) {
    try {
      if(role){
        return await this.userdb.find({role}).toArray();
      }else{
        return await this.userdb.find({}).toArray();
      }
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