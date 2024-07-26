import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
    </div>
  );
};

const SkillList = () => {
  return (
    <div className="skill_list">
      <Skills skill="HTML & CSS" emoji="🌐" color="#777777" />
      <Skills skill="JavaScript" emoji="👩‍💻" color="#FFB22C" />
      <Skills skill="React" emoji="👆🖲️" color="blue" />
      <Skills skill="Python" emoji="🐍" color="#EB3678" />
      <Skills skill="SQL" emoji="🐬" color="#36C2CE" />
      <Skills skill="Postgres" emoji="🐘" color="#399918" />
      <Skills skill="MongoDB" emoji="🍁" color="#36C2CE" />
      <Skills skill="Docker" emoji="🐳" color="#405D72" />
    </div>
  );
};

const Skills = (props) => {
  return (
    <div className="skills" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
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
