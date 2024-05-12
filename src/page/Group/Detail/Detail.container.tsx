import { useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import DetailView from "./Detail.view";
import { useGetGroupQuery } from "../../../slice/groupApiSlice";
import {
  useAddRegistrationMutation,
  useDeleteRegistrationGroupUserMutation,
  useGetRegistrationGroupUserQuery,
  useGetRegistrationsGroupQuery,
} from "../../../slice/registrationApiSlice";
import { useAddCommentMutation } from "../../../slice/commentApiSlice";

const Detail = () => {
  const { groupId } = useParams();

  const { data: group } = useGetGroupQuery(groupId);
  const { data: registrations = [] } = useGetRegistrationsGroupQuery({
    groupId,
  });
  const { data: registration } = useGetRegistrationGroupUserQuery({ groupId });
  const [addRegistration] = useAddRegistrationMutation();
  const [deleteRegistration] = useDeleteRegistrationGroupUserMutation();
  const [addComment] = useAddCommentMutation();

  const isMobileDevice = useMediaQuery({ maxWidth: 767 });
  const isTabletDevice = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isDesktopDevice = useMediaQuery({ minWidth: 992 });

  const handleJoin = () => {
    if (groupId) {
      addRegistration({ groupId });
    }
  };

  const handleLeave = () => {
    if (groupId) {
      deleteRegistration({ groupId });
    }
  };

  const props = {
    group,
    registrations,
    registration,
    isMobileDevice,
    isTabletDevice,
    isDesktopDevice,
    handleJoin,
    handleLeave,
  };

  return <DetailView {...props} />;
};

export default Detail;
