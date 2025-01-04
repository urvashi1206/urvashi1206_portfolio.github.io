// import Chip from "@mui/material/Chip";
// import Fab from "@mui/material/Fab";
// import Button from "@mui/material/Button";
// import AddIcon from "@mui/icons-material/Add";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";
// import { useState } from "react";
// import CodeIcon from "@mui/icons-material/Code";
// import IconButton from "@mui/material/IconButton";
// import RemoveIcon from "@mui/icons-material/Remove";

// const Projects = () => {
//   const items = [
//     {
//       cardTitle: "AttireAvenue - Full-stack E-Commerce platform",
//       cardDetailedText: [
//         "Built a full-stack e-commerce platform with React.js and Spring Boot, following MVC architecture to showcase 1,000+ products.",
//         "Deployed a containerized app on AWS EC2 with Docker, using Auto Scaling and Load Balancer for scalability and performance.",
//         "Configured a Jenkins pipeline for (CI/CD) to automate updates and reduce downtime.",
//       ].map(function (text) {
//         return <li>{text}</li>;
//       }),
//       technologies: ["React.js", "SpringBoot", "SQL", "Docker", "Jenkins", "AWS"],
//       links: [
//         {
//           url: "https://github.com/urvashi1206/AttireAvenue",
//           text: "View Source Code",
//         },
//       ],
//     },
//     {
//       cardTitle: "Flickbase - Web Application built using MERN Stack",
//       cardDetailedText: [
//         "Developed a full-stack web application with React.js, Material UI, Node.js, and Express.js for post-loading and efficient article management, improving page load times by 20%.",
//         "Integrated MongoDB to handle CRUD operations through Express.js models.",
//         "Deployed the application on AWS EC2 with Docker, utilizing Auto Scaling and Elastic Load Balancer to ensure scalability and high availability.",
//       ].map(function (text) {
//         return <li>{text}</li>;
//       }),
//       technologies: ["React.js", "Node.Js", "MongoDB", "Express"],
//       links: [
//         {
//         url: "https://github.com/urvashi1206/Flickbase",
//         text: "View Source Code",
//         },
//       ],
//     },
//     {
//       cardTitle: "Duolatera - A VR Multiplayer Puzzle Game",
//       cardDetailedText: [
//         "Developed a scalable dialogue system in C++ for the VR onboarding level. Created various VR interactables, such as buttons, and ring sensors. Designed player character skeletal mesh with IK for hand and head movement replication.",
//         "Implemented multiplayer networking using RPCs, emphasizing server reliability with RepNotify.",
//         "Produced custom shaders using HLSL in Unreal Engine. Managed team workflow as a Producer using Trello for task assignments.",
//       ].map(function (text) {
//         return <li>{text}</li>;
//       }),
//       technologies: ["Unreal Engine", "C++", "Perforce", "HLSL", "RPC", "Trello", "Agile"],
//       links: [
//         {
//           url: "https://github.com/Drifters-MSGDD/Duolatera",
//           text: "View Source Code",
//         },
//         {
//           url: "https://www.youtube.com/watch?v=3c0c1eBbZlo&ab_channel=Abis",
//           text: "View Demo",
//         },
//       ],
//     },
//     {
//       cardTitle: "Tower Defense Game",
//       cardDetailedText: [
//         "Developed a Tower Defense game in Unity using C#, and implemented functionality for different resource buildings managing health reduction when damaged by enemies.",
//         "Implemented a resource management system for players to collect and use resources. Reflected changes dynamically during repairs, upgrades, or deletions of structures. Also, ensured that the in-game economy was updated accurately based on player actions.",
//         "Created particle systems to enhance the visual effects during gameplay.",
//       ].map(function (text) {
//         return <li>{text}</li>;
//       }),
//       technologies: ["Unreal Engine", "C++", "VFX", "GitHub"],
//       links: [
//         {
//           url: "https://github.com/urvashi1206/Tower_DefenseGame",
//           text: "View Source Code",
//         },
//         {
//           url: "https://www.youtube.com/watch?v=IiR_-ladU0k&t=33s&ab_channel=UrvashiDhingra",
//           text: "View Demo",
//         },
//       ],
//     },
//     {
//       cardTitle: "Warped - A 3D isometric Puzzle Game",
//       cardDetailedText: [
//         "Designed and implemented the core rotation mechanic to enhance player navigation and interaction in a top-down isometric 3D puzzle game.",
//         "Implemented dynamic cutscene animations using Unity's Spline Tool to enhance narrative and gameplay integration.",
//         "Led the game development lifecycle, managing team coordination, task delegation, and milestone delivery to ensure project success.",
//         "Contributed to level design, VFX integration, and the overall conceptualization of challenging puzzles to deliver an engaging player experience.",
//       ].map(function (text) {
//         return <li>{text}</li>;
//       }),
//       technologies: ["Unity", "C#", "GitHub", "Agile", "VFX"],
//       links: [
//         {
//           url: "https://github.com/urvashi1206/Warped_Isometric_Game",
//           text: "View Source Code",
//         },
//         {
//           url: "https://www.youtube.com/watch?v=O_NReiN2AGU&t=5s&ab_channel=UrvashiDhingra",
//           text: "View Demo",
//         },
//       ],
//     },
//     {
//       cardTitle: "Obra Dinn Shader ",
//       cardDetailedText: [
//         "Constructed a custom Unity shader, replicating the Return of the Obra Dinn, using Vertex and Fragment shaders.",
//         "Created a custom shader with grayscale dithering and real-time shading, applying lighting calculations to enhance low-poly models and achieve a dynamic, retro aesthetic.",
//     ].map(function (text) {
//       return <li>{text}</li>;
//     }),
//     technologies: ["Unity Shader", "Vertex Shader", "Fragment Shader", "C#"],
//     links: [
//         {
//           url: "https://github.com/urvashi1206/ObraDinn_Shader",
//           text: "View Source Code",
//         },
//         {
//           url: "https://www.youtube.com/watch?v=xL1Xgv6Zuqo&ab_channel=UrvashiDhingra",
//           text: "View Demo",
//         },
//       ],
//     },
//   ];

