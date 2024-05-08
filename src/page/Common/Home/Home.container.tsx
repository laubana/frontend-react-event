import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { MapRef } from "react-map-gl";
import { HomeProps } from "./Home.props";
import HomeView from "./Home.view";
import { Group } from "../../../type/Group";
import { UseSearchContext } from "../../../context/SearchContext";
import { Place } from "../../../type/Place";
import { Option } from "../../../type/Option";
import { useGetCategorysQuery } from "../../../slice/categoryApiSlice";
import { useGetGroupsQuery } from "../../../slice/groupApiSlice";

const Home = (): JSX.Element => {
  const { data: categorys = [] } = useGetCategorysQuery();
  const { data: groups = [] } = useGetGroupsQuery();

  const mapForwardedRef = useRef<MapRef>(null);

  const [pagedGroups, setPagedGroups] = useState<Group[]>([]);
  const [currentGroupPage, setCurrentGroupPage] = useState<number>(1);
  const [hasMoreGroups, setHasMoreGroups] = useState<boolean>(true);

  const { searchGroupName } = UseSearchContext();
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
    const main = async () => {
      setCurrentGroupPage(1);
    };
    main();
  }, [searchCategory, searchGroupName, searchPlace, searchDistance]);

  useEffect(() => {
    const main = async () => {
      if (groups) {
        setPagedGroups(groups.slice(0, 4 * currentGroupPage));

        if (Math.ceil(groups.length / 4) <= currentGroupPage) {
          setHasMoreGroups(false);
        } else {
          setHasMoreGroups(true);
        }
      }
    };
    main();
  }, [groups, currentGroupPage]);

  const props: HomeProps = {
    mapForwardedRef,

    categorys,
    pagedGroups,
    hasMoreGroups,

    popup,

    handleScroll,
    setSearchCategory,
    setSearchPlace,
    setSearchDistance,

    isMobileDevice,
    isTabletDevice,
    isDesktopDevice,
  };
  return <HomeView {...props} />;
};

export default Home;
