import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import { ProtectProps } from "./Auth.props";
import {} from "./Auth.style";

import { useRefreshMutation } from "../../slice/authApiSlice";
import { selectAccessToken, setAuth } from "../../slice/authSlice";
import { store } from "../../store/store";

const ProtectComponent = (props: ProtectProps): JSX.Element => {
  const [refresh] = useRefreshMutation();
  const dispatch = useDispatch<typeof store.dispatch>();

  const accessToken = useSelector(selectAccessToken);
  const [isRefreshed, setIsRefreshed] = useState<boolean | undefined>(
    undefined
  );

  useEffect((): any => {
    const main = async () => {
      try {
        const refreshResponse = await refresh().unwrap();
        dispatch(setAuth(refreshResponse.data));
      } catch (error) {
      } finally {
        setIsRefreshed(true);
      }
    };

    if (accessToken) {
      setIsRefreshed(true);
    } else {
      main();
    }
  }, []);

  return <>{isRefreshed && <Outlet />}</>;
};

export default React.memo(ProtectComponent);
