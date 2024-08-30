import "mapbox-gl/dist/mapbox-gl.css";
import { Link } from "react-router-dom";

import { HomeProps } from "./Home.props";
import { Container, MapContainer } from "./Home.style";

import AutoComplete from "../../../component/AutoComplete";
import Columns from "../../../component/Columns";
import EventCard from "../../../component/EventCard";
import Grid from "../../../component/Grid";
import Infinite from "../../../component/Infinite";
import InputPlace from "../../../component/InputPlace";
import Map from "../../../component/Map";

const HomeView = (props: HomeProps) => {
  const {
    mapForwardedRef,
    categorys,
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
  } = props;

  return (
    <Container>
      {pagedEvents && categorys ? (
        <>
          <MapContainer>
            <Map
              forwardedRef={mapForwardedRef}
              markers={pagedEvents.map((pagedEvent) => ({
                latitude: pagedEvent.latitude,
                longitude: pagedEvent.longitude,
              }))}
            />
          </MapContainer>
          <Grid columns={isMobileDevice ? 1 : 2}>
            <AutoComplete
              placeholder="Category"
              options={categorys.map((category, _) => ({
                value: category._id,
                label: category.value,
              }))}
              setOption={setSearchCategory}
            />
            <Columns
              columns={isMobileDevice ? "1" : "7 3"}
              style={{ justifyItems: "space-between" }}
            >
              <InputPlace placeholder="Address" setPlace={setSearchPlace} />
              <AutoComplete
                placeholder="Distance"
                options={[10, 20, 30, 40, 50, 60, 70, 80, 100].map(
                  (distance) => ({
                    value: distance.toString(),
                    label: `${distance} km`,
                  })
                )}
                option={{ value: "50", label: "50 km" }}
                setOption={setSearchDistance}
              />
            </Columns>
          </Grid>
          <Infinite
            columns={isDesktopDevice ? 4 : isTabletDevice ? 3 : 2}
            items={pagedEvents.map((event, index) => (
              <Link to={`/event/${event._id}`} key={index}>
                <EventCard image={event.thumbnailUrl} title={event.name} />
              </Link>
            ))}
            hasMore={hasMoreEvents}
            onScroll={handleScroll}
            style={{ padding: "8px" }}
          />
        </>
      ) : (
        <div style={{ padding: "32px", textAlign: "center" }}>
          <div className="spinner-border text-danger"></div>
        </div>
      )}
    </Container>
  );
};

export default HomeView;
