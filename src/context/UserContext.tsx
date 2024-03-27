import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

interface ContextProps {
  sessionUserPk?: number;
  sessionUserId?: string;
  isSignedin?: boolean;
  handleOnChangeUserPk: (userPk: number) => void;
  handleOnChangeUserId: (userId: string) => void;
  signin: (inputUserId: string, inputUserPassword: string) => void;
  signout: () => void;
}

interface ProviderProps {
  children: ReactNode;
}

const UserContext = createContext<ContextProps | undefined>(undefined);

const UserContextProvider: FC<ProviderProps> = ({ children }) => {
  const navigate = useNavigate();
  const [isSignedin, setIsSignedin] = useState<boolean>();
  const [sessionUserPk, setSessionUserPk] = useState<number>();
  const [sessionUserId, setSessionUserId] = useState<string>();

  const handleOnChangeUserPk = (userPk: number) => {
    setSessionUserPk(userPk);
  };

  const handleOnChangeUserId = (userId: string) => {
    setSessionUserId(userId);
  };

  useEffect(() => {
    const main = async () => {
      const userResponse = await fetch("/square/auth/get_user", {});
      const userValue = await userResponse.json();

      if (userValue.result) {
        setSessionUserPk(Number(userValue.userPk));
        setSessionUserId(userValue.userId);
        setIsSignedin(true);
      } else {
        setSessionUserPk(undefined);
        setSessionUserId(undefined);
        setIsSignedin(false);
      }
    };
    main();
  }, []);

  const signin = async (inputUserId: string, inputUserPassword: string) => {
    const formData = new FormData();
    formData.append("userId", inputUserId);
    formData.append("userPassword", inputUserPassword);

    const signinResponse = await fetch("/square/auth/signin_user", {
      method: "POST",
      body: formData,
    });
    const signinResult = await signinResponse.json();

    if (signinResult.result) {
      setSessionUserPk(Number(signinResult.userPk));
      setSessionUserId(signinResult.userId);
      setIsSignedin(true);
      navigate(-1);
    }
  };

  const signout = async () => {
    const response = await fetch("/square/auth/logout_user", {
      method: "POST",
    });
    response.text().then((response) => {
      if (response) {
        setSessionUserPk(undefined);
        setSessionUserId(undefined);
        setIsSignedin(false);
      }
    });
  };

  return (
    <UserContext.Provider
      value={{
        sessionUserPk,
        sessionUserId,
        isSignedin,
        handleOnChangeUserPk,
        handleOnChangeUserId,
        signin,
        signout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UseUserContext = (): ContextProps => {
  const userContext = useContext(UserContext);
  if (!userContext) {
    throw new Error("UserContext failed.");
  }
  return userContext;
};
export default UserContextProvider;
