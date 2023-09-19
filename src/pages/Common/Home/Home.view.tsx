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
import AutoComplete from "../../../component/AutoComplete";
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

    handleOnScroll,
    handleOnOpenPopup,
    handleOnClosePopup,
    handleOnChangePk,
    handleOnChangeLocation,
    handleOnChangeDistance,

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
                  latitude={group.groupLocationLatitude}
                  longitude={group.groupLocationLongitude}
                  color="#dc3545"
                  onClick={() => handleOnOpenPopup(group)}
                  style={{ cursor: "pointer" }}
                  key={index}
                />
              ))}
              {popup && (
                <Popup
                  anchor="top"
                  latitude={Number(popup.groupLocationLatitude)}
                  longitude={Number(popup.groupLocationLongitude)}
                  maxWidth="150px"
                  focusAfterOpen={false}
                  closeButton={false}
                  closeOnClick={false}
                  onClose={() => handleOnClosePopup()}
                >
                  <Grid style={{ justifyItems: "end" }}>
                    <FaXmark
                      color="black"
                      size={16}
                      onClick={() => handleOnClosePopup()}
                      cursor="pointer"
                    />
                    <Link to={`/group/detail/${popup.groupPk}`}>
                      <Card
                        image={`/square/group/get_small_image?groupPk=${popup.groupPk}`}
                        title={popup.groupName}
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
                label: category.groupCategoryValue,
                value: category.groupCategoryPk.toString(),
              }))}
              setOption={handleOnChangePk}
            />
            <Columns
              columns={isMobileDevice ? "1" : "7 3"}
              style={{ justifyItems: "space-between" }}
            >
              <AutoComplete
                address={currentAddress}
                setPlace={handleOnChangeLocation}
              />
              <Select
                options={[10, 20, 30, 40, 50, 60, 70, 80, 100].map(
                  (distance) => ({
                    value: distance.toString(),
                    label: `${distance} km`,
                  })
                )}
                setOption={handleOnChangeDistance}
                defaultValue={50}
              />
            </Columns>
          </Grid>
          <Infinite
            columns={isDesktopDevice ? 4 : isTabletDevice ? 3 : 2}
            items={pagedGroups.map((group, index) => (
              <Link to={`/group/detail/${group.groupPk}`} key={index}>
                <Card
                  image={`/square/group/get_small_image?groupPk=${group.groupPk}`}
                  title={group.groupName}
                />
              </Link>
            ))}
            hasMore={hasMoreGroups}
            onScroll={handleOnScroll}
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
