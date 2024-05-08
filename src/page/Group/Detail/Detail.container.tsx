import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import DetailView from "./Detail.view";
import { Group } from "../../../type/Group";
import { useGetGroupQuery } from "../../../slice/groupApiSlice";

const Detail = () => {
  const { groupId } = useParams();

  const { data: group } = useGetGroupQuery(groupId);

  const isMobileDevice = useMediaQuery({ maxWidth: 767 });
  const isTabletDevice = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isDesktopDevice = useMediaQuery({ minWidth: 992 });

  const props = {
    group,
    isMobileDevice,
    isTabletDevice,
    isDesktopDevice,
  };

  return <DetailView {...props} />;
};

export default Detail;
