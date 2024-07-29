import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  { name: "HTML & CSS", level: "Advance", color: "#2662EA" },
  { name: "Javascript", level: "Advance", color: "#EFD81D" },
  { name: "Python", level: "Advance", color: "#C3DCAF" },
  { name: "GITHUB", level: "Intermediate", color: "#E84F33" },
  { name: "REACT", level: "Intermediate", color: "#60DAFB" },
  { name: "Django", level: "Intermediate", color: "#2662EA" },
  { name: "SQL", level: "Advance", color: "#36C2ce" },
  { name: "PostgresSQL", level: "Advance", color: "#399918" },
  { name: "Mongo", level: "Intermediate", color: "#36C2ce" },
  { name: "Docker", level: "Beginner", color: "#405D72" },
];

const App = () => {
  return <Card />;
};

const Card = () => {
  return (
    <div className="card">
      <Avatar />
      <Intro />
      <SkillList />
    </div>
  );
};

const Avatar = () => {
  return <img src="./Image/image.png" alt="Developer" />;
};

const Intro = () => {
  return (
    <div className="card_content">
      <h3>Akshay Parab</h3>
      <p> Full Stack Web Developer and Member of Google Summer of Code</p>
      <strong>
        Github : <a href="https://github.com/TechiAkki963">TechiAkki963</a>
      </strong>
    </div>
  );
};

const SkillList = () => {
  return (
    <div className="skill_list">
      {skills.map((skill) => (
        <Skills skill={skill.name} color={skill.color} level={skill.level} />
      ))}
      {/* <Skills skill="HTML & CSS" emoji="🌐" color="#777777" />
      <Skills skill="JavaScript" emoji="👩‍💻" color="#FFB22C" />
      <Skills skill="React" emoji="👆🖲️" color="blue" />
      <Skills skill="Python" emoji="🐍" color="#EB3678" />
      <Skills skill="SQL" emoji="🐬" color="#36C2CE" />
      <Skills skill="Postgres" emoji="🐘" color="#399918" />
      <Skills skill="MongoDB" emoji="🍁" color="#36C2CE" />
      <Skills skill="Docker" emoji="🐳" color="#405D72" /> */}
    </div>
  );
};

const Skills = ({ name, color, level }) => {
  return (
    <div className="skills" style={{ backgroundColor: color }}>
      <span>{name}</span>
      <span>
        {level === "Beginner" && "🍷"}
        {level === "Intermediate" && "🍺"}
        {level === "Advance" && "🍵"}
      </span>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
