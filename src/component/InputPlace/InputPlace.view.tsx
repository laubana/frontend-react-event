import React, { ChangeEvent, FocusEvent, useEffect, useState } from "react";
import useGoogle from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import Geocode from "react-geocode";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { BiCurrentLocation } from "react-icons/bi";
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
} from "./InputPlace.style";
import Text from "../Text";

const InputPlaceComponent = ({
  label,
  placeholder,
  address,
  setPlace,
  error,
  sizing = "medium",
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

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(address || "");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setIsVisible(true);
  };

  const handleFocus = () => {
    setInputValue("");
    setIsVisible(true);
  };

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsVisible(false);
    }
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
    <Container onFocus={handleFocus} onBlur={handleBlur}>
      {label && (
        <LabelContainer sizing={sizing}>
          <Text>{label}</Text>
        </LabelContainer>
      )}
      <InputContainer sizing={sizing}>
        <Input
          value={inputValue}
          onChange={handleChange}
          placeholder={placeholder}
          sizing={sizing}
        />
        <Component>
          {isVisible ? (
            <FaChevronUp color="black" />
          ) : (
            <FaChevronDown color="black" />
          )}
        </Component>
      </InputContainer>
      {isVisible &&
        (0 < currentPlacePredictions.length ||
          0 < inputPlacePredictions.length) && (
          <ListContainer>
            {currentPlacePredictions.map((placePrediction, index) => (
              <Item
                sizing={sizing}
                onClick={() => handleSelect(placePrediction)}
                key={index}
              >
                <ComponentContainer>
                  <BiCurrentLocation color="black" />
                </ComponentContainer>
                <AddressContainer>
                  <Text
                    sizing={sizing}
                    style={{ textAlign: "start", wordBreak: "break-all" }}
                  >
                    {placePrediction.description}
                  </Text>
                </AddressContainer>
              </Item>
            ))}
            {inputPlacePredictions.map((placePrediction, index) => (
              <Item
                sizing={sizing}
                onClick={() => handleSelect(placePrediction)}
                key={index}
              >
                <AddressContainer>
                  <Text
                    sizing={sizing}
                    style={{ textAlign: "start", wordBreak: "break-all" }}
                  >
                    {placePrediction.description}
                  </Text>
                </AddressContainer>
              </Item>
            ))}
          </ListContainer>
        )}
      {error && (
        <ErrorContainer sizing={sizing}>
          <Text coloring="red">{error}</Text>
        </ErrorContainer>
      )}
    </Container>
  );
};

export default React.memo(InputPlaceComponent);
