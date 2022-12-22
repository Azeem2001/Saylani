import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import styled from "styled-components";
const CustomCard = ({ image, heading }) => {
  return (
    <Container>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250px"
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Typography variant="h4" component="div" fontWeight="bold">
              {heading}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Dear Pakistani Kids (Both Girls & Boys), Here Comes Another
              Opportunity for all of you in this winter vacations!! <br /> We
              are offering this online course to school-going kids to educate
              them about upcoming worldwide technologies.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
};

export default CustomCard;

const Container = styled.div`
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
