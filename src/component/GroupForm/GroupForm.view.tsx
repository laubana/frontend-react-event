import { Formik } from "formik";
import React, { useRef } from "react";
import { MapRef } from "react-map-gl";
import * as Yup from "yup";

import { GroupFormProps } from "./GroupForm.props";
import { MapContainer } from "./GroupForm.style";

import AutoComplete from "../AutoComplete";
import Button from "../Button";
import Grid from "../Grid";
import InputPlace from "../InputPlace";
import InputSingleImage from "../InputSingleImage";
import InputText from "../InputText";
import InputTextArea from "../InputTextArea";
import Map from "../Map";

import { GroupForm } from "../../type/GroupForm";

const GroupFormComponent = ({
  categorys,
  label,
  onSubmit,
  values,
}: GroupFormProps): JSX.Element => {
  const mapRef = useRef<MapRef>(null);

  const validationSchema = Yup.object().shape({
    address: Yup.string().required("Address is required."),
    category: Yup.object().required("Category is required."),
    description: Yup.string().required("Description is required."),
    image: Yup.mixed().required("Image is required."),
    latitude: Yup.number().required("Latitude is required."),
    longitude: Yup.number().required("Longitude is required."),
    name: Yup.string().required("Name is required."),
    thumbnail: Yup.mixed().required("Thumbnail is required."),
  });

  const handleSubmit = (values: GroupForm) => {
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
            <AutoComplete
              label="Category"
              placeholder="Category"
              option={values.category}
              options={categorys.map((category, index) => ({
                value: category._id,
                label: category.value,
              }))}
              setOption={(option) => {
                setFieldValue("category", option);
              }}
              error={touched.category ? errors.category : ""}
            />
            <InputSingleImage
              label="Thumbnail"
              image={values.thumbnail}
              setImage={(image) => {
                setFieldValue("thumbnail", image);
              }}
              error={touched.thumbnail ? errors.thumbnail : ""}
            />
            <InputSingleImage
              label="Image"
              image={values.image}
              setImage={(image) => {
                setFieldValue("image", image);
              }}
              error={touched.image ? errors.image : ""}
              style={{ aspectRatio: 2 }}
            />
            <InputText
              label="Name"
              placeholder="Name"
              text={values.name}
              setText={(text) => setFieldValue("name", text)}
              error={touched.name ? errors.name : ""}
            />
            <InputPlace
              address={values.address}
              label="Address"
              placeholder="Address"
              setPlace={(place) => {
                setFieldValue("address", place.address);
                setFieldValue("latitude", place.latitude);
                setFieldValue("longitude", place.longitude);

                mapRef.current?.flyTo({
                  center: [place.longitude, place.latitude],
                  duration: 500,
                });
              }}
              error={touched.address ? errors.address : ""}
            />
            <MapContainer>
              <Map
                forwardedRef={mapRef}
                markers={
                  values.latitude && values.longitude
                    ? [
                        {
                          latitude: values.latitude,
                          longitude: values.longitude,
                        },
                      ]
                    : undefined
                }
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

export default React.memo(GroupFormComponent);
