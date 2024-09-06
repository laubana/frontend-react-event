import { EventForm } from "../../type/EventForm";

export interface EventFormProps {
  label: string;
  onSubmit: (values: EventForm) => void;
  values: EventForm;
}
