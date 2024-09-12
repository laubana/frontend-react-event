import { EventForm } from "../../../type/EventForm";

export interface CreateProps {
  handleGoBack: () => void;
  handleSubmit: (values: EventForm) => void;
  isLoading: boolean;
}
