import { Event } from "./Event";
import { User } from "./User";

export type Image = {
  _id: string;
  event: Event;
  user: User;
  imageUrl: string;
};
