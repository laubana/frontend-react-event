import "mapbox-gl/dist/mapbox-gl.css";

import { Elements } from "@stripe/react-stripe-js";
import { Formik } from "formik";
import { useRef } from "react";
import { FaRegCreditCard } from "react-icons/fa6";
import { MapRef } from "react-map-gl";
import * as Yup from "yup";

import { CreateProps } from "./Create.props";
import { Container, MapContainer } from "./Create.style";

import AutoComplete from "../../../component/AutoComplete";
import Accordian from "../../../component/Accordian";
import Button from "../../../component/Button";
import Card from "../../../component/Card";
import Flex from "../../../component/Flex";
import Grid from "../../../component/Grid";
import InputPlace from "../../../component/InputPlace";
import InputSingleImage from "../../../component/InputSingleImage";
import InputText from "../../../component/InputText";
import InputTextArea from "../../../component/InputTextArea";
import Label from "../../../component/Label";
import Loading from "../../../component/Loading";
import Map from "../../../component/Map";
import PaymentIntentForm from "../../../module/PaymentIntentForm";
import Text from "../../../component/Text";

const Create = (props: CreateProps) => {
  const {
    categorys,
    clientSecret,
    handleClickNewCard,
    handleGoBack,
    handleNext,
    handleSubmitExistingCard,
    handleSubmitNewCard,
    initialValues,
    isLoading,
    paymentMethods,
    stage,
    stripePromise,
  } = props;

  const mapRef = useRef<MapRef>(null);

  const validationSchema = Yup.object().shape({
    address: Yup.string().required("Address is required."),
    category: Yup.object().required("Category is required."),
    description: Yup.string().required("Description is required."),
    image: Yup.object().required("Image is required."),
    latitude: Yup.number().required("Latitude is required."),
    longitude: Yup.number().required("Longitude is required."),
    place: Yup.object().required("Place is required."),
    name: Yup.string().required("Name is required."),
    thumbnail: Yup.object().required("Thumbnail is required."),
  });

  return (
    <>
      {categorys ? (
        <Container>
          <Text sizing="large">Create Event</Text>
          {stage === 0 ? (
            <>
              <Formik
                initialValues={initialValues}
                onSubmit={handleNext}
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
                          setFieldValue("place", place);
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
                            values.place && [
                              {
                                latitude: values.place.latitude,
                                longitude: values.place.longitude,
                              },
                            ]
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
                      Next
                    </Button>
                  </Grid>
                )}
              </Formik>
              <Button coloring="black" onClick={handleGoBack} block>
                Go Back
              </Button>
            </>
          ) : stage === 1 ? (
            <>
              <Grid>
                <Label>Payment</Label>
                {0 < paymentMethods.length && (
                  <>
                    {paymentMethods.map((paymentMethod, index) => {
                      return (
                        <Accordian
                          key={paymentMethod.id}
                          title={
                            <Card
                              brand={paymentMethod.brand}
                              lastDigits={paymentMethod.lastDigits}
                            />
                          }
                        >
                          <Flex
                            style={{
                              alignItems: "center",
                              justifyContent: "space-between",
                            }}
                            key={index}
                          >
                            <Button
                              block
                              onClick={() =>
                                handleSubmitExistingCard(paymentMethod.id)
                              }
                            >
                              <FaRegCreditCard size={16} />
                              Create
                            </Button>
                          </Flex>
                        </Accordian>
                      );
                    })}
                  </>
                )}
                <Accordian
                  onOpen={handleClickNewCard}
                  title={
                    <Flex style={{ alignItems: "center" }}>
                      <FaRegCreditCard size={32} />
                      <Text>New Card</Text>
                    </Flex>
                  }
                >
                  {clientSecret ? (
                    <Elements
                      stripe={stripePromise}
                      options={{
                        clientSecret: clientSecret,
                        locale: "en",
                      }}
                    >
                      <PaymentIntentForm onSubmit={handleSubmitNewCard} />
                    </Elements>
                  ) : null}
                </Accordian>
              </Grid>
              <Button coloring="black" onClick={handleGoBack} block>
                Go Back
              </Button>
            </>
          ) : null}
        </Container>
      ) : (
        <Loading />
      )}
      <Loading isVisibile={isLoading} />
    </>
  );
};

export default Create;
