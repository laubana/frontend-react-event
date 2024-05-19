import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { ProtectProps } from "./Auth.props";
import {} from "./Auth.style";
import { store } from "../../store/store";
import { useRefreshMutation } from "../../slice/authApiSlice";
import { selectAccessToken, setAuth } from "../../slice/authSlice";

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
        const refreshToken = Cookies.get("refreshToken");

        if (refreshToken) {
          const response = await refresh().unwrap();
          dispatch(setAuth(response.data));
        }
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
