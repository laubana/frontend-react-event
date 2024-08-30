import { Category } from "./Category";
import { User } from "./User";

export type Event = {
  _id: string;
  category: Category;
  user: User;
  thumbnailUrl: string;
  imageUrl: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  description: string;
};
