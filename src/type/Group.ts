import { Location } from "./Location";
import { Category } from "./Category";
import { User } from "./User";

export type Group = {
  _id: string;
  category: Category;
  user: User;
  imageUrl: string;
  name: string;
  address: Location;
  latitude: number;
  longitude: number;
  description: string;
};
