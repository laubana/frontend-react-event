import React, { ChangeEvent, useState } from "react";
import useGoogle from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { BiCurrentLocation } from "react-icons/bi";
import { AutoCompleteProps } from "./AutoComplete.props";
import {
  Container,
  Input,
  InputContainer,
  ItemContainer,
  ListContainer,
} from "./AutoComplete.style";
import Text from "../Text";

const AutoCompleteComponent = ({
  _size = "medium",
  address,
  setPlace,
}: AutoCompleteProps): JSX.Element => {
  const { placesService } = useGoogle({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS,
  });

  const {
    placePredictions: currentPlacePredictions,
    getPlacePredictions: getCurrentPlacePredictions,
  } = useGoogle({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS,
  });

  const {
    placePredictions: inputPlacePredictions,
    getPlacePredictions: getInputPlacePredictions,
  } = useGoogle({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS,
  });

  const [visibility, setVisibility] = useState<boolean>(false);
  const [inputAddress, setInputAddress] = useState<string>("");

  const handleOnFocus = () => {
    if (address && currentPlacePredictions.length === 0) {
      getCurrentPlacePredictions({ input: address });
    }
    setVisibility(true);
  };

  const handleOnBlur = () => {
    setVisibility(false);
  };

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputAddress(event.target.value);
    getInputPlacePredictions({ input: inputAddress });
  };

  const handleOnClick = (placePrediction: any) => {
    placesService.getDetails(
      { placeId: placePrediction.place_id, language: "en" },
      (detail: any) => {
        console.log(detail.formatted_address);
        console.log(
          `${detail.geometry.location.lat()}, ${detail.geometry.location.lng()}`
        );
        setInputAddress(detail.formatted_address);
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

  return (
    <Container>
      <InputContainer _size={_size}>
        <Input
          value={inputAddress}
          placeholder="Address"
          onChange={handleOnChange}
          onFocus={handleOnFocus}
        />
        {visibility &&
        (0 < currentPlacePredictions.length ||
          0 < inputPlacePredictions.length) ? (
          <FaChevronUp color="black" cursor="pointer" onClick={handleOnBlur} />
        ) : (
          <FaChevronDown
            color="black"
            cursor="pointer"
            onClick={handleOnFocus}
          />
        )}
      </InputContainer>
      {visibility &&
        (0 < currentPlacePredictions.length ||
          0 < inputPlacePredictions.length) && (
          <ListContainer>
            {currentPlacePredictions.map((placePrediction, index) => (
              <ItemContainer
                _size={_size}
                onClick={() => handleOnClick(placePrediction)}
                key={index}
              >
                <BiCurrentLocation color="black" />
                <Text>{placePrediction.description}</Text>
              </ItemContainer>
            ))}
            {inputPlacePredictions.map((placePrediction, index) => (
              <ItemContainer
                _size={_size}
                onClick={() => handleOnClick(placePrediction)}
                key={index}
              >
                <Text>{placePrediction.description}</Text>
              </ItemContainer>
            ))}
          </ListContainer>
        )}
    </Container>
  );
};

export default React.memo(AutoCompleteComponent);
