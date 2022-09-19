import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button,
  Tooltip,
  IconButton,
  Box,
  Divider,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import StatusComponent from "./StatusComponent";

/**
 * Material UI Breakpoints:
 * xs: 0px - 599px
 * sm: 600px - 899px
 * md: 900px - 1199px
 * lg: 1200px - 1535px
 * xl: 1536px
 * 
 * Updated breakpoints:
 *  xs: 0px - 399px,
    sm: 400px - 899px,
    md: 900px - 1199px,
    lg: 1200px - 1535px,
    xl: 1536,
 */

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
            <Typography
              marginTop="1rem"
              variant="h5"
              fontSize={{
                lg: "1.5rem",
                md: "1rem",
                sm: "1.2rem",
              }}
            >
              {header}
            </Typography>
            <Divider />
            {isFinished === false ? (
              <StatusComponent />
            ) : (
              <Typography
                sx={{
                  margin: "1.5rem",
                }}
              />
            )}
          </Box>
          <Typography
            variant="caption"
            fontSize={{
              lg: "0.75rem",
              md: "0.65rem",
              sm: "0.72rem",
            }}
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <a href={githubUrl} target="_blank" rel="noreferrer">
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
