import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ProtectProps } from "./Protect.props";
import {} from "./Protect.style";
import { selectAccessToken } from "../../slice/authSlice";

const ProtectComponent = (props: ProtectProps): JSX.Element => {
  const { allowedRoles } = props;

  const location = useLocation();

  const accessToken = useSelector(selectAccessToken);

  return accessToken ? (
    <Outlet />
  ) : (
    <Navigate to="/auth/sign-in" state={{ from: location }} replace />
  );
};

export default React.memo(ProtectComponent);
