import { FC, ReactNode, createContext, useContext, useState } from "react";

interface ContextProps {
  searchName?: string;
  handleChangeSearchName: (eventName: string | undefined) => void;
}

interface ProviderProps {
  children: ReactNode;
}

const SearchContext = createContext<ContextProps | undefined>(undefined);

const SearchContextProvider: FC<ProviderProps> = ({ children }) => {
  const [searchName, setSearchName] = useState<string>();

  const handleChangeSearchName = (inputSearchName: string | undefined) => {
    setSearchName(inputSearchName);
  };

  return (
    <SearchContext.Provider
      value={{
        searchName,
        handleChangeSearchName,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = (): ContextProps => {
  const searchContext = useContext(SearchContext);
  if (!searchContext) {
    throw new Error("Context must be called in the provider.");
  }

  return searchContext;
};
export default SearchContextProvider;
