import { MongoDriver } from "../../drivers";
import { throws } from "assert";
import { ObjectId } from "mongodb";

export class BuildingMongoDataStore {
  buildingStore: any;
  constructor() {
    MongoDriver.buildDriver(process.env.DB_URI as string, "buildings").then(
      store => {
        this.buildingStore = store;
      }
    );
  }

  async findAllBuildings() {
    return await this.buildingStore.find({}).toArray();
  }

  async findBuildingsByLUID({ luid }: { luid: string }) {
    try {
      const buildings = await this.buildingStore
        .find({ buildingId: luid })
        .toArray();
      return buildings;
    } catch (err) {
      console.log("Mongo Error: ", err);
    }
  }

  async fetchLogsbyBuildingId({ luid }: { luid: string }) {
    try {
      const objectId = new ObjectId(luid);
      const accessLogs = await this.buildingStore
        .aggregate([
          {
            $match: {
              _id: objectId
            }
          },
          {
            $lookup: {
              from: "access-logs",
              localField: "_id",
              foreignField: "buildingId",
              as: "accessLogs"
            }
          },
          {
            $unwind: {
              path: "$accessLogs",
              preserveNullAndEmptyArrays: true
            }
          },
          {
            $replaceRoot: {
              newRoot: "$accessLogs"
            }
          }
        ])
        .toArray();
      return accessLogs;
    } catch (err) {
      console.log("Mongo Error: ", err);
    }
  }
}
