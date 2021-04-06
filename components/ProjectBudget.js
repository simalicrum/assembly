export default function ProjectBudget({ nextStep }) {
  return (
    <div>
      <h1>Website Redesign</h1>
      <p>Budget</p>
      Something should go here.
      <button onClick={() => nextStep("ProjectPeople")}>Next</button>
      <button>I'm not sure.</button>
    </div>
  );
}
