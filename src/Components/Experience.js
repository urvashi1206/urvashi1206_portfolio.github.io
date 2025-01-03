import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";

export default function Experience() {
  const items = [
    {
      date: "August 2023 - Present",
      cardTitle: "Rochester Institute of Technology",
      cardSubtitle: "Research Assistant",
      cardDetailedText: [
        "Configured NVIDIA Omniverse core components (USD, Connectors, Kit SDK), enabling real-time 3D collaboration.",
        "Building digital twins and 3D prototypes using Action Graphs and physics simulations, leveraging RTX.",
        "Enhanced AI-powered gaming environments using Llama and Alpaca LLMs with PDDL, tailored to user-specific playstyles.",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
    },
    {
      date: "May 2024 – July 2024",
      cardTitle: "Magic Spell Studios at RIT",
      cardSubtitle: "Backend Engineer",
      cardDetailedText: [
        "Programmed a VR prototype in C# to integrate data from the SMART FHIR server.",
        "Engineered ETL pipelines to ingest data into SQLite, while ensuring HIPAA compliance.",
        "Conducted performance analysis with Visual Studio Profiler and optimized memory management in C#.",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
    },
    {
      date: "July 2021 – June 2023",
      cardTitle: "Quantiphi Analytics Solutions Pvt. Ltd.",
      cardSubtitle: "Data Engineer",
      cardDetailedText: [
        "Created Python scripts for ETL, migrating 10+ TB of data from SQL Server to Snowflake.",
        "Engineered ETL pipelines with AWS Lambda and AWS Glue, automating data processing and storage in AWS S3.",
        "Built Azure workflows using Azure Functions, Azure Blob Storage, Azure Data Lake, and Azure Data Factory, integrating CI/CD pipelines, and used Tableau for real-time data visualization.",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
    },
    {
      date: "December 2018 – January 2019",
      cardTitle: "Larsen and Toubro Infotech",
      cardSubtitle: "Software Development Intern",
      cardDetailedText: [
        "Developed a responsive Online Assessment System platform with a user-friendly interface using JSP, HTML, CSS, and JavaScript.",
        "Engineered the backend with Servlets, Spring Boot, and MySQL, creating 12+ RESTful endpoints.",

      ].map(function (text) {
        return <li>{text}</li>;
      }),
    },
  ];

  return (
    <section id="experience" class="about background-alt">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Experience</h2>
        </div>
        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center">
            <VerticalTimeline className="custom-line">
              {items.map((data, i) => {
                return (
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
                    icon={<WorkIcon />}
                  >
                    <h3
                      className="vertical-timeline-element-title"
                      style={{
                        fontSize: "14",
                        color: "rgba(255, 255, 255, 1)",
                      }}
                    >
                      {data.cardTitle}
                    </h3>
                    <h4
                      className="vertical-timeline-element-subtitle"
                      style={{
                        fontSize: "1.2em",
                        fontWeight: "350",
                        color: "rgb(255, 255, 255, 0.7)",
                      }}
                    >
                      {data.cardSubtitle}
                    </h4>
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
                );
              })}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
}
