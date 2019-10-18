import { MongoDriver } from "../../drivers";

export class ServiceMongoDataStore {
  ticketStore: any;
  constructor() {
    MongoDriver.buildDriver(process.env.DB_URI as string, "service-requests").then(
      store => {
        this.ticketStore = store;
      }
    );
  }

  async fetchUserServiceRequests({ id }: { id: string }) {
    const tickets = await this.ticketStore.find({ userId: id }).toArray();
    return tickets;
  }

//TODO: optimize this function to return the count with the tickets in one go.
  async fetchAllTickets(){
    const tickets = await this.ticketStore.find().toArray();
    return tickets;

  }
}
