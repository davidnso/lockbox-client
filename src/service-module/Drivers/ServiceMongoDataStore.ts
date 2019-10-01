import { MongoDriver } from "../../drivers";

export class ServiceMongoDataStore {
  ticketStore: any;
  constructor() {
    MongoDriver.buildDriver(process.env.DB_URI as string, "tickets").then(
      store => {
        this.ticketStore = store;
      }
    );
  }

  async fetchUserServiceRequests({ id }: { id: string }) {
    const tickets = await this.ticketStore.find({ userId: id }).toArray();
    return tickets;
  }
}
