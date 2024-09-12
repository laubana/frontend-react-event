import { Formik } from "formik";
import React, { useRef, useState } from "react";
import { MapRef } from "react-map-gl";
import * as Yup from "yup";

import { EventFormProps } from "./EventForm.props";
import { MapContainer } from "./EventForm.style";

import Button from "../Button";
import Flex from "../Flex";
import Grid from "../Grid";
import InputDate from "../InputDate";
import InputPlace from "../InputPlace";
import InputText from "../InputText";
import InputTextArea from "../InputTextArea";
import InputTime from "../InputTime";
import Label from "../Label";
import Map from "../Map";
import Text from "../Text";

import { convertDate, convertDateTime, convertTime } from "../../helpers/date";

import { EventForm } from "../../type/EventForm";
import { Place } from "../../type/Place";
import Calendar from "../Calendar";

const EventFormComponent = ({
  label,
  onSubmit,
  values,
}: EventFormProps): JSX.Element => {
  const mapRef = useRef<MapRef>(null);

  const [inputDates, setInputDates] = useState<Date[]>([]);
  const [inputTime, setInputTime] = useState<Date | undefined>(undefined);
  const [inputDateTimes, setInputDateTimes] = useState<Date[]>([]);
  const [inputPlaces, setInputPlaces] = useState<Place[]>([]);

  const validationSchema = Yup.object().shape({
    dateTimesNumber: Yup.number()
      .min(1, "Date and times are required.")
      .required("Date and times are required."),
    description: Yup.string().required("Description is required."),
    fee: Yup.number()
      .typeError("Fee must be a number.")
      .min(0, "Fee must be equal to or larger than 0.")
      .integer("Fee must be an integer.")
      .required("Fee is required."),
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
            <InputText
              label="Fee"
              placeholder="Fee"
              text={values.fee}
              setText={(text) => setFieldValue("fee", text)}
              error={touched.fee ? errors.fee : ""}
            />
            <div>
              <Label>Date & Time</Label>
              <Flex style={{ alignItems: "flex-end" }}>
                <Calendar
                  dates={inputDates}
                  setDates={(dates) => {
                    setInputDates(dates);
                  }}
                />
                <InputTime
                  label="Time"
                  placeholder="HH:mm"
                  setTime={(time) => {
                    setInputTime(time);
                  }}
                  time={inputTime}
                />
                {/* <InputDate
                  date={inputDate}
                  label="Date"
                  placeholder="YYYY-MM-DD"
                  setDate={(date) => {
                    setInputDate(date);
                  }}
                />
                <InputTime
                  label="Time"
                  placeholder="HH:mm"
                  setTime={(time) => {
                    setInputTime(time);
                  }}
                  time={inputTime}
                /> */}
                {/* <Button
                  onClick={() => {
                    if (inputDate && inputTime) {
                      const date = convertDate(inputDate);
                      const time = convertTime(inputTime);
                      const dateTime = `${date}T${time}:00`;

                      setInputDateTimes((prevStates) => [
                        ...prevStates,
                        new Date(dateTime),
                      ]);
                      setFieldValue("dateTimes", [
                        ...values.dateTimes,
                        new Date(dateTime),
                      ]);
                      setFieldValue(
                        "dateTimesNumber",
                        ++values.dateTimes.length
                      );
                    }
                  }}
                >
                  Add
                </Button> */}
              </Flex>
              {touched.dateTimesNumber && errors.dateTimesNumber && (
                <Label color="red">
                  {touched.dateTimesNumber ? errors.dateTimesNumber : ""}
                </Label>
              )}
            </div>
            <div>
              <Label>Date & Time</Label>
              {/* <Grid style={{ gap: "8px" }}>
                {inputDateTimes.map((inputDateTime, inputDateTimeIndex) => (
                  <Flex
                    key={inputDateTimeIndex}
                    style={{
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text>
                      {convertDate(inputDateTime)} {convertTime(inputDateTime)}
                    </Text>
                    <Button
                      onClick={() => {
                        setInputDateTimes((prevStates) =>
                          prevStates.filter(
                            (_, index) => index !== inputDateTimeIndex
                          )
                        );
                        setFieldValue(
                          "dateTimes",
                          values.dateTimes.filter(
                            (_, index) => index !== inputDateTimeIndex
                          )
                        );
                        setFieldValue(
                          "dateTimesNumber",
                          --values.dateTimes.length
                        );
                      }}
                      size="small"
                    >
                      Delete
                    </Button>
                  </Flex>
                ))}
              </Grid> */}
            </div>
            <InputPlace
              label="Address"
              placeholder="Address"
              setPlace={(place) => {
                setInputPlaces((prevStates) => [...prevStates, place]);
                setFieldValue("places", [...values.places, place]);
                setFieldValue("placesNumber", ++values.places.length);

                mapRef.current?.flyTo({
                  center: [place.longitude, place.latitude],
                  duration: 500,
                });
              }}
              error={touched.placesNumber ? errors.placesNumber : ""}
            />
            <div>
              <Label>Addresses</Label>
              <Grid style={{ gap: "8px" }}>
                {inputPlaces.map((inputPlace, inputPlaceIndex) => (
                  <Flex
                    key={inputPlaceIndex}
                    style={{
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text>{inputPlace.address}</Text>
                    <Button
                      onClick={() => {
                        setInputPlaces((prevStates) =>
                          prevStates.filter(
                            (_, index) => index !== inputPlaceIndex
                          )
                        );
                        setFieldValue(
                          "places",
                          values.places.filter(
                            (_, index) => index !== inputPlaceIndex
                          )
                        );
                        setFieldValue("placesNumber", --values.places.length);
                      }}
                      size="small"
                    >
                      Delete
                    </Button>
                  </Flex>
                ))}
              </Grid>
            </div>
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
