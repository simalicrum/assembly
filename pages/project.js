import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectInfo from "../components/ProjectInfo";
import ProjectType from "../components/ProjectType";
import ProjectTiming from "../components/ProjectTiming";
import ProjectBudget from "../components/ProjectBudget";
import ProjectPeople from "../components/ProjectPeople";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [projectStep, setProjectStep] = useState();
  const [projectType, setProjectType] = useState("");
  const [projectTiming, setProjectTiming] = useState("");
  useEffect(() => {
    setProjectStep(<ProjectInfo setProjectStep={setProjectStep} />);
  }, []);
  return (
    <div>
      <Head>
        <title>Assembly</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div>
        <h3>Define your project:</h3>
        <div>
          <div
            onClick={() =>
              setProjectStep(<ProjectInfo setProjectStep={setProjectStep} />)
            }
          >
            Project Info
          </div>
          <div
            onClick={() =>
              setProjectStep(
                <ProjectType
                  projectType={projectType}
                  setProjectType={setProjectType}
                  setProjectStep={setProjectStep}
                />
              )
            }
          >
            Type of Project
          </div>
          <div
            onClick={() =>
              setProjectStep(
                <ProjectTiming
                  projectTiming={projectTiming}
                  setProjectTiming={setProjectTiming}
                  setProjectStep={setProjectStep}
                />
              )
            }
          >
            Timing
          </div>
          <div
            onClick={() =>
              setProjectStep(<ProjectBudget setProjectStep={setProjectStep} />)
            }
          >
            Budget
          </div>
          <div
            onClick={() =>
              setProjectStep(<ProjectPeople setProjectStep={setProjectStep} />)
            }
          >
            People
          </div>
        </div>
      </div>
      {projectStep}
      <Footer />
    </div>
  );
}
