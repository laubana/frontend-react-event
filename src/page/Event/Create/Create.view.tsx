import "mapbox-gl/dist/mapbox-gl.css";

import { CreateProps } from "./Create.props";
import { Container } from "./Create.style";

import Loading from "../../../component/Loading";
import Text from "../../../component/Text";
import EventForm from "../../../component/EventForm";

const Create = (props: CreateProps) => {
  const { handleGoBack, handleSubmit, isLoading } = props;

  return (
    <>
      <Container>
        <Text size="large">Create Event</Text>
        <EventForm
          label="Confirm"
          onSubmit={handleSubmit}
          values={{
            dateTimes: [],
            dateTimesNumber: 0,
            description: "",
            fee: "",
            name: "",
            places: [],
            placesNumber: 0,
          }}
        />
      </Container>
      <Loading isVisibile={isLoading} />
    </>
  );
};

export default Create;
