import { useMediaQuery } from "react-responsive";
import { DetailProps } from "./Detail.props";
import {
  Container,
  Image,
  MapContainer,
  PaginationContainer,
  Thumbnail,
  TitleContainer,
} from "./Detail.style";
import Avatar from "../../../component/Avatar";
import Button from "../../../component/Button";
import Columns from "../../../component/Columns";
import Comment from "../../../module/Comment";
import Grid from "../../../component/Grid";
import InputSingleImage from "../../../component/InputSingleImage";
import InputTextArea from "../../../component/InputTextArea";
import Map from "../../../component/Map";
import Modal from "../../../component/Modal";
import Pagination from "../../../component/Pagination";
import Text from "../../../component/Text";

const Detail = (props: DetailProps) => {
  const {
    accessToken,
    event,
    registration,
    registrations,
    pagedRegistrations,
    comments,
    pagedComments,
    inputComment,
    setInputComment,
    isVisible,
    images,
    pagedImages,
    inputImage,
    setInputImage,
    handleJoin,
    handleLeave,
    handleRegistrationPagination,
    handleComment,
    handleCommentPagination,
    handleOpen,
    handleClose,
    handleImage,
    handleImagePagination,
  } = props;

  const isMobileDevice = useMediaQuery({ maxWidth: 767 });
  const isTabletDevice = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isDesktopDevice = useMediaQuery({ minWidth: 992 });

  return (
    <>
      {event ? (
        <Container>
          <Columns columns={isMobileDevice ? "1" : "1 3"}>
            <Grid>
              <Thumbnail src={event.imageUrl} />
              <Text>{event.name}</Text>
              <Text>{event.address}</Text>
              <MapContainer>
                <Map
                  location={{
                    latitude: event.latitude,
                    longitude: event.longitude,
                  }}
                  markers={[
                    { latitude: event.latitude, longitude: event.longitude },
                  ]}
                />
              </MapContainer>
              <Text>{event.description}</Text>
              {accessToken &&
                event.user._id !== registration?.user._id &&
                (registration ? (
                  <Button onClick={handleLeave}>Leave</Button>
                ) : (
                  <Button onClick={handleJoin}>Join</Button>
                ))}
            </Grid>
            <Grid>
              <Image src={event.imageUrl} />
              <TitleContainer>
                <Text sizing="large">Member</Text>
              </TitleContainer>
              {0 < registrations.length && (
                <>
                  <Grid columns={isDesktopDevice ? 8 : isTabletDevice ? 6 : 4}>
                    {pagedRegistrations.map(
                      (pagedRegistrationMapItem, pagedRegistrationMapIndex) => (
                        <Avatar
                          imageUrl={pagedRegistrationMapItem.user.imageUrl}
                          key={pagedRegistrationMapIndex}
                        />
                      )
                    )}
                  </Grid>
                  <PaginationContainer>
                    <Pagination
                      items={registrations}
                      groupItemNumber={4}
                      onClick={handleRegistrationPagination}
                    />
                  </PaginationContainer>{" "}
                </>
              )}
              <TitleContainer>
                <Text sizing="large">Comment</Text>
              </TitleContainer>
              {0 < comments.length && (
                <>
                  <Grid>
                    {pagedComments.map((pagedComment, index) => (
                      <Comment
                        imageUrl={pagedComment.user.imageUrl}
                        content={pagedComment.value}
                        key={index}
                      />
                    ))}
                  </Grid>
                  <PaginationContainer>
                    <Pagination
                      items={comments}
                      groupItemNumber={4}
                      onClick={handleCommentPagination}
                    />
                  </PaginationContainer>
                </>
              )}
              {registration && (
                <Columns columns="9 1" style={{ alignItems: "end" }}>
                  <InputTextArea
                    text={inputComment}
                    setText={setInputComment}
                  />
                  <Button onClick={handleComment}>Submit</Button>
                </Columns>
              )}
              <TitleContainer>
                <Text sizing="large">Image</Text>
                {registration && <Button onClick={handleOpen}>Upload</Button>}
              </TitleContainer>
              {0 < images.length && (
                <>
                  <Grid columns={4}>
                    {pagedImages.map((pagedImage, index) => (
                      <Image src={pagedImage.imageUrl} key={index} />
                    ))}
                  </Grid>
                  <PaginationContainer>
                    <Pagination
                      items={images}
                      groupItemNumber={4}
                      onClick={handleImagePagination}
                    />
                  </PaginationContainer>
                </>
              )}
            </Grid>
          </Columns>
        </Container>
      ) : (
        <div style={{ padding: "32px", textAlign: "center" }}>
          <div className="spinner-border text-danger"></div>
        </div>
      )}
      {isVisible && (
        <Modal isVisibile={isVisible} onClose={handleClose}>
          <InputSingleImage
            image={inputImage}
            setImage={setInputImage}
            style={{ aspectRatio: 2 }}
          />
          <Button onClick={handleImage}>Confirm</Button>
        </Modal>
      )}
    </>
  );
};

export default Detail;
