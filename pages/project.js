import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectInfo from "../components/ProjectInfo";
import ProjectType from "../components/ProjectType";
import ProjectTiming from "../components/ProjectTiming";
import ProjectBudget from "../components/ProjectBudget";
import ProjectPeople from "../components/ProjectPeople";
import React, { useEffect, useState } from "react";
import { connectToDatabase } from "../util/mongodb";

export async function getServerSideProps(context) {
  const { client } = await connectToDatabase();

  const isConnected = await client.isConnected();

  return {
    props: { isConnected },
  };
}

export default function Home({ isConnected }) {
  const [projectStep, setProjectStep] = useState();
  const [projectType, setProjectType] = useState("");
  const [projectTiming, setProjectTiming] = useState("");
  const nextStep = (next) => {
    switch (next) {
      case "ProjectInfo":
        setProjectStep(<ProjectInfo nextStep={nextStep} />);
        break;
      case "ProjectType":
        setProjectStep(
          <ProjectType
            projectType={projectType}
            setProjectType={setProjectType}
            nextStep={nextStep}
          />
        );
        break;
      case "ProjectTiming":
        setProjectStep(
          <ProjectTiming
            projectTiming={projectTiming}
            setProjectTiming={setProjectTiming}
            nextStep={nextStep}
          />
        );
        break;
      case "ProjectBudget":
        setProjectStep(<ProjectBudget nextStep={nextStep} />);
        break;
      case "ProjectPeople":
        setProjectStep(<ProjectPeople nextStep={nextStep} />);
        break;
    }
  };
  useEffect(() => {
    setProjectStep(<ProjectInfo nextStep={nextStep} />);
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
          <div onClick={() => nextStep("ProjectInfo")}>Project Info</div>
          <div onClick={() => nextStep("ProjectType")}>Type of Project</div>
          <div onClick={() => nextStep("ProjectTiming")}>Timing</div>
          <div onClick={() => nextStep("ProjectBudget")}>Budget</div>
          <div onClick={() => nextStep("ProjectPeople")}>People</div>
        </div>
      </div>
      {projectStep}
      {isConnected ? (
        <p>You are connected to MongoDB</p>
      ) : (
        <p>
          You are NOT connected to MongoDB. Check the <code>README.md</code> for
          instructions.
        </p>
      )}
      <p>Project Type: {projectType}</p>
      <p>Project Timing: {projectTiming}</p>

      <Footer />
    </div>
  );
}
