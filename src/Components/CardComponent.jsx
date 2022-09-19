import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Grid,
  Button,
  Tooltip,
  IconButton,
  Box,
  Divider,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import StatusComponent from "./StatusComponent";

const CardComponent = ({
  header,
  description,
  imagesrc,
  tooltipText,
  githubUrl,
  isFinished,
}) => {
  return (
    <>
      <Card
        sx={{
          margin: "1rem",
          width: "fit-content",
          maxWidth: "345px",
        }}
      >
        <CardContent>
          <CardMedia
            component="img"
            height="100%"
            image={imagesrc}
            sx={{
              objectFit: "contain",
              maxWidth: "100%",
            }}
          />
          <Box>
            <Typography marginTop="1rem" variant="h5">
              {header}
            </Typography>
            <Divider />
            {isFinished == false ? (
              <StatusComponent />
            ) : (
              <Typography
                sx={{
                  margin: "1.5rem",
                }}
              />
            )}
          </Box>
          <Typography variant="caption">{description}</Typography>
        </CardContent>
        <CardActions>
          <a href={githubUrl} target="_blank">
            <Button
              variant="outlined"
              color="inherit"
              sx={{
                ":hover": {
                  backgroundColor: "#364966",
                  color: "#111",
                  transition: "0.5s all ease-in-out",
                },
              }}
            >
              Github
            </Button>
          </a>
          <Tooltip title={tooltipText}>
            <IconButton>
              <CodeIcon />
            </IconButton>
          </Tooltip>
          {/* {isFinished == false && <StatusComponent />} */}
        </CardActions>
      </Card>
    </>
  );
};

export default CardComponent;
