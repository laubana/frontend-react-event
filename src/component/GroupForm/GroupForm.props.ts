import { Category } from "../../type/Category";
import { GroupForm } from "../../type/GroupForm";

export interface GroupFormProps {
  categorys: Category[];
  label: string;
  onSubmit: (values: GroupForm) => void;
  values: GroupForm;
}
