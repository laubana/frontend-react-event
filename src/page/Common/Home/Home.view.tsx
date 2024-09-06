import "mapbox-gl/dist/mapbox-gl.css";
import { Link } from "react-router-dom";

import { HomeProps } from "./Home.props";
import { Container, MapContainer } from "./Home.style";

import AutoComplete from "../../../component/AutoComplete";
import Columns from "../../../component/Columns";
import Grid from "../../../component/Grid";
import GroupCard from "../../../component/GroupCard";
import Infinite from "../../../component/Infinite";
import InputPlace from "../../../component/InputPlace";
import Map from "../../../component/Map";

const HomeView = (props: HomeProps) => {
  const {
    categorys,
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
  } = props;

  return (
    <Container>
      {pagedGroups && categorys ? (
        <>
          <MapContainer>
            <Map
              forwardedRef={mapForwardedRef}
              markers={pagedGroups.map((pagedGroup) => ({
                latitude: pagedGroup.latitude,
                longitude: pagedGroup.longitude,
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
            items={pagedGroups.map((group, index) => (
              <Link to={`/group/${group._id}`} key={index}>
                <GroupCard image={group.thumbnailUrl} title={group.name} />
              </Link>
            ))}
            hasMore={hasMoreGroups}
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
