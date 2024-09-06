import { Event } from "./Event";
import { User } from "./User";

export type EventImage = {
  _id: string;
  event: Event;
  user: User;
  imageUrl: string;
};
