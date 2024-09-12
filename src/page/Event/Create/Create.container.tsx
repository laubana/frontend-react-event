import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import CreateView from "./Create.view";

import { useAddEventMutation } from "../../../slice/eventApiSlice";
import { EventForm } from "../../../type/EventForm";

const Create = () => {
  const { groupId } = useParams();
  const navigate = useNavigate();

  const [addEvent] = useAddEventMutation();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleSubmit = async (values: EventForm) => {
    try {
      if (groupId) {
        const addEventResponse = await addEvent({
          dateTimes: values.dateTimes,
          description: values.description,
          fee: values.fee,
          groupId: groupId,
          name: values.name,
          places: values.places,
        }).unwrap();

        navigate(`/event/${addEventResponse.data._id}`);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const props = {
    handleGoBack,
    handleSubmit,
    isLoading,
  };
  return <CreateView {...props} />;
};

export default Create;
