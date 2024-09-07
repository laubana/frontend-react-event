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
import EventForm from "../../../component/EventForm";
import Grid from "../../../component/Grid";
import GroupForm from "../../../component/GroupForm";
import InputSingleImage from "../../../component/InputSingleImage";
import InputTextArea from "../../../component/InputTextArea";
import Loading from "../../../component/Loading";
import Map from "../../../component/Map";
import Modal from "../../../component/Modal";
import Pagination from "../../../component/Pagination";
import Text from "../../../component/Text";
import InputDate from "../../../component/InputDate";

const Detail = (props: DetailProps) => {
  const {
    accessToken,
    event,
    eventComments,
    eventImages,
    eventRegistration,
    eventRegistrations,
    handleAddEventComment,
    handleCloseAddEventImage,
    handleCloseUpdateEvent,
    handleConfirmAddEventImage,
    handleConfirmUpdateEvent,
    handleEventCommentPagination,
    handleEventImagePagination,
    handleEventRegistrationPagination,
    handleOpenAddEventImage,
    handleOpenUpdateEvent,
    inputComment,
    inputImage,
    isLoading,
    isVisibleAddEventImage,
    isVisibleUpdateEvent,
    pagedEventComments,
    pagedEventImages,
    pagedEventRegistrations,
    setInputComment,
    setInputImage,
  } = props;

  const isMobileDevice = useMediaQuery({ maxWidth: 767 });
  const isTabletDevice = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isDesktopDevice = useMediaQuery({ minWidth: 992 });

  return (
    <>
      {event ? (
        <Container>
          <Columns columns={isMobileDevice ? "1" : "1 3"}>
            <Grid>Test</Grid>
            <Grid>
              <InputDate setDate={() => null} />
            </Grid>
          </Columns>
          <Modal
            isVisibile={isVisibleAddEventImage}
            onClose={handleCloseAddEventImage}
          >
            <Grid style={{ gap: "32px" }}>
              <InputSingleImage
                image={inputImage}
                setImage={setInputImage}
                style={{ aspectRatio: 2 }}
              />
              <Button block onClick={handleConfirmAddEventImage}>
                Confirm
              </Button>
            </Grid>
          </Modal>
          <Modal
            isVisibile={isVisibleUpdateEvent}
            onClose={handleCloseUpdateEvent}
          >
            Test
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
