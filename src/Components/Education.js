import SchoolIcon from '@mui/icons-material/School';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import StarIcon from "@mui/icons-material/Star";

const Education = () => {
  const items = [
    {
      cardTitle: "Rochester Institute of Technology",
      cardSubtitle: "MSc - Game Design and Development",
      coursesHead: "Courses: ",
      cardDetailedText: [
        "Game Design",
        "Gameplay and Prototyping",
        "Applications in Virtual Reality",
        "Game Graphics Programming",
        "Level Design",
        "Game Development Processes",
        "Capstone Design",
      ].map(function (course) {
        return <li>{course}</li>;
      }),
      date: "2023 - Present",
    },
    {
      cardTitle: "Fr. Conceicao Rodrigues College of Engineering",
      cardSubtitle: "BE in Electronics Engineering",
      coursesHead: "Courses: ",
      cardDetailedText: [
        "Data Structures and Algorithms",
        "Big Data Analytics",
        "Database Management System",
        "Cloud Computing",
      ].map(function (course) {
        return <li>{course}</li>;
      }),
      date: "2017 - 2021",
    },
  ];

  return (
    <section id="education" class="about background-alt">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Education</h2>
        </div>

        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center">
            <VerticalTimeline className="custom-line">
              {items.map((data, i) => (
                <VerticalTimelineElement
                  key={i}
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: "rgba(52, 58, 64, 0.3)" }}
                  date={data.date}
                  dateClassName="timeline-date"
                  contentArrowStyle={{
                    borderRight: "7px solid  #a8d49b",
                  }}
                  iconStyle={{
                    background: "#a8d49b",
                    color: "#fff",
                  }}
                  icon={<SchoolIcon />}
                >
                  <h3
                    className="vertical-timeline-element-title"
                    style={{
                      fontSize: "14",
                      color: "rgba(255, 255, 255, 0.7)",
                    }}
                  >
                    {data.cardTitle}
                  </h3>
                  <h4
                    className="vertical-timeline-element-subtitle"
                    style={{
                      fontSize: "1.2em",
                      fontWeight: "350",
                      color: "rgba(255, 255, 255, 1.0)",
                      marginTop: "5px",
                    }}
                  >
                    {data.cardSubtitle}
                  </h4>
                  <h5
                    className="vertical-timeline-element-subtitle"
                    style={{
                      fontSize: "1em",
                      fontWeight: "250",
                      color: "rgba(255, 255, 255, 0.7)",
                      marginTop: "5px",
                    }}
                  >
                    {data.coursesHead}
                  </h5>
                  <p
                    style={{
                      fontSize: "1em",
                      fontWeight: "350",
                      color: "rgba(255, 255, 255, 1)",
                    }}
                  >
                    {data.cardDetailedText}
                  </p>
                </VerticalTimelineElement>
              ))}
              <VerticalTimelineElement
                iconStyle={{
                  background: "#a8d49b",
                  color: "#fff",
                }}
                icon={<StarIcon />}
              />
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
