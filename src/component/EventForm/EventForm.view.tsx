import { Formik } from "formik";
import React, { useRef, useState } from "react";
import { MapRef } from "react-map-gl";
import * as Yup from "yup";

import { EventFormProps } from "./EventForm.props";
import { MapContainer } from "./EventForm.style";

import Button from "../Button";
import Grid from "../Grid";
import InputPlace from "../InputPlace";
import InputText from "../InputText";
import InputTextArea from "../InputTextArea";
import Map from "../Map";

import { EventForm } from "../../type/EventForm";
import { Place } from "../../type/Place";

const EventFormComponent = ({
  label,
  onSubmit,
  values,
}: EventFormProps): JSX.Element => {
  const mapRef = useRef<MapRef>(null);

  const [inputPlaces, setInputPlaces] = useState<Place[]>([]);

  const validationSchema = Yup.object().shape({
    description: Yup.string().required("Description is required."),
    name: Yup.string().required("Name is required."),
    placesNumber: Yup.number()
      .min(1, "Addresses are required.")
      .required("Addresses are required."),
  });

  const handleSubmit = (values: EventForm) => {
    onSubmit(values);
  };

  return (
    <Formik
      initialValues={values}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ errors, handleSubmit, setFieldValue, touched, values }) => (
        <Grid style={{ gap: "32px" }}>
          <Grid>
            <InputText
              label="Name"
              placeholder="Name"
              text={values.name}
              setText={(text) => setFieldValue("name", text)}
              error={touched.name ? errors.name : ""}
            />
            <InputPlace
              label="Addresses"
              placeholder="Address"
              setPlace={(place) => {
                setInputPlaces((prevStates) => [...prevStates, place]);
                setFieldValue("placesNumber", ++values.placesNumber);

                mapRef.current?.flyTo({
                  center: [place.longitude, place.latitude],
                  duration: 500,
                });
              }}
              error={touched.placesNumber ? errors.placesNumber : ""}
            />
            <MapContainer>
              <Map
                forwardedRef={mapRef}
                markers={inputPlaces.map((inputPlace) => ({
                  latitude: inputPlace.latitude,
                  longitude: inputPlace.longitude,
                }))}
              />
            </MapContainer>
            <InputTextArea
              label="Description"
              placeholder="Description"
              text={values.description}
              setText={(text) => setFieldValue("description", text)}
              error={touched.description ? errors.description : ""}
            />
          </Grid>
          <Button block onClick={handleSubmit}>
            {label}
          </Button>
        </Grid>
      )}
    </Formik>
  );
};

export default React.memo(EventFormComponent);
