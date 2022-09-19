import {
  Typography,
  Box,
  Paper,
  Container,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Grid,
} from "@mui/material";
import CardComponent from "../Components/CardComponent";
import dambologo from "../assets/images/dambomilktealogo.jpg";
import tasktrackerlogo from "../assets/images/Tasktrackerlogo.png";
import vegemarketlogo from "../assets/images/vegemarketlogo.png";
import goalslogo from "../assets/images/Goalslogo.png";

const Projects = () => {
  const cards = [
    {
      id: 1,
      header: "DAMBO Milktea",
      description:
        "A front end Website for a Milktea business in Pulilan, Bulacan.",
      image: dambologo,
      tooltipText: "HTML, CSS, Bootstrap, Javascript",
      githubUrl: "https://github.com/kristiansantos11/DamboMilkTea.git",
      isFinished: true,
    },
    {
      id: 2,
      header: "VegeMarket",
      description:
        "An e-commerce mobile application dedicated for vegetable retailers",
      image: vegemarketlogo,
      tooltipText: "Dart, Flutter, MaterialUI, Firebase, Firestore",
      githubUrl: "https://github.com/markbaguio/Vegemarket.git",
      isFinished: true,
    },
    {
      id: 3,
      header: "Task tracker",
      description:
        "A simple web application that sets reminder for each tasks.",
      image: tasktrackerlogo,
      tooltipText: "React, JSON Web Server, CSS",
      githubUrl: "https://github.com/markbaguio/task-tracker.git",
      isFinished: true,
    },
    {
      id: 4,
      header: "Goals App",
      description:
        "A full-stack app that enables its user to save and keep track of their goals.",
      image: goalslogo,
      tooltipText: "Node JS, Express, MongoDB, Mongoose, React, Material UI",
      githubUrl: "https://github.com/markbaguio/mern-tutorial.git",
      isFinished: false,
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box
        width="100%"
        display="flex"
        height="100%"
        justifyContent="center"
        alignItems="center"
        flexDirection="row"
        paddingTop="6rem"
        paddingBottom="6rem"
      >
        {/* <Card>
          <CardContent>
            <Typography variant="h5">DAMBO Milktea</Typography>
            <Typography variant="body1">
              A front end Website for a Milktea business in Pulilan, Bulacan.
            </Typography>
          </CardContent>
        </Card> */}
        {/* <Grid container>
          <Grid item xs={12} sm={12} md={12}> */}
        <Grid container>
          {cards.map((card) => (
            <Grid item xs={12} sm={6} md={3}>
              <CardComponent
                key={card.id}
                header={card.header}
                description={card.description}
                imagesrc={card.image}
                tooltipText={card.tooltipText}
                githubUrl={card.githubUrl}
                isFinished={card.isFinished}
              />
            </Grid>
          ))}
        </Grid>
        {/* </Grid>
        </Grid> */}
      </Box>
    </Container>
  );
};

export default Projects;
