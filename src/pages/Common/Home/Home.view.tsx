import { HomeProps } from "./Home.props";
import Map, {
  Marker,
  FullscreenControl,
  GeolocateControl,
  Popup,
} from "react-map-gl";
import { Container } from "./Home.style";
import Grid from "../../../component/Grid";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "mapbox-gl/dist/mapbox-gl.css";
import Select from "../../../component/Select";
import InputPlace from "../../../component/InputPlace";
import Columns from "../../../component/Columns";
import Card from "../../../component/Card";
import Infinite from "../../../component/Infinite";

const HomeView = (props: HomeProps) => {
  const {
    mapRef,
    currentAddress,
    currentLocation,

    categories,
    pagedGroups,
    hasMoreGroups,

    popup,

    handleScroll,
    handleOpenPopup,
    handleClosePopup,
    handleChangePk,
    handleChangeLocation,
    handleChangeDistance,

    isMobileDevice,
    isTabletDevice,
    isDesktopDevice,
  } = props;

  return (
    <Container>
      {currentLocation && pagedGroups && categories ? (
        <>
          <Grid>
            <Map
              ref={mapRef}
              mapboxAccessToken={process.env.REACT_APP_MAPBOX}
              initialViewState={{
                zoom: 12,
                latitude: currentLocation?.latitude,
                longitude: currentLocation?.longitude,
              }}
              style={{
                width: "100%",
                aspectRatio: isMobileDevice ? 1 : 2,
                border: "1px solid lightgrey",
                borderRadius: "8px",
              }}
              mapStyle="mapbox://styles/mapbox/streets-v9"
            >
              <GeolocateControl position="top-left" />
              <FullscreenControl position="top-left" />
              <Marker
                latitude={currentLocation?.latitude}
                longitude={currentLocation?.longitude}
                color="black"
              />
              {pagedGroups?.map((group, index) => (
                <Marker
                  latitude={group.location.latitude}
                  longitude={group.location.longitude}
                  color="#dc3545"
                  onClick={() => handleOpenPopup(group)}
                  style={{ cursor: "pointer" }}
                  key={index}
                />
              ))}
              {popup && (
                <Popup
                  anchor="top"
                  latitude={Number(popup.location.latitude)}
                  longitude={Number(popup.location.longitude)}
                  maxWidth="150px"
                  focusAfterOpen={false}
                  closeButton={false}
                  closeOnClick={false}
                  onClose={() => handleClosePopup()}
                >
                  <Grid style={{ justifyItems: "end" }}>
                    <FaXmark
                      color="black"
                      size={16}
                      onClick={() => handleClosePopup()}
                      cursor="pointer"
                    />
                    <Link to={`/group/detail/${popup.id}`}>
                      <Card
                        image={`/square/group/get_small_image?groupPk=${popup.id}`}
                        title={popup.name}
                      />
                    </Link>
                  </Grid>
                </Popup>
              )}
            </Map>
          </Grid>
          <Grid columns={isMobileDevice ? 1 : 2}>
            <Select
              options={categories.map((category, _) => ({
                label: category.value,
                value: category.id.toString(),
              }))}
              setOption={handleChangePk}
            />
            <Columns
              columns={isMobileDevice ? "1" : "7 3"}
              style={{ justifyItems: "space-between" }}
            >
              <InputPlace
                address={currentAddress}
                setPlace={handleChangeLocation}
              />
              <Select
                options={[10, 20, 30, 40, 50, 60, 70, 80, 100].map(
                  (distance) => ({
                    value: distance.toString(),
                    label: `${distance} km`,
                  })
                )}
                setOption={handleChangeDistance}
                defaultValue={50}
              />
            </Columns>
          </Grid>
          <Infinite
            columns={isDesktopDevice ? 4 : isTabletDevice ? 3 : 2}
            items={pagedGroups.map((group, index) => (
              <Link to={`/group/detail/${group.id}`} key={index}>
                <Card
                  image={`/square/group/get_small_image?groupPk=${group.id}`}
                  title={group.name}
                />
              </Link>
            ))}
            hasMore={hasMoreGroups}
            onScroll={handleScroll}
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
