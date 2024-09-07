import React, { ChangeEvent, FocusEvent, useEffect, useState } from "react";
import Geocode from "react-geocode";
import useGoogle from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import { BiCurrentLocation } from "react-icons/bi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

import { InputPlaceProps } from "./InputPlace.props";
import {
  Container,
  LabelContainer,
  InputContainer,
  Input,
  Component,
  ListContainer,
  Item,
  ErrorContainer,
  ComponentContainer,
  AddressContainer,
  Wrapper,
} from "./InputPlace.style";

import Text from "../Text";

const InputPlaceComponent = ({
  address,
  error,
  label,
  placeholder,
  setPlace,
  size = "medium",
}: InputPlaceProps): JSX.Element => {
  const { placesService } = useGoogle({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS,
  });

  const {
    getPlacePredictions: getCurrentPlacePredictions,
    placePredictions: currentPlacePredictions,
  } = useGoogle({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS,
  });

  const {
    getPlacePredictions: getInputPlacePredictions,
    placePredictions: inputPlacePredictions,
  } = useGoogle({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS,
  });

  const [inputValue, setInputValue] = useState<string>(address || "");
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsVisible(false);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setIsVisible(true);
  };

  const handleFocus = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setInputValue("");
    }
    setIsVisible(true);
  };

  const handleSelect = (placePrediction: any) => {
    placesService?.getDetails(
      { placeId: placePrediction.place_id, language: "en" },
      (detail: any) => {
        console.log(detail.formatted_address);
        console.log(
          `${detail.geometry.location.lat()}, ${detail.geometry.location.lng()}`
        );
        setInputValue(detail.formatted_address);
        setPlace({
          address: detail.formatted_address,
          latitude: detail.geometry.location.lat(),
          longitude: detail.geometry.location.lng(),
          url: detail.url,
        });
      }
    );
    setIsVisible(false);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      if (process.env.REACT_APP_GOOGLE_MAPS) {
        Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS);
        Geocode.setLanguage("en");
        const addressResponse = await Geocode.fromLatLng(
          position.coords.latitude.toString(),
          position.coords.longitude.toString()
        );
        getCurrentPlacePredictions({
          input: addressResponse.results[0].formatted_address,
        });
      }
    });
  }, [navigator.geolocation.getCurrentPosition((position) => position)]);

  useEffect(() => {
    getInputPlacePredictions({ input: inputValue });
  }, [inputValue]);

  return (
    <Container>
      {label && (
        <LabelContainer sizing={size}>
          <Text>{label}</Text>
        </LabelContainer>
      )}
      <Wrapper onFocus={handleFocus} onBlur={handleBlur}>
        <InputContainer sizing={size}>
          <Input
            tabIndex={0}
            value={inputValue}
            onChange={handleChange}
            placeholder={placeholder}
            sizing={size}
          />
          <Component tabIndex={1}>
            {isVisible ? (
              <FaChevronUp color="black" cursor="pointer" />
            ) : (
              <FaChevronDown color="lightgrey" cursor="pointer" />
            )}
          </Component>
        </InputContainer>
        {isVisible &&
          (0 < currentPlacePredictions.length ||
            0 < inputPlacePredictions.length) && (
            <ListContainer>
              {currentPlacePredictions.map((placePrediction, index) => (
                <Item
                  tabIndex={2}
                  onClick={() => handleSelect(placePrediction)}
                  sizing={size}
                  key={index}
                >
                  <ComponentContainer>
                    <BiCurrentLocation color="black" />
                  </ComponentContainer>
                  <AddressContainer>
                    <Text
                      size={size}
                      style={{ textAlign: "start", wordBreak: "break-all" }}
                    >
                      {placePrediction.description}
                    </Text>
                  </AddressContainer>
                </Item>
              ))}
              {inputPlacePredictions.map((placePrediction, index) => (
                <Item
                  tabIndex={2}
                  onClick={() => handleSelect(placePrediction)}
                  sizing={size}
                  key={index}
                >
                  <AddressContainer>
                    <Text
                      size={size}
                      style={{ textAlign: "start", wordBreak: "break-all" }}
                    >
                      {placePrediction.description}
                    </Text>
                  </AddressContainer>
                </Item>
              ))}
            </ListContainer>
          )}
      </Wrapper>
      {error && (
        <ErrorContainer sizing={size}>
          <Text color="red">{error}</Text>
        </ErrorContainer>
      )}
    </Container>
  );
};

export default React.memo(InputPlaceComponent);
