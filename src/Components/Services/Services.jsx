import React from "react";
import Service from "./Service";
import Title from "../Shared/Title/Title";

const serviceList = [
  {
    id: "01",
    heading: "Illustration Design",
    subHeading: "Designer",
    para: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. sunt in culpa qui officia deserunt mollit",
  },
  {
    id: "02",
    heading: "Business Branding",
    subHeading: "Branding",
    para: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. sunt in culpa qui officia deserunt mollit",
  },
  {
    id: "03",
    heading: "Web UI/UX Design",
    subHeading: "UI/UX Design",
    para: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. sunt in culpa qui officia deserunt mollit",
  },
  {
    id: "04",
    heading: "Application Design",
    subHeading: " Web Design",
    para: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. sunt in culpa qui officia deserunt mollit",
  },
  {
    id: "05",
    heading: " Digital Marketing",
    subHeading: "SEO Analytics",
    para: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. sunt in culpa qui officia deserunt mollit",
  },
];
const Services = ({ isHeading }) => {
  return (
    <section
      id="services"
      className={`service__section overhid ${isHeading && "pt-120"}  pb-120`}
    >
      <div className="container">
        {isHeading && (
          <Title
            mainTitle="My Special Service For Your Business Development"
            sortTitle="Services That i Provide"
          />
        )}

        <div className={`service__uniquewrap `}>
          {serviceList.map(({ id, heading, subHeading, para }) => (
            <Service
              key={id}
              id={id}
              heading={heading}
              subHeading={subHeading}
              para={para}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
