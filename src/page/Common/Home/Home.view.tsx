import { HomeProps } from "./Home.props";
import { Container, MapContainer } from "./Home.style";
import Grid from "../../../component/Grid";
import { Link } from "react-router-dom";
import "mapbox-gl/dist/mapbox-gl.css";
import InputPlace from "../../../component/InputPlace";
import Columns from "../../../component/Columns";
import Card from "../../../component/Card";
import Infinite from "../../../component/Infinite";
import Map from "../../../component/Map";
import AutoComplete from "../../../component/AutoComplete";

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
              <Link to={`/event/detail/${event._id}`} key={index}>
                <Card image={event.thumbnailUrl} title={event.name} />
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
