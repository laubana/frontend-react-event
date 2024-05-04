import React, { ChangeEvent, FocusEvent, useState } from "react";
import { InputPlaceProps } from "./InputPlace.props";
import {
  Container,
  LabelContainer,
  InputContainer,
  Input,
  Icon,
  ListContainer,
  Item,
  ErrorContainer,
} from "./InputPlace.style";
import useGoogle from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { BiCurrentLocation } from "react-icons/bi";
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

  const [visibility, setVisibility] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
    if (address && currentPlacePredictions.length === 0) {
      getCurrentPlacePredictions({ input: address });
    }
    getInputPlacePredictions({ input: event.target.value });
  };

  const handleFocus = () => {
    if (address && currentPlacePredictions.length === 0) {
      getCurrentPlacePredictions({ input: address });
    }
    setVisibility(true);
  };

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setVisibility(false);
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
        setInput(detail.formatted_address);
        getInputPlacePredictions({ input: detail.formatted_address });
        setPlace({
          address: detail.formatted_address,
          latitude: detail.geometry.location.lat(),
          longitude: detail.geometry.location.lng(),
          url: detail.url,
        });
        setVisibility(false);
      }
    );
  };

  const handleToggle = () => {
    setVisibility((oldValue) => !oldValue);
  };

  return (
    <Container
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      {label && (
        <LabelContainer sizing={sizing}>
          <Text>{label}</Text>
        </LabelContainer>
      )}
      <InputContainer visibility={visibility} sizing={sizing}>
        <Input value={input} placeholder={placeholder} />
        <Icon onClick={handleToggle}>
          {visibility ? (
            <FaChevronUp color="black" />
          ) : (
            <FaChevronDown color="black" />
          )}
        </Icon>
      </InputContainer>
      {visibility &&
        (0 < currentPlacePredictions.length ||
          0 < inputPlacePredictions.length) && (
          <ListContainer>
            {currentPlacePredictions.map((placePrediction, index) => (
              <Item
                sizing={sizing}
                onClick={() => handleSelect(placePrediction)}
                key={index}
              >
                <BiCurrentLocation color="black" />
                <Text
                  sizing={sizing}
                  style={{ textAlign: "start", wordBreak: "break-all" }}
                >
                  {placePrediction.description}
                </Text>
              </Item>
            ))}
            {inputPlacePredictions.map((placePrediction, index) => (
              <Item
                sizing={sizing}
                onClick={() => handleSelect(placePrediction)}
                style={{ display: "block" }}
                key={index}
              >
                <Text
                  sizing={sizing}
                  style={{ textAlign: "start", wordBreak: "break-all" }}
                >
                  {placePrediction.description}
                </Text>
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
