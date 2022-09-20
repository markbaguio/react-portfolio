import {
  Typography,
  Box,
  Paper,
  Container,
  IconButton,
  Grid,
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

const Experience = () => {
  return (
    <>
      <Container
        sx={{
          height: "100%",
          marginTop: "5rem",
        }}
      >
        <Paper elevation={1}>
          <Box data-aos="fade-left" width="100%">
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
                  <TimelineDot variant="outlined" color="primary">
                    {/* <IconButton
                    size="small"
                    LinkComponent="a"
                    href="https://github.com/kristiansantos11/DamboMilkTea.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <CodeIcon />
                  </IconButton> */}
                  </TimelineDot>
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
                  <TimelineDot variant="outlined" color="primary">
                    {/* <IconButton
                    size="medium"
                    LinkComponent="a"
                    href="https://github.com/kristiansantos11/DamboMilkTea.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FileDownloadOutlinedIcon />
                  </IconButton> */}
                  </TimelineDot>
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
                  <TimelineDot variant="outlined" color="primary">
                    {/* <IconButton
                    size="medium"
                    LinkComponent="a"
                    href="https://github.com/markbaguio/Vegemarket.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <CodeIcon />
                  </IconButton> */}
                  </TimelineDot>
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
                  <TimelineDot variant="outlined" color="primary">
                    {/* <IconButton
                    size="medium"
                    LinkComponent="a"
                    href="https://github.com/kristiansantos11/DamboMilkTea.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FileDownloadOutlinedIcon />
                  </IconButton> */}
                  </TimelineDot>
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
        <Grid container>
          <Grid item xs={6} sm={6} md={12} lg={12} backgroundColor="red">
            Lorem ipsum dolor sit.
          </Grid>
          <Grid item xs={6} sm={6} md={12} lg={12} backgroundColor="blue ">
            Lorem ipsum dolor sit amet.
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Experience;
