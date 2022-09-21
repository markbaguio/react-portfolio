import {
  Typography,
  Box,
  Paper,
  Container,
  IconButton,
  Grid,
  BottomNavigation,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import CodeIcon from "@mui/icons-material/Code";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import SkillsComponent from "../Components/SkillsComponent";
import pythonLogo from "../assets/images/python.png";
import javascriptLogo from "../assets/images/js.png";
import reactLogo from "../assets/images/physics.png";
import mongoDBLogo from "../assets/images/mongo.png";
import htmlLogo from "../assets/images/html.png";
import javaLogo from "../assets/images/java.png";
import figmaLogo from "../assets/images/figma.png";
import phpLogo from "../assets/images/php.png";
import officeLogo from "../assets/images/office.png";
import photostopLogo from "../assets/images/photoshop.png";
import flutterLogo from "../assets/images/flutter.png";
import expressLogo from "../assets/images/express.png";
import bootstrapLogo from "../assets/images/bootstrap.png";
import cssLogo from "../assets/images/css-3.png";

const Experience = () => {
  const skillCards = [
    {
      image: pythonLogo,
      name: "Python",
    },
    {
      image: javascriptLogo,
      name: "Javascript",
    },
    {
      image: expressLogo,
      name: "ExpressJS",
    },
    {
      image: reactLogo,
      name: "React",
    },
    {
      image: mongoDBLogo,
      name: "MongoDB",
    },
    {
      image: htmlLogo,
      name: "HTML",
    },
    {
      image: cssLogo,
      name: "CSS",
    },
    {
      image: bootstrapLogo,
      name: "Bootstrap",
    },
    {
      image: javaLogo,
      name: "Java",
    },
    {
      image: phpLogo,
      name: "PHP",
    },
    {
      image: flutterLogo,
      name: "Flutter",
    },
    {
      image: officeLogo,
      name: "MS Office Suite",
    },
    {
      image: figmaLogo,
      name: "Figma",
    },
    {
      image: photostopLogo,
      name: "Photoshop",
    },
  ];
  return (
    <>
      <Container maxWidth="lg">
        <Box data-aos="slide-up">
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            fontSize={{
              lg: "3.75rem",
              md: "2.5rem",
              sm: "2rem",
              xs: "2rem",
            }}
          >
            Skills
          </Typography>
        </Box>
        <Grid
          container
          // marginBottom="10rem"
          spacing={4}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {skillCards.map((skill, i) => (
            <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
              <SkillsComponent image={skill.image} name={skill.name} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container
        sx={{
          marginTop: "5rem",
        }}
      >
        <Paper
          elevation={1}
          sx={{
            paddingTop: "3rem",
            paddingBottom: "3rem",
          }}
        >
          <Box data-aos="slide-up">
            <Typography
              variant="h2"
              align="center"
              fontSize={{
                lg: "3.75rem",
                md: "2.5rem",
                sm: "2rem",
                xs: "2rem",
              }}
            >
              Experience
            </Typography>
          </Box>
          <Box data-aos="fade-up" width="100%">
            <Timeline position="alternate">
              <TimelineItem>
                <TimelineOppositeContent
                  variant="h4"
                  align="right"
                  fontSize={{
                    lg: "2.125rem",
                    md: "2.125rem",
                    sm: "1.3rem",
                    xs: "1rem",
                  }}
                  sx={{ my: "5rem" }}
                >
                  2021
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot variant="outlined" color="primary"></TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ my: "4.5rem" }}>
                  <Box data-aos="fade-up">
                    <Typography
                      variant="h5"
                      fontSize={{
                        lg: "1.5rem",
                        md: "1rem",
                        sm: "0.8rem",
                        xs: "0.7rem",
                      }}
                    >
                      Website Development - DAMBO
                    </Typography>
                    <Typography
                      variant="body1"
                      fontSize={{
                        md: "0.8rem",
                        sm: "0.6rem",
                        xs: "0.5rem",
                      }}
                    >
                      Created a front end website for a small business.
                    </Typography>
                  </Box>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent
                  variant="h4"
                  align="right"
                  fontSize={{
                    lg: "2.125rem",
                    md: "2.125rem",
                    sm: "1.3rem",
                    xs: "1rem",
                  }}
                  sx={{ my: "6rem" }}
                >
                  October 2021
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot variant="outlined" color="primary"></TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ my: "5.3rem" }}>
                  <Box data-aos="fade-up">
                    <Typography
                      variant="h5"
                      fontSize={{
                        lg: "1.5rem",
                        md: "1rem",
                        sm: "0.8rem",
                        xs: "0.5rem",
                      }}
                    >
                      Artificial Intelligence(Online Course)
                    </Typography>
                    <Typography
                      variant="body1"
                      fontSize={{
                        md: "0.8rem",
                        sm: "0.6rem",
                        xs: "0.4rem",
                      }}
                    >
                      Completed and Passed Huawei’s HCIA AI V3.0 Course.
                      (Certificate of Completion)
                    </Typography>
                  </Box>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent
                  variant="h4"
                  align="right"
                  fontSize={{
                    lg: "2.125rem",
                    md: "2.125rem",
                    sm: "1.3rem",
                    xs: "1rem",
                  }}
                  sx={{ my: "6.5rem" }}
                >
                  2021
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot variant="outlined" color="primary"></TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ my: "6rem" }}>
                  <Box data-aos="fade-up">
                    <Typography
                      variant="h5"
                      fontSize={{
                        lg: "1.5rem",
                        md: "1rem",
                        sm: "0.8rem",
                        xs: "0.7rem",
                      }}
                    >
                      Mobile Application Development
                    </Typography>
                    <Typography
                      variant="body1"
                      fontSize={{
                        md: "0.8rem",
                        sm: "0.6rem",
                        xs: "0.5rem",
                      }}
                    >
                      Created an e-commerce application dedicated for vegetable
                      retailers.
                    </Typography>
                  </Box>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent
                  variant="h4"
                  align="right"
                  fontSize={{
                    lg: "2.125rem",
                    md: "2.125rem",
                    sm: "1.3rem",
                    xs: "1rem",
                  }}
                  sx={{ my: "6.5rem" }}
                >
                  May 2022
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot variant="outlined" color="primary"></TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ my: "4.8rem" }}>
                  <Box data-aos="fade-up">
                    <Typography
                      variant="h5"
                      fontSize={{
                        lg: "1.5rem",
                        md: "1rem",
                        sm: "0.8rem",
                        xs: "0.7rem",
                      }}
                    >
                      Cloud Computing
                    </Typography>
                    <Typography
                      variant="body1"
                      fontSize={{
                        md: "0.8rem",
                        sm: "0.6rem",
                        xs: "0.5rem",
                      }}
                    >
                      Certified Huawei HCIA V4.0 Cloud Computing Associate.
                    </Typography>
                    <Typography
                      variant="caption"
                      fontSize={{
                        lg: "0.75rem",
                        md: "0.7rem",
                        sm: "0.6rem",
                        xs: "0.4rem",
                      }}
                    >
                      Certificate No. 010100802808835171667989
                    </Typography>
                  </Box>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default Experience;
