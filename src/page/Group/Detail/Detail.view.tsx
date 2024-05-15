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
    group,
    registrations,
    registration,
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
              <TitleContainer>
                <Text sizing="large">Member</Text>
              </TitleContainer>
              {0 < registrations.length && (
                <Grid columns={isDesktopDevice ? 8 : isTabletDevice ? 6 : 4}>
                  {registrations.map(
                    (registrationMapItem, registrationMapIndex) => (
                      <Avatar
                        imageUrl={registrationMapItem.user.imageUrl}
                        key={registrationMapIndex}
                      />
                    )
                  )}
                </Grid>
              )}
              <TitleContainer>
                <Text sizing="large">Comment</Text>
              </TitleContainer>
              {pagedComments.map((pagedComment, index) => (
                <Comment
                  imageUrl={pagedComment.user.imageUrl}
                  content={pagedComment.value}
                  key={index}
                />
              ))}
              <PaginationContainer>
                <Pagination
                  items={comments}
                  groupItemNumber={4}
                  onClick={handleCommentPagination}
                />
              </PaginationContainer>
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
