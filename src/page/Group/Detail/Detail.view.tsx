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
import GroupForm from "../../../component/GroupForm";
import InputSingleImage from "../../../component/InputSingleImage";
import InputTextArea from "../../../component/InputTextArea";
import Loading from "../../../component/Loading";
import Map from "../../../component/Map";
import Modal from "../../../component/Modal";
import Pagination from "../../../component/Pagination";
import Text from "../../../component/Text";

const Detail = (props: DetailProps) => {
  const {
    accessToken,
    categorys,
    group,
    groupComments,
    groupImages,
    groupRegistration,
    groupRegistrations,
    handleAddEvent,
    handleAddGroupComment,
    handleCloseAddGroupImage,
    handleCloseUpdateGroup,
    handleConfirmAddGroupImage,
    handleConfirmUpdateGroup,
    handleGroupCommentPagination,
    handleGroupImagePagination,
    handleGroupRegistrationPagination,
    handleJoin,
    handleLeave,
    handleOpenAddGroupImage,
    handleOpenUpdateGroup,
    inputComment,
    inputImage,
    isLoading,
    isVisibleAddGroupImage,
    isVisibleUpdateGroup,
    pagedGroupComments,
    pagedGroupImages,
    pagedGroupRegistrations,
    setInputComment,
    setInputImage,
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
              <Thumbnail src={group.thumbnailUrl} />
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
              {group.user._id === groupRegistration?.user._id && (
                <Button onClick={handleOpenUpdateGroup}>Update</Button>
              )}
              {accessToken &&
                group.user._id !== groupRegistration?.user._id &&
                (groupRegistration ? (
                  <Button onClick={handleLeave}>Leave</Button>
                ) : (
                  <Button onClick={handleJoin}>Join</Button>
                ))}
            </Grid>
            <Grid>
              <Image src={group.imageUrl} />
              <TitleContainer>
                <Text size="large">Member</Text>
              </TitleContainer>
              {0 < groupRegistrations.length && (
                <>
                  <Grid columns={isDesktopDevice ? 8 : isTabletDevice ? 6 : 4}>
                    {pagedGroupRegistrations.map(
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
                      items={groupRegistrations}
                      groupItemNumber={4}
                      onClick={handleGroupRegistrationPagination}
                    />
                  </PaginationContainer>{" "}
                </>
              )}
              {/* <TitleContainer>
                <Text size="large">Event</Text>
                {group.user._id === groupRegistration?.user._id && (
                  <Button onClick={handleAddEvent}>Create</Button>
                )}
              </TitleContainer> */}
              <TitleContainer>
                <Text size="large">Comment</Text>
              </TitleContainer>
              {0 < groupComments.length && (
                <>
                  <Grid>
                    {pagedGroupComments.map((pagedComment, index) => (
                      <Comment
                        imageUrl={pagedComment.user.imageUrl}
                        content={pagedComment.value}
                        key={index}
                      />
                    ))}
                  </Grid>
                  <PaginationContainer>
                    <Pagination
                      items={groupComments}
                      groupItemNumber={4}
                      onClick={handleGroupCommentPagination}
                    />
                  </PaginationContainer>
                </>
              )}
              {groupRegistration && (
                <Columns columns="9 1" style={{ alignItems: "end" }}>
                  <InputTextArea
                    text={inputComment}
                    setText={setInputComment}
                  />
                  <Button onClick={handleAddGroupComment}>Submit</Button>
                </Columns>
              )}
              <TitleContainer>
                <Text size="large">Image</Text>
                {groupRegistration && (
                  <Button onClick={handleOpenAddGroupImage}>Upload</Button>
                )}
              </TitleContainer>
              {0 < groupImages.length && (
                <>
                  <Grid columns={4}>
                    {pagedGroupImages.map((pagedImage, index) => (
                      <Image src={pagedImage.imageUrl} key={index} />
                    ))}
                  </Grid>
                  <PaginationContainer>
                    <Pagination
                      items={groupImages}
                      groupItemNumber={4}
                      onClick={handleGroupImagePagination}
                    />
                  </PaginationContainer>
                </>
              )}
            </Grid>
          </Columns>
          <Modal
            isVisibile={isVisibleAddGroupImage}
            onClose={handleCloseAddGroupImage}
          >
            <Grid style={{ gap: "32px" }}>
              <InputSingleImage
                image={inputImage}
                setImage={setInputImage}
                style={{ aspectRatio: 2 }}
              />
              <Button block onClick={handleConfirmAddGroupImage}>
                Confirm
              </Button>
            </Grid>
          </Modal>
          <Modal
            isVisibile={isVisibleUpdateGroup}
            onClose={handleCloseUpdateGroup}
          >
            <GroupForm
              categorys={categorys}
              label="Confirm"
              onSubmit={handleConfirmUpdateGroup}
              values={{
                address: group.address,
                category: {
                  label: group.category.value,
                  value: group.category._id,
                },
                description: group.description,
                image: group.imageUrl,
                latitude: group.latitude,
                longitude: group.longitude,
                name: group.name,
                thumbnail: group.thumbnailUrl,
              }}
            />
          </Modal>
        </Container>
      ) : (
        <Loading />
      )}
      <Loading isVisibile={isLoading} />
    </>
  );
};

export default Detail;
