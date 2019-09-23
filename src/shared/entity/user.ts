export interface UserDocument {
  _id: string;
  name: string;
  univId: string;
  role: string;
  access_rights: string[];
  roommates: string[]; //change to user object when being fetched. deal with this later.
}

export interface User {
  name: string;
  univId: string;
  role: string;
  access_rights: string[];
  roommates: string[]; //change to user object when being fetched. deal with this later.
}
