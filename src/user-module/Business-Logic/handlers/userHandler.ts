import { UserMongoDataStore } from "../../drivers/userMongoDataStore";
const dataStore = new UserMongoDataStore();

export async function fetchUsers() {
  try {
    //validate requester
    return await dataStore.fetchAllUsers();
  } catch (err) {
    console.log(err);
  }
}
