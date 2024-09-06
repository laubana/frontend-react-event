import { Group } from "./Group";
import { User } from "./User";

export type GroupImage = {
  _id: string;
  group: Group;
  user: User;
  imageUrl: string;
};
