import { buildingDocument } from "./building";
import { userDocument } from "./user";
export interface accessLogDocument {
  _id: string;
  buildingId: string;
  userId: string;
  date: string;
  granted: boolean;
}

export interface accessLog {
  building: Partial<buildingDocument>;
  user: Partial<userDocument>;
  granted: boolean;
}
