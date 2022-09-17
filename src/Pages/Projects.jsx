import {
  Typography,
  Box,
  Paper,
  Container,
  Card,
  CardContent,
  CardMedia,
  CardActions,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import CardComponent from "../Components/CardComponent";

const Projects = () => {
  const cards = [
    {
      id: 1,
      header: "DAMBO Milktea",
      description:
        "A front end Website for a Milktea business in Pulilan, Bulacan.",
      image: "https://source.unsplash.com/random",
    },
    {
      id: 2,
      header: "VegeMarket",
      description:
        "An e-commerce mobile application dedicated for vegetable retailers",
      image: "https://source.unsplash.com/random",
    },
    {
      id: 3,
      header: "Task tracker",
      description:
        "A simple web application that sets reminder for each tasks.",
      image: "https://source.unsplash.com/random",
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        flexDirection="row"
        paddingTop="6rem"
        paddingBottom="6rem"
      >
        {/* <Paper elevation={3}> */}
        {/* <Card>
          <CardContent>
            <Typography variant="h5">DAMBO Milktea</Typography>
            <Typography variant="body1">
              A front end Website for a Milktea business in Pulilan, Bulacan.
            </Typography>
          </CardContent>
        </Card> */}
        {cards.map((card) => (
          <CardComponent
            key={card.id}
            header={card.header}
            description={card.description}
            imagesrc={card.image}
          />
        ))}
        {/* </Paper> */}
      </Box>
    </Container>
  );
};

export default Projects;
