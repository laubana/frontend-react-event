import { Group } from "./Group";
import { User } from "./User";

export type Registration = {
  _id: string;
  group: Group;
  user: User;
};
