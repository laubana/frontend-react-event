import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { Footer, Header, Main, SearchContainer } from "./Layout.style";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { store } from "../../store/store";
import { UseSearchContext } from "../../context/SearchContext";
import { selectAccessToken, selectEmail, signOut } from "../../slice/authSlice";
import Grid from "../../component/Grid";
import Flex from "../../component/Flex";
import Button from "../../component/Button";
import Text from "../../component/Text";
import InputText from "../../component/InputText";

const LayoutComponent = ({}): JSX.Element => {
  const navigate = useNavigate();

  const accessToken = useSelector(selectAccessToken);
  const email = useSelector(selectEmail);

  const dispatch = useDispatch<typeof store.dispatch>();
  const { handleChangeGroupName } = UseSearchContext();

  const [inputGroupName, setInputGroupName] = useState<string>("");

  const isMobileDevice = useMediaQuery({ maxWidth: 767 });

  const handleChangeInputGroupName = (inputGroupName: string) => {
    setInputGroupName(inputGroupName);
  };

  const handleSearch = () => {
    handleChangeGroupName(inputGroupName);
    navigate("/");
  };

  return (
    <>
      <Header>
        <Grid
          columns={isMobileDevice ? 1 : 2}
          style={{
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
              <Text>Group</Text>
            </Link>
            <Flex style={{ alignItems: "center", flexGrow: 1 }}>
              <SearchContainer>
                <InputText
                  placeholder="Search"
                  text={inputGroupName}
                  setText={handleChangeInputGroupName}
                />
              </SearchContainer>
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
                  <Button coloring="transparent">{email}</Button>
                </Link>
                <Flex style={{ alignItems: "center" }}>
                  <Link to={`/group/create`}>
                    <Button>Create Group</Button>
                  </Link>
                  <Button
                    coloring="black"
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
                  <Button coloring="black">Sign In</Button>
                </Link>
                <Link to="/auth/sign-up">
                  <Button>Sign Up</Button>
                </Link>
              </>
            )}
          </Flex>
        </Grid>
      </Header>
      <Main>
        <Outlet />
      </Main>
      <Footer>
        <Text alignment="center">© 2024, Yuhwan Ban</Text>
      </Footer>
    </>
  );
};

export default React.memo(LayoutComponent);
