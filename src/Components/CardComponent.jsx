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
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import { defaultTheme } from "../DefaultTheme";
import { Box } from "@mui/system";

const CardComponent = ({
  header,
  description,
  imagesrc,
  tooltipText,
  githubUrl,
}) => {
  return (
    <>
      <Card
        sx={{
          margin: "1rem",
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
          <Typography marginTop="1rem" gutterBottom variant="h5">
            {header}
          </Typography>
          <Typography variant="body1">{description}</Typography>
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
        </CardActions>
      </Card>
    </>
  );
};

export default CardComponent;
