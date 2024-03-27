import React, { useState } from "react";
import { Footer, Header, Main } from "./Layout.style";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Flex from "../../component/Flex";
import Button from "../../component/Button";
import Text from "../../component/Text";
import { UseUserContext } from "../../context/UserContext";
import { UseSearchContext } from "../../context/SearchContext";
import InputText from "../../component/InputText";

const LayoutComponent = ({}): JSX.Element => {
  const navigate = useNavigate();
  const { sessionUserPk, sessionUserId, isSignedin, signout } =
    UseUserContext();
  const { handleOnChangeGroupName } = UseSearchContext();

  const [inputGroupName, setInputGroupName] = useState<string>("");

  const handleOnChangeInputGroupName = (inputGroupName: string) => {
    setInputGroupName(inputGroupName);
  };

  const handleOnSearch = () => {
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
              <Text type="h1">Square</Text>
            </Link>
            <Flex style={{ alignItems: "center", flexGrow: 1 }}>
              <InputText
                placeholder="Search"
                text={inputGroupName}
                setText={handleOnChangeInputGroupName}
              />
              <Button onClick={handleOnSearch}>Search</Button>
            </Flex>
          </Flex>
          <Flex
            style={{
              alignItems: "center",
              justifyContent: "flex-end",
              flexGrow: 1,
            }}
          >
            {isSignedin !== undefined &&
              (isSignedin ? (
                <Flex
                  style={{
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <Link to={`/user/detail/${sessionUserPk}`}>
                    <Button color="transparent">{sessionUserId}</Button>
                  </Link>
                  <Flex style={{ alignItems: "center" }}>
                    <Link to={`/group/create`}>
                      <Button>Create Group</Button>
                    </Link>
                    <Button color="black" onClick={signout}>
                      Sign Out
                    </Button>
                  </Flex>
                </Flex>
              ) : (
                <>
                  <Link to="/auth/signin">
                    <Button color="black">Sign In</Button>
                  </Link>
                  <Link to="/auth/signup">
                    <Button>Sign Up</Button>
                  </Link>
                </>
              ))}
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
