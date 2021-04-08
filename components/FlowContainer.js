import ProjectInfo from "../components/ProjectInfo";
import ProjectType from "../components/ProjectType";
import ProjectTiming from "../components/ProjectTiming";
import ProjectBudget from "../components/ProjectBudget";
import ProjectPeople from "../components/ProjectPeople";
import React, { useEffect, useState } from "react";

export default function FlowContainer() {
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
      <p>Project Type: {projectType}</p>
      <p>Project Timing: {projectTiming}</p>
    </div>
  );
}
