import { ServiceMongoDataStore } from "../Drivers/ServiceMongoDataStore";

export type TicketResponse = {
  status: string;
  reason: string;
};

const dataStore = new ServiceMongoDataStore();
export async function findUserServiceRequests({
  requester
}: {
  requester: string;
}) {
  try {
    const userTickets = await dataStore.fetchUserServiceRequests({
      id: requester
    });
    return userTickets;
  } catch (err) {
    throw new Error("Driver level error...");
  }
}

//validate requester...
export async function updateServiceRequest({
  requestId,
  response
}: {
  requestId: string;
  response: TicketResponse;
}) {
  /**
   * update the ticket with a response and set the status to accepted/denied.
   */
  // await dataStore
}
