import { Group } from "./Group";
import { User } from "./User";

export type GroupRegistration = {
  _id: string;
  group: Group;
  user: User;
};
