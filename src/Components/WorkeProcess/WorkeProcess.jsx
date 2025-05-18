import React from "react";
import Title from "../Shared/Title/Title";
import WorkProcessCard from "./WorkProcessCard";

const processList = [
  {
    id: 1,
    title: "Concept",
    info: "Nemo enim ipsam voluptatem voluptas sit aspernatur aut odit aut fugit",
    list: [
      "Reviewing any existing branding",
      "Target audience and competitors research",
      "Developing a strategy",
    ],
  },
  {
    id: 2,
    title: "Design",
    info: "Nemo enim ipsam voluptatem voluptas sit aspernatur aut odit aut fugit",
    list: [
      "Developing wireframes and mockup",
      "Choosing typography, color palettes,",
      "Refining the design",
    ],
  },
  {
    id: 3,
    title: "Webflow",
    info: "Nemo enim ipsam voluptatem voluptas sit aspernatur aut odit aut fugit",
    list: [
      "Testing the website thoroughly launch",
      "Choosing typography, color palettes,",
      "Refining the design",
    ],
  },
];
const WorkeProcess = () => {
  return (
    <section className="process__section pt-120 pb-120">
      <div className="container">
        <Title
          mainTitle="Your Dream Website In Just Few Steps"
          sortTitle="Working Process"
        />
        <div className="row g-4">
          {processList.map(({ id, info, list, title }) => (
            <WorkProcessCard key={id} info={info} list={list} title={title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkeProcess;
