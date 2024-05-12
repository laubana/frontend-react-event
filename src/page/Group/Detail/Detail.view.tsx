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
import Avatar from "../../../component/Avatar";
import InputTextArea from "../../../component/InputTextArea";

const Detail = (props: DetailProps) => {
  const {
    group,
    registrations,
    registration,
    isMobileDevice,
    isTabletDevice,
    isDesktopDevice,
    handleJoin,
    handleLeave,
  } = props;

  return (
    <>
      {group ? (
        <Container>
          <Columns columns={isMobileDevice ? "1" : "1 3"}>
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
              {group.user._id !== registration?.user._id &&
                (registration ? (
                  <Button onClick={handleLeave}>Leave</Button>
                ) : (
                  <Button onClick={handleJoin}>Join</Button>
                ))}
            </Grid>
            <Grid>
              <Thumbnail src={group.imageUrl} />
              <Text sizing="large">Member</Text>
              {0 < registrations.length && (
                <Grid columns={isDesktopDevice ? 8 : isTabletDevice ? 6 : 4}>
                  {registrations.map(
                    (registrationMapItem, registrationMapIndex) => (
                      <Avatar
                        source={registrationMapItem.user.imageUrl}
                        key={registrationMapIndex}
                      />
                    )
                  )}
                </Grid>
              )}
              <Text>Comment</Text>
              {registration && (
                <Columns columns="9 1" style={{ alignItems: "end" }}>
                  <InputTextArea text="t" setText={() => null} />
                  <Button>Submit</Button>
                </Columns>
              )}
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
