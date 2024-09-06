import { Group } from "./Group";
import { User } from "./User";

export type GroupComment = {
  _id: string;
  group: Group;
  user: User;
  value: string;
};