//   const [limit, setLimit] = useState(4);
//   const [loadButton, setLoadButton] = useState(true);
//   const [lessButton, setLessButton] = useState(false);

//   const loadMore = () => {
//     setLimit(6);
//     setLoadButton(false);
//     setLessButton(true);
//   };

//   const loadLess = () => {
//     setLimit(4);
//     setLoadButton(true);
//     setLessButton(false);
//   };

//   // const addButton = () => (
//   //   <Fab style={{ backgroundColor: "blue", color: "white" }} aria-label="add">
//   //     <AddIcon />
//   //   </Fab>
//   // );
  

//   return (
//     <section id="projects" class="about background-alt">
//       <div class="container" data-aos="fade-up">
//         <div class="section-title">
//           <h2>Projects</h2>
//         </div>
//         <div class="row">
//           <div class="col-lg-12 d-flex justify-content-center">
//             <VerticalTimeline className="custom-line">
//               {items.slice(0, limit).map((data, i) => (
//                 <VerticalTimelineElement
//                   key={i}
//                   className="vertical-timeline-element--work"
//                   contentStyle={{ background: "rgba(52, 58, 64, 0.3)" }}
//                   dateClassName="timeline-date"
//                   contentArrowStyle={{
//                     borderRight: "7px solid  #a8d49b",
//                   }}
//                   icon={<CodeIcon />}
//                   iconStyle={{
//                     background: "#a8d49b",
//                     color: "#fff",
//                   }}
//                 >
//                   <div className="projects-technologies">
//                     {data.technologies.map((name, i) => (
//                       <Chip
//                         key={i}
//                         label={name}
//                         sx={{
//                           backgroundColor: "rgb(18, 54, 54)",
//                           color: "rgb(255, 255, 255)",
//                           fontWeight: "bold",
//                         }}
//                       ></Chip>
//                     ))}
//                   </div>
//                   <h3
//                     className="vertical-timeline-element-title"
//                     style={{
//                       fontSize: "12",
//                       color: "rgba(255, 255, 255, 0.8)",
//                     }}
//                   >
//                     {data.cardTitle}
//                   </h3>
//                   <p
//                     style={{
//                       fontSize: "1em",
//                       fontWeight: "350",
//                       color: "rgba(255, 255, 255, 1)",
//                     }}
//                   >
//                     {data.cardDetailedText}
//                   </p>
//                   <div className="project-links">
//                     {data.links.map((link, j) => (
//                       <div>
//                         <br></br>
//                         <Button
//                           key={j} // eslint-disable-line react/no-array-index-key
//                           variant="contained"
//                           color="default"
//                           sx={{
//                             backgroundColor: "rgb(18, 54, 54)",
//                             "&:hover": {
//                             color: "#a8d49b", // Hover text color
//                           },
//                         }}
//                           target="_blank"
//                           href={link.url}
//                         >
//                           {link.text}
//                         </Button>
//                       </div>
//                     ))}
//                   </div>
//                 </VerticalTimelineElement>
//               ))}
//               {loadButton && (
//                 <VerticalTimelineElement
//                   iconOnClick={loadMore}
//                   iconClassName="d-flex justify-content-center"
//                   icon={
//                     <IconButton aria-label="add">
//                       <AddIcon
//                         style={{
//                           color: "#fff",
//                           marginTop: "0.1px",
//                           marginBottom: "40px"
//                         }}
//                       />
//                     </IconButton>
//                   }
//                   iconStyle={{
//                     background: "rgb(18, 54, 54)",
//                     color: "#fff",
//                     // position: "absolute",
//                     // top: "50%", // Center the button vertically
//                     // transform: "translateY(-50%)", // Adjust centering
//                   }}
//                 />
//               )}
//               {lessButton && (
//                 <VerticalTimelineElement
//                   iconOnClick={loadLess}
//                   iconClassName="d-flex justify-content-center"
//                   icon={
//                     <IconButton aria-label="add">
//                       <RemoveIcon
//                         style={{
//                           color: "#fff",
//                           marginTop: "0.1px",
//                           marginBottom: "40px"
//                         }}
//                       />
//                     </IconButton>
//                   }
//                   iconStyle={{
//                     background: "rgb(18, 54, 54)",
//                     color: "#fff",
//                   }}
//                 />
//               )}
//             </VerticalTimeline>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
import Chip from "@mui/material/Chip";
import Fab from "@mui/material/Fab";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useState } from "react";
import CodeIcon from "@mui/icons-material/Code";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";

