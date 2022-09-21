import {
  Paper,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const SkillsComponent = ({ image, name }) => {
  return (
    <>
      <Box width="100%">
        <Card
          data-aos="flip-right"
          sx={{
            ":hover": {
              transform: "scale(1.1)",
              WebkitTransition: " 0.5s ease-in-out",
            },
          }}
        >
          <CardContent>
            <CardMedia
              component="img"
              image={image}
              sx={{
                objectFit: "fit",
                maxWidth: "100%",
              }}
            ></CardMedia>
            <Typography variant="h6" align="center" marginTop="1rem">
              {name}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default SkillsComponent;
