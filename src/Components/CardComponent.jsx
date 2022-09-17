import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";

const CardComponent = ({ header, description, imagesrc }) => {
  return (
    <>
      <Grid container backgroundColor="aqua">
        <Grid item xs={12} sm={12} md={12}>
          <Card
            sx={{
              margin: "1rem",
            }}
          >
            <CardContent>
              <CardMedia
                component="img"
                height="250px"
                width="fit-content"
                image={imagesrc}
              />
              <Typography gutterBottom variant="h5">
                {header}
              </Typography>
              <Typography variant="body1">{description}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default CardComponent;
