import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { MapRef } from "react-map-gl";
import { HomeProps } from "./Home.props";
import HomeView from "./Home.view";
import { Event } from "../../../type/Event";
import { useSearchContext } from "../../../context/SearchContext";
import { Place } from "../../../type/Place";
import { Option } from "../../../type/Option";
import { useGetCategorysQuery } from "../../../slice/categoryApiSlice";
import { useGetEventsQuery } from "../../../slice/eventApiSlice";

const Home = (): JSX.Element => {
  const { data: categorys = { message: "", data: [] } } =
    useGetCategorysQuery();
  const { data: events = { message: "", data: [] }, isSuccess } =
    useGetEventsQuery();

  const mapForwardedRef = useRef<MapRef>(null);

  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [pagedEvents, setPagedEvents] = useState<Event[]>([]);
  const [currentEventPage, setCurrentEventPage] = useState<number>(1);
  const [hasMoreEvents, setHasMoreEvents] = useState<boolean>(true);

  const { searchEventName } = useSearchContext();
  const [searchCategory, setSearchCategory] = useState<Option | undefined>(
    undefined
  );
  const [searchPlace, setSearchPlace] = useState<Place | undefined>(undefined);
  const [searchDistance, setSearchDistance] = useState<Option | undefined>({
    value: "50",
    label: "50 km",
  });

  const [popup, setPopup] = useState<Event>();

  const isMobileDevice = useMediaQuery({ maxWidth: 767 });
  const isTabletDevice = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isDesktopDevice = useMediaQuery({ minWidth: 992 });

  const handleScroll = () => {
    setCurrentEventPage((oldValue) => oldValue + 1);
  };

  useEffect(() => {
    setFilteredEvents(
      events.data
        .filter((event) =>
          searchCategory ? event.category._id === searchCategory.value : true
        )
        .filter((event) =>
          searchEventName
            ? event.name.toUpperCase().includes(searchEventName.toUpperCase())
            : true
        )
    );
    setCurrentEventPage(1);
  }, [isSuccess, searchCategory, searchEventName, searchPlace, searchDistance]);

  useEffect(() => {
    const main = async () => {
      setPagedEvents(filteredEvents.slice(0, 4 * currentEventPage));

      if (Math.ceil(filteredEvents.length / 4) <= currentEventPage) {
        setHasMoreEvents(false);
      } else {
        setHasMoreEvents(true);
      }
    };
    main();
  }, [filteredEvents, currentEventPage]);

  const props: HomeProps = {
    mapForwardedRef,
    categorys: categorys.data,
    pagedEvents,
    hasMoreEvents,
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
