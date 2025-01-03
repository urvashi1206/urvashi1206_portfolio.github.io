import img from "./images/urvashi.jpg";
// import Typed from "react-typed";
import { Typewriter } from "react-simple-typewriter";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "@mui/material/Button";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen"
    >
       {/* <div className="section-background"></div> */}
      <Container data-aos="zoom-in" data-aos-delay="500">
        <Row>
          <Col lg={6} className="item-center">
            <h1>Urvashi Dhingra</h1>
            <br />
            <p>
              I'm a&nbsp;
              <span className="typed">
                <Typewriter
                  words={[
                    "Software Developer",
                    "Gameplay Programmer",
                    "Data Engineer",
                    "Producer",
                  ]}
                  loop={true} // Ensures it keeps looping
                  cursor
                  cursorStyle="|"
                  typeSpeed={90} // Speed for typing
                  deleteSpeed={60} // Speed for deleting
                  delaySpeed={500} // Delay before starting the next word
                />
              </span>
            </p>
            <div className="social-links">
              <a href="https://www.youtube.com/@urvashidhingra3963">
                <i className="bx bxl-youtube"></i>
              </a>
              <a href="https://github.com/urvashi1206">
                <i className="bx bxl-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/urvashidhingra12/">
                <i className="bx bxl-linkedin"></i>
              </a>
              <a href="mailto:dhingraurvashi99@gmail.com">
                <i className="bx bx-envelope"></i>
              </a>
            </div>
            <br />
            <div style={{ display: "flex", gap: "15px", marginTop: "10px" }}>
            <Button
              variant="outlined"
              target="_blank"
              href="https://drive.google.com/file/d/1pdTXUh4Zewe_S1dLpmxSZee-yeFywLvd/view?usp=drive_link"
              startIcon={<CloudDownloadIcon />}
              sx={{
                color: "rgb(179, 195, 209)", // Default text color
                borderColor: "rgb(144, 157, 168)", // Default border color
                "&:hover": {
                  color: "#a8d49b", // Hover text color
                  borderColor: "#a8d49b", // Hover border color
                },
              }}
            >
              Software Resume
            </Button>

            <Button
              variant="outlined"
              target="_blank"
              href="https://drive.google.com/file/d/1pdTXUh4Zewe_S1dLpmxSZee-yeFywLvd/view?usp=drive_link"
              startIcon={<CloudDownloadIcon />}
              sx={{
                color: "rgb(179, 195, 209)", // Default text color
                borderColor: "rgb(144, 157, 168)", // Default border color
                "&:hover": {
                  color: "#a8d49b", // Hover text color
                  borderColor: "#a8d49b", // Hover border color
                },
              }}
            >
              Game Resume
            </Button>
            </div>
          </Col>
          <Col
            lg={6}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "15px",
            }}
          >
            <img
              src={img}
              height="100%"
              width="65%"
              style={{
                borderRadius: "30px",
              }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
