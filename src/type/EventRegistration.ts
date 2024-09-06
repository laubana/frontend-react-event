import { Event } from "./Event";
import { User } from "./User";

export type EventRegistration = {
  _id: string;
  event: Event;
  user: User;
};
