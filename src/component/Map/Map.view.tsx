import React, { ReactNode, useEffect, useState } from "react";
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
import { Location } from "../../type/Location";

const MapComponent = (props: MapProps): JSX.Element => {
  const { forwardedRef, location, markers, popups } = props;

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [currentLocation, setCurrentLocation] = useState<Location | undefined>(
    undefined
  );
  const [popupLocation, setPopupLocation] = useState<Location | undefined>(
    undefined
  );
  const [popup, setPopup] = useState<ReactNode | undefined>(undefined);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      setCurrentLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, [navigator.geolocation.getCurrentPosition((position) => position)]);

  return (
    <Container>
      {currentLocation && (
        <Map
          ref={forwardedRef}
          mapboxAccessToken={process.env.REACT_APP_MAPBOX}
          initialViewState={{
            zoom: 12,
            latitude: location?.latitude || currentLocation.latitude,
            longitude: location?.longitude || currentLocation.longitude,
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
            latitude={currentLocation.latitude}
            longitude={currentLocation.longitude}
            color="black"
          />
          {markers &&
            markers.map((locationMapItem, locationMapIndex) => (
              <Marker
                latitude={locationMapItem.latitude}
                longitude={locationMapItem.longitude}
                color="crimson"
                onClick={() => {
                  if (popups) {
                    setPopupLocation({
                      latitude: locationMapItem.latitude,
                      longitude: locationMapItem.longitude,
                    });
                    setPopup(popups[locationMapIndex]);
                    setIsVisible(true);
                  }
                }}
                style={{ cursor: "pointer" }}
                key={locationMapIndex}
              />
            ))}
          {isVisible && popups && popup && popupLocation && (
            <Popup
              anchor="top"
              latitude={popupLocation.latitude}
              longitude={popupLocation.longitude}
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
      )}
    </Container>
  );
};

export default React.memo(MapComponent);
