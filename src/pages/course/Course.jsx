import Section from "../../ui/Section";
import dataCourse from "./components/dataCourse";
import ContentItems from "./components/ContentItems";
import HeaderCourse from "./components/HeaderCourse";
import FooterCourse from "./components/FooterCourse";
import SidebarMenu from "./components/SidebarMenu";
import { data, useOutletContext } from "react-router";
import { useState } from "react";
function Course() {
  const { humberger, handleHumberger } = useOutletContext();

  const { titleCourse, statusCourse, steps } = dataCourse.courses[0];
  const {
    title: titleStep,
    status: statusStep,
    description,
    content,
  } = steps[0];

  return (
    <>
      <div className="min-h-screen bg-white  xl:p-7 dark:border dark:border-white/25 dark:bg-black hover:dark:border-white/35">
        <SidebarMenu
          humberger={humberger}
          onHumberger={handleHumberger}
          steps={steps}
          titleCourse={titleCourse}
        />

        <Section>
          <div className=" ">
            {
              <ContentItems
                titleStep={`Module 1 : ${titleStep}`}
                statusStep={statusStep}
                description={description}
                content={content}
              />
            }
          </div>
        </Section>
      </div>
    </>
  );
}

export default Course;
