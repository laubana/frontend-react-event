import React from "react";
import { Link } from "react-router-dom";
import { DetailProps } from "./Detail.props";
import { Container, Image, MapContainer, Thumbnail } from "./Detail.style";
import Button from "../../../component/Button";
import Card from "../../../component/Card";
import Carousel from "../../../component/Carousel";
import Columns from "../../../component/Columns";
import Flex from "../../../component/Flex";
import Grid from "../../../component/Grid";
import InputImage from "../../../component/InputSingleImage";
import Modal from "../../../component/Modal";
import Pagination from "../../../component/Pagination";
import Select from "../../../component/Select";
import Text from "../../../component/Text";
import TextArea from "../../../component/InputTextArea";
import Map from "../../../component/Map";

const Detail = (props: DetailProps) => {
  const { group, isMobileDevice, isTabletDevice, isDesktopDevice } = props;

  return (
    <>
      {group ? (
        <Container>
          <Columns columns={isDesktopDevice || isTabletDevice ? "1 3" : "1"}>
            <Grid>
              <Image src={group.imageUrl} />
              <Text>{group.name}</Text>
              <Text>{group.address}</Text>
              <MapContainer>
                <Map
                  location={{
                    latitude: group.latitude,
                    longitude: group.longitude,
                  }}
                  markers={[
                    { latitude: group.latitude, longitude: group.longitude },
                  ]}
                />
              </MapContainer>
              <Text>{group.description}</Text>
            </Grid>
            <Grid>
              <Thumbnail src={group.imageUrl} />
              <Text sizing="large">Member</Text>
            </Grid>
          </Columns>
        </Container>
      ) : (
        <div style={{ padding: "32px", textAlign: "center" }}>
          <div className="spinner-border text-danger"></div>
        </div>
      )}
    </>
  );
};

export default Detail;
