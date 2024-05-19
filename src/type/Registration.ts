import { Event } from "./Event";
import { User } from "./User";

export type Registration = {
  _id: string;
  event: Event;
  user: User;
};
