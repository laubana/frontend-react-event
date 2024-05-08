import React from "react";
import { Link } from "react-router-dom";
import { DetailProps } from "./Detail.props";
import { Container } from "./Detail.style";
import Button from "../../../component/Button";
import Card from "../../../component/Card";
import Carousel from "../../../component/Carousel";
import Columns from "../../../component/Columns";
import Flex from "../../../component/Flex";
import Grid from "../../../component/Grid";
import InputImage from "../../../component/InputSingleImage";
import Modal from "../../../component/Modal";
import Pagination from "../../../component/Pagination";
import Select from "../../../component/Select";
import Text from "../../../component/Text";
import TextArea from "../../../component/InputTextArea";

const Detail = (props: DetailProps) => {
  const { group, isMobileDevice, isTabletDevice, isDesktopDevice } = props;

  return (
    <>
      {group ? (
        <Container>
          <Columns columns={isDesktopDevice || isTabletDevice ? "1 3" : "1"}>
            <Grid>e</Grid>
            <Grid>e</Grid>
          </Columns>
        </Container>
      ) : (
        <div style={{ padding: "32px", textAlign: "center" }}>
          <div className="spinner-border text-danger"></div>
        </div>
      )}
    </>
  );
};

export default Detail;
