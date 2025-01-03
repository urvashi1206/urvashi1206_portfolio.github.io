import { RiReactjsLine } from "react-icons/ri";
import {
  SiMongodb,
  SiTableau,
  SiOracle,
  SiSharp,
  SiUnity,
  SiUnrealengine,
  SiSpringboot,
  SiAmazonwebservices,
  SiDocker,
} from "react-icons/si";
import { FaNodeJs, FaPython, FaJava, FaDatabase, FaGitAlt, FaJsSquare } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";

// Icon animation variants with random duration
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

// Generate a random duration for each icon
const getRandomDuration = () => Math.random() * 2 + 1.5; // Random duration between 1.5s and 3.5s

const Technologies = () => {
  const technologies = [
    { Icon: FaPython, label: "Python", color: "text-yellow-400" },
    { Icon: FaJava, label: "Java", color: "text-red-500" },
    { Icon: SiSharp, label: "C#", color: "text-purple-500" },
    { Icon: FaJsSquare, label: "JavaScript", color: "text-yellow-400" },
    { Icon: SiOracle, label: "Oracle", color: "text-red-700" },
    { Icon: FaDatabase, label: "SQL / PL-SQL", color: "text-blue-500" },
    { Icon: SiUnity, label: "Unity", color: "text-gray-300" },
    { Icon: SiUnrealengine, label: "Unreal", color: "text-blue-600" },
    { Icon: SiSpringboot, label: "Spring Boot", color: "text-green-700" },
    { Icon: SiAmazonwebservices, label: "AWS", color: "text-orange-500" },
    { Icon: SiDocker, label: "Docker", color: "text-blue-600" },
    { Icon: FaGitAlt, label: "Git", color: "text-orange-600" },
    { Icon: RiReactjsLine, label: "ReactJS", color: "text-cyan-400" },
    { Icon: SiTableau, label: "Tableau", color: "text-blue-500" },
    { Icon: SiMongodb, label: "MongoDB", color: "text-green-500" },
    { Icon: FaNodeJs, label: "NodeJS", color: "text-green-500" },
    { Icon: BiLogoPostgresql, label: "PostgreSQL", color: "text-sky-700" },
  ];

  return (
    <section id="technologies" className="about background-alt">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className="text-center text-4xl"
            style={{ color: "rgba(255, 255, 255, 0.7)" }}
          >
            Technologies
          </motion.h2>
        </div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          {technologies.map(({ Icon, label, color }, index) => (
            <motion.div
              key={index}
              variants={iconVariants(getRandomDuration())} // Use random duration
              initial="initial"
              animate="animate"
              className="relative group rounded-2xl border-1 border-neutral-800 p-4"
              style={{
                backgroundColor: "rgba(52, 64, 60, 0.3)", // Updated background color
              }}
            >
              <Icon className={`text-7xl ${color}`} />
              <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity">
                {label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
