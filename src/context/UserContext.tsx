import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface ContextProps {
  sessionUserPk?: number;
  sessionUserId?: string;
  handleOnChangeUserPk: (userPk: number) => void;
  handleOnChangeUserId: (userId: string) => void;
  signout: () => void;
}

interface ProviderProps {
  children: ReactNode;
}

const UserContext = createContext<ContextProps | undefined>(undefined);

const UserContextProvider: FC<ProviderProps> = ({ children }) => {
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
      } else {
        setSessionUserPk(undefined);
        setSessionUserId(undefined);
      }
    };
    main();
  }, []);

  const signout = async () => {
    const response = await fetch("/square/auth/logout_user", {
      method: "POST",
    });
    response.text().then((response) => {
      if (response) {
        setSessionUserPk(undefined);
        setSessionUserId(undefined);
      }
    });
  };

  return (
    <UserContext.Provider
      value={{
        sessionUserPk,
        sessionUserId,
        handleOnChangeUserPk,
        handleOnChangeUserId,
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
