import ProjectPeople from "../components/ProjectPeople";

export default function ProjectBudget({ setProjectStep }) {
  return (
    <div>
      <h1>Website Redesign</h1>
      <p>Budget</p>
      Something should go here.
      <button
        onClick={() =>
          setProjectStep(<ProjectPeople setProjectStep={setProjectStep} />)
        }
      >
        Next
      </button>
      <button>I'm not sure.</button>
    </div>
  );
}
