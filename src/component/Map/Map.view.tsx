import React, { ReactNode, useState } from "react";
import Map, {
  Marker,
  FullscreenControl,
  GeolocateControl,
  Popup,
} from "react-map-gl";
import { FaXmark } from "react-icons/fa6";
import { MapProps } from "./Map.props";
import { Container, PopupContainer } from "./Map.style";

import "mapbox-gl/dist/mapbox-gl.css";

const MapComponent = (props: MapProps): JSX.Element => {
  const { ref, location, markers, popups } = props;

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [latitude, setLatitude] = useState<number | undefined>(undefined);
  const [longitude, setLongitude] = useState<number | undefined>(undefined);
  const [popup, setPopup] = useState<ReactNode | undefined>(undefined);

  return (
    <Container>
      <Map
        ref={ref}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX}
        initialViewState={{
          zoom: 12,
          latitude: location.latitude,
          longitude: location.longitude,
        }}
        style={{
          width: "100%",
          height: "100%",
          border: "1px solid lightgrey",
          borderRadius: "8px",
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
        <Marker
          latitude={location.latitude}
          longitude={location.longitude}
          color="black"
        />
        {markers &&
          markers.map((locationMapItem, locationMapIndex) => (
            <Marker
              latitude={locationMapItem.latitude}
              longitude={locationMapItem.longitude}
              color="tomato"
              onClick={() => {
                if (popups) {
                  setLatitude(locationMapItem.latitude);
                  setLongitude(locationMapItem.longitude);
                  setPopup(popups[locationMapIndex]);
                  setIsVisible(true);
                }
              }}
              style={{ cursor: "pointer" }}
              key={locationMapIndex}
            />
          ))}
        {isVisible && popups && popup && latitude && longitude && (
          <Popup
            anchor="top"
            latitude={latitude}
            longitude={longitude}
            maxWidth="150px"
            focusAfterOpen={false}
            closeButton={false}
            closeOnClick={false}
          >
            <PopupContainer>
              <FaXmark
                color="black"
                size={16}
                onClick={() => setIsVisible(false)}
                cursor="pointer"
                style={{ justifySelf: "self-end" }}
              />
              {popup}
            </PopupContainer>
          </Popup>
        )}
      </Map>
    </Container>
  );
};

export default React.memo(MapComponent);
