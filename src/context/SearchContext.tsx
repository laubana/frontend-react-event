import { FC, ReactNode, createContext, useContext, useState } from "react";

interface ContextProps {
  searchEventName?: string;
  handleChangeEventName: (eventName: string | undefined) => void;
}

interface ProviderProps {
  children: ReactNode;
}

const SearchContext = createContext<ContextProps | undefined>(undefined);

const SearchContextProvider: FC<ProviderProps> = ({ children }) => {
  const [searchEventName, setSearchEventName] = useState<string>();

  const handleChangeEventName = (eventName: string | undefined) => {
    setSearchEventName(eventName);
  };

  return (
    <SearchContext.Provider
      value={{
        searchEventName,
        handleChangeEventName,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = (): ContextProps => {
  const searchContext = useContext(SearchContext);
  if (!searchContext) {
    throw new Error("SearchContext failed.");
  }
  return searchContext;
};
export default SearchContextProvider;
