import {
  Box,
  Container,
  ListItem,
  List,
  Typography,
  Button,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import CheckIcon from "src/assets/images/packageDatial/check.svg";
import CrossIcon from "src/assets/images/packageDatial/CrossIcon.svg";
import Accordions from "./accordion";
import AdditionalInfo from "./additionalInfo";
import CancellationPolicy from "./Cancellation";

const IncludeList = [
  "Flights Spain - Cairo / Aswan - Spain.",
  "Domestic flight Aswan - Cairo.",
  "3 nights in Cairo and 4 nights in cruise.",
  "7 Breakfasts, 4 Lunches, 4 Dinners.",
  "Visits and entrance fees according to itinerary.",
];
const NotIncludedList = [
  "Flights Spain - Cairo / Aswan - Spain.",
  "Domestic flight Aswan - Cairo.",
  "3 nights in Cairo and 4 nights in cruise.",
];
const OverView = () => {
  return (
    <Box className="OverView">
      <Container className="OverView__Container">
        <Box className="OverView__Container__LeftSide">
          <Box className="OverView__Container__LeftSide__TextParagraph">
            <Typography className="title">Overview</Typography>
            <Typography className="text">
              List Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation. Ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud.
            </Typography>
          </Box>
          <Box className="OverView__Container__LeftSide__IncludeSection">
            <Typography className="title">What’s included?</Typography>
            <Box
              flexDirection={"row"}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Box className="Included">
                <List className="Included__list">
                  {IncludeList.map((data, index: number) => (
                    <ListItem className="listItem" key={index}>
                      <Image src={CheckIcon} alt="CheckIcon" />
                      <Typography className="text">{data}</Typography>
                    </ListItem>
                  ))}
                </List>
              </Box>
              <Box className="NotIncluded">
                <List className="Included__list">
                  {NotIncludedList.map((data, index: number) => (
                    <ListItem className="listItem" key={index}>
                      <Image src={CrossIcon} alt="CrossIcon" />
                      <Typography className="text">{data}</Typography>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>
          </Box>
          <Button className="seeMoreBtn">See More</Button>

          <Box className="Schedule">
            <Accordions />
          </Box>
          <AdditionalInfo />
          <CancellationPolicy />
        </Box>
      </Container>
    </Box>
  );
};

export default OverView;
