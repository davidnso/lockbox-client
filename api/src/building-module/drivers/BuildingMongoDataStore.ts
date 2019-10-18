import { MongoDriver } from "../../drivers";
import { throws } from "assert";

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
      const accessLogs = await this.buildingStore
        .aggregate([
          {
            $match: {
              buildingId: luid
            }
          },
          {
            $lookup: {
              from: "access-logs",
              localField: "buildingId",
              foreignField: "buid",
              as: "accessLogs"
            }
          },
          {
            $unwind: {
              path: "$accessLogs",
              includeArrayIndex: false,
              preserveNullAndEmptyArrays: true
            }
          },
          {
            $replaceRoot: {
              newRoot: "$accessLogss"
            }
          }
        ])
        .toArray();
      return accessLogs[0];
    } catch (err) {
      console.log("Mongo Error: ", err);
    }
  }
}
