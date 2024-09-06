import { useEffect, useRef, useState } from "react";
import { MapRef } from "react-map-gl";
import { useMediaQuery } from "react-responsive";

import { HomeProps } from "./Home.props";
import HomeView from "./Home.view";

import { useSearchContext } from "../../../context/SearchContext";
import { useGetCategorysQuery } from "../../../slice/categoryApiSlice";
import { useGetAllGroupsQuery } from "../../../slice/groupApiSlice";
import { Group } from "../../../type/Group";
import { Option } from "../../../type/Option";
import { Place } from "../../../type/Place";

const Home = (): JSX.Element => {
  const { data: categorys = { message: "", data: [] } } =
    useGetCategorysQuery();
  const { data: groups = { message: "", data: [] }, isSuccess } =
    useGetAllGroupsQuery();

  const mapForwardedRef = useRef<MapRef>(null);

  const [filteredGroups, setFilteredGroups] = useState<Group[]>([]);
  const [pagedGroups, setPagedGroups] = useState<Group[]>([]);
  const [currentGroupPage, setCurrentGroupPage] = useState<number>(1);
  const [hasMoreGroups, setHasMoreGroups] = useState<boolean>(true);

  const { searchName } = useSearchContext();
  const [searchCategory, setSearchCategory] = useState<Option | undefined>(
    undefined
  );
  const [searchPlace, setSearchPlace] = useState<Place | undefined>(undefined);
  const [searchDistance, setSearchDistance] = useState<Option | undefined>({
    value: "50",
    label: "50 km",
  });

  const [popup, setPopup] = useState<Group>();

  const isMobileDevice = useMediaQuery({ maxWidth: 767 });
  const isTabletDevice = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isDesktopDevice = useMediaQuery({ minWidth: 992 });

  const handleScroll = () => {
    setCurrentGroupPage((oldValue) => oldValue + 1);
  };

  useEffect(() => {
    setFilteredGroups(
      groups.data
        .filter((group) =>
          searchCategory ? group.category._id === searchCategory.value : true
        )
        .filter((group) =>
          searchName
            ? group.name.toUpperCase().includes(searchName.toUpperCase())
            : true
        )
    );
    setCurrentGroupPage(1);
  }, [isSuccess, searchCategory, searchName, searchPlace, searchDistance]);

  useEffect(() => {
    const main = async () => {
      setPagedGroups(filteredGroups.slice(0, 4 * currentGroupPage));

      if (Math.ceil(filteredGroups.length / 4) <= currentGroupPage) {
        setHasMoreGroups(false);
      } else {
        setHasMoreGroups(true);
      }
    };
    main();
  }, [filteredGroups, currentGroupPage]);

  const props: HomeProps = {
    categorys: categorys.data,
    handleScroll,
    hasMoreGroups,
    isDesktopDevice,
    isMobileDevice,
    isTabletDevice,
    mapForwardedRef,
    pagedGroups,
    setSearchCategory,
    setSearchDistance,
    setSearchPlace,
  };
  return <HomeView {...props} />;
};

export default Home;
