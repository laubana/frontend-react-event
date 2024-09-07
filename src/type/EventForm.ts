import { Place } from "./Place";

export type EventForm = {
  dateTimes: Date[];
  dateTimesNumber: number;
  description: string;
  fee: string;
  name: string;
  places: Place[];
  placesNumber: number;
};