const Projects = () => {
  const items = [
    {
      cardTitle: "Duolatera - A VR Multiplayer Puzzle Game",
      cardDetailedText: [
        "Developed a scalable dialogue system in C++ for the VR onboarding level. Created various VR interactables, such as buttons, and ring sensors. Designed player character skeletal mesh with IK for hand and head movement replication.",
        "Implemented multiplayer networking using RPCs, emphasizing server reliability with RepNotify.",
        "Produced custom shaders using HLSL in Unreal Engine. Managed team workflow as a Producer using Trello for task assignments.",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
      technologies: ["Unreal Engine", "C++", "Perforce", "HLSL", "RPC", "Trello", "Agile"],
      videoUrl: "https://www.youtube.com/embed/3c0c1eBbZlo",
      links: [
        {
          url: "https://github.com/Drifters-MSGDD/Duolatera",
          text: "View Source Code",
        },
      ],
    },
    {
      cardTitle: "Tower Defense Game",
      cardDetailedText: [
        "Developed a Tower Defense game in Unity using C#, and implemented functionality for different resource buildings managing health reduction when damaged by enemies.",
        "Implemented a resource management system for players to collect and use resources.",
        "Created particle systems to enhance the visual effects during gameplay.",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
      technologies: ["Unreal Engine", "C++", "VFX", "GitHub"],
      videoUrl: "https://www.youtube.com/embed/IiR_-ladU0k",
      links: [
        {
          url: "https://github.com/urvashi1206/Tower_DefenseGame",
          text: "View Source Code",
        },
      ],
    },
    {
      cardTitle: "Warped - A 3D isometric Puzzle Game",
      cardDetailedText: [
        "Designed and implemented the core rotation mechanic to enhance player navigation and interaction in a top-down isometric 3D puzzle game.",
        "Implemented dynamic cutscene animations using Unity's Spline Tool to enhance narrative and gameplay integration.",
        "Led the game development lifecycle, managing team coordination, task delegation, and milestone delivery to ensure project success.",
        "Contributed to level design, VFX integration, and the overall conceptualization of challenging puzzles to deliver an engaging player experience.",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
      technologies: ["Unity", "C#", "GitHub", "Agile", "VFX"],
      videoUrl: "https://www.youtube.com/embed/O_NReiN2AGU",
      links: [
        {
          url: "https://github.com/urvashi1206/Warped_Isometric_Game",
          text: "View Source Code",
        },
      ],
    },
    {
      cardTitle: "Obra Dinn Shader ",
      cardDetailedText: [
        "Constructed a custom Unity shader, replicating the Return of the Obra Dinn, using Vertex and Fragment shaders.",
        "Created a custom shader with grayscale dithering and real-time shading, applying lighting calculations to enhance low-poly models and achieve a dynamic, retro aesthetic.",
    ].map(function (text) {
      return <li>{text}</li>;
    }),
    technologies: ["Unity Shader", "Vertex Shader", "Fragment Shader", "C#"],
    videoUrl: "https://www.youtube.com/embed/xL1Xgv6Zuqo",
    links: [
        {
          url: "https://github.com/urvashi1206/ObraDinn_Shader",
          text: "View Source Code",
        },
      ],
    },
    {
      cardTitle: "AttireAvenue - Full-stack E-Commerce platform",
      cardDetailedText: [
        "Built a full-stack e-commerce platform with React.js and Spring Boot, following MVC architecture to showcase 1,000+ products.",
        "Deployed a containerized app on AWS EC2 with Docker, using Auto Scaling and Load Balancer for scalability and performance.",
        "Configured a Jenkins pipeline for (CI/CD) to automate updates and reduce downtime.",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
      technologies: ["React.js", "SpringBoot", "SQL", "Docker", "Jenkins", "AWS"],
      links: [
        {
          url: "https://github.com/urvashi1206/AttireAvenue",
          text: "View Source Code",
        },
      ],
    },
    {
      cardTitle: "Flickbase - Web Application built using MERN Stack",
      cardDetailedText: [
        "Developed a full-stack web application with React.js, Material UI, Node.js, and Express.js for post-loading and efficient article management, improving page load times by 20%.",
        "Integrated MongoDB to handle CRUD operations through Express.js models.",
        "Deployed the application on AWS EC2 with Docker, utilizing Auto Scaling and Elastic Load Balancer to ensure scalability and high availability.",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
      technologies: ["React.js", "Node.Js", "MongoDB", "Express"],
      links: [
        {
        url: "https://github.com/urvashi1206/Flickbase",
        text: "View Source Code",
        },
      ],
    },
  ];

  const [limit, setLimit] = useState(4);
  const [loadButton, setLoadButton] = useState(true);
  const [lessButton, setLessButton] = useState(false);

  const loadMore = () => {
    setLimit(6);
    setLoadButton(false);
    setLessButton(true);
  };

  const loadLess = () => {
    setLimit(4);
    setLoadButton(true);
    setLessButton(false);
  };

  return (
    <section id="projects" className="about background-alt">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Projects</h2>
        </div>
        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center">
            <VerticalTimeline className="custom-line">
              {items.slice(0, limit).map((data, i) => (
                <VerticalTimelineElement
                  key={i}
                  className="vertical-timeline-element--work"
                  position={i % 2 === 0 ? "left" : "right"} 
                  contentStyle={{ background: "rgba(52, 58, 64, 0.3)" }}
                  contentArrowStyle={{
                    borderRight: "7px solid  #a8d49b",
                  }}
                  icon={<CodeIcon />}
                  iconStyle={{
                    background: "#a8d49b",
                    color: "#fff",
                  }}
                >
                  <div className="projects-technologies">
                    {data.technologies.map((name, i) => (
                      <Chip
                        key={i}
                        label={name}
                        sx={{
                          backgroundColor: "rgb(18, 54, 54)",
                          color: "rgb(255, 255, 255)",
                          fontWeight: "bold",
                        }}
                      ></Chip>
                    ))}
                  </div>
                  <div className="description-container" style={{ marginBottom: "1rem" }}>
                    <h3
                      className="vertical-timeline-element-title"
                      style={{
                        fontSize: "12",
                        color: "rgba(255, 255, 255, 0.8)",
                      }}
                    >
                      {data.cardTitle}
                    </h3>
                    <p
                      style={{
                        fontSize: "1em",
                        fontWeight: "350",
                        color: "rgba(255, 255, 255, 1)",
                      }}
                    >
                      {data.cardDetailedText}
                    </p>
                    <div className="project-links">
                    {data.links.map((link, j) => (
                      <div>
                        <br></br>
                        <Button
                          key={j} // eslint-disable-line react/no-array-index-key
                          variant="contained"
                          color="default"
                          sx={{
                            backgroundColor: "rgb(18, 54, 54)",
                            "&:hover": {
                            color: "#a8d49b", // Hover text color
                          },
                        }}
                          target="_blank"
                          href={link.url}
                        >
                          {link.text}
                        </Button>
                      </div>
                      ))}
                    </div>
                  </div>

                  {/* Video container */}
                  <div className="media-container">
                    {data.videoUrl ? (
                        <iframe
                          src={data.videoUrl}
                          title={data.cardTitle}
                          width="100%"
                          height="300px"
                          allowFullScreen
                        ></iframe>
                      ) : null
                    }
                  </div>
                </VerticalTimelineElement>
              ))}
              {loadButton && (
                <VerticalTimelineElement
                  iconOnClick={loadMore}
                  iconClassName="d-flex justify-content-center"
                  icon={
                    <IconButton aria-label="add">
                      <AddIcon
                        style={{
                          color: "#fff",
                          marginTop: "0.1px",
                          marginBottom: "40px"
                        }}
                      />
                    </IconButton>
                  }
                  iconStyle={{
                    background: "rgb(18, 54, 54)",
                    color: "#fff",
                    // position: "absolute",
                    // top: "50%", // Center the button vertically
                    // transform: "translateY(-50%)", // Adjust centering
                  }}
                />
              )}
              {lessButton && (
                <VerticalTimelineElement
                  iconOnClick={loadLess}
                  iconClassName="d-flex justify-content-center"
                  icon={
                    <IconButton aria-label="add">
                      <RemoveIcon
                        style={{
                          color: "#fff",
                          marginTop: "0.1px",
                          marginBottom: "40px"
                        }}
                      />
                    </IconButton>
                  }
                  iconStyle={{
                    background: "rgb(18, 54, 54)",
                    color: "#fff",
                  }}
                />
              )}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;