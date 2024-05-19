import { Event } from "./Event";
import { User } from "./User";

export type Comment = {
  _id: string;
  event: Event;
  user: User;
  value: string;
};
