import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Footer, Header, Main } from "./Layout.style";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { store } from "../../store/store";
import { UseSearchContext } from "../../context/SearchContext";
import { selectAccessToken, selectEmail, signOut } from "../../slice/authSlice";
import Flex from "../../component/Flex";
import Button from "../../component/Button";
import Text from "../../component/Text";
import InputText from "../../component/InputText";

const LayoutComponent = ({}): JSX.Element => {
  const navigate = useNavigate();

  const accessToken = useSelector(selectAccessToken);
  const email = useSelector(selectEmail);

  const dispatch = useDispatch<typeof store.dispatch>();
  const { handleChangeGroupName: handleOnChangeGroupName } = UseSearchContext();

  const [inputGroupName, setInputGroupName] = useState<string>("");

  const handleChangeInputGroupName = (inputGroupName: string) => {
    setInputGroupName(inputGroupName);
  };

  const handleSearch = () => {
    handleOnChangeGroupName(inputGroupName);
    navigate("/");
  };

  return (
    <>
      <Header>
        <Flex
          style={{
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Flex
            style={{
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              flexGrow: 1,
            }}
          >
            <Link to="/" reloadDocument={true}>
              <Text>Square</Text>
            </Link>
            <Flex style={{ alignItems: "center", flexGrow: 1 }}>
              <InputText
                placeholder="Search"
                text={inputGroupName}
                setText={handleChangeInputGroupName}
              />
              <Button onClick={handleSearch}>Search</Button>
            </Flex>
          </Flex>
          <Flex
            style={{
              alignItems: "center",
              justifyContent: "flex-end",
              flexGrow: 1,
            }}
          >
            {accessToken ? (
              <Flex
                style={{
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Link to={`/user/detail/`}>
                  <Button color="transparent">{email}</Button>
                </Link>
                <Flex style={{ alignItems: "center" }}>
                  <Link to={`/group/create`}>
                    <Button>Create Group</Button>
                  </Link>
                  <Button
                    color="black"
                    onClick={() => {
                      dispatch(signOut());
                    }}
                  >
                    Sign Out
                  </Button>
                </Flex>
              </Flex>
            ) : (
              <>
                <Link to="/auth/sign-in">
                  <Button color="black">Sign In</Button>
                </Link>
                <Link to="/auth/sign-up">
                  <Button>Sign Up</Button>
                </Link>
              </>
            )}
          </Flex>
        </Flex>
      </Header>
      <Main>
        <Outlet />
      </Main>
      <Footer>
        <p>Copyright © 2023 Yuhwan Ban. All rights reserved.</p>
      </Footer>
    </>
  );
};

export default React.memo(LayoutComponent);
