import { UserMongoDataStore } from "../../drivers/userMongoDataStore";
import { User } from "../../../shared/entity";
import {
  studentUser,
  privilegedUser,
  FullStudentUser,
  StudentUser
} from "../../../shared/entity/user";
const dataStore = new UserMongoDataStore();

const STUDENT = "student";
const ADMIN = "admin";
const PRIVILEGED_USER = "privileged";

export async function fetchUsers() {
  try {
    //validate requester
    return await dataStore.fetchAllUsers();
  } catch (err) {
    console.log(err);
  }
}

export async function createUserAccount(params: {
  user: User;
  accountType: string;
}) {
  const { user, accountType } = params;
  let newUser: any;
  try {
    /**
     * TODO: x10000 check is certain fields provided are already populated
     * reject used
     * username
     * email
     * */
    if (accountType === STUDENT) {
      newUser = new studentUser(user);
    } else if (accountType === ADMIN || accountType === PRIVILEGED_USER) {
      newUser = new privilegedUser(user);
    }
    await dataStore.addUser(newUser);
  } catch (err) {
    throw err;
  }
}

export async function login(params: { loginRequest: any }) {
  const { loginRequest } = params;
  try {
    if (loginRequest) {
      const user = await dataStore.matchUserCredentials(loginRequest);
      if (user) {
        return user;
      }
    }
  } catch (err) {
    console.log(err);
  }
}

async function fetchRoommatesByStudentId(params: { roommateIds: string[] }) {
  const { roommateIds } = params;
  try {
    let roommates: studentUser[];
    if (roommateIds) {
      roommateIds.map(async id => {
        roommates = await dataStore.fetchUser(id);
      });
    }
    return roommates!;
  } catch (err) {
    throw err;
  }
}

export async function loadStudentRoommates(params: { id: string }) {
  const { id } = params;
  let roommates: studentUser[];
  let fullUser: any;
  //check if user exists and is found
  const user: Partial<studentUser> = await dataStore.fetchUser(id);
  if (user) {
    roommates = await fetchRoommatesByStudentId({
      roommateIds: user.roommates!
    });

    return roommates;
    //TODO: add roommate to the FullStudentUser and return.
    fullUser = { ...user, roommates };
  } else {
    throw new Error("User was not found!");
  }
}
