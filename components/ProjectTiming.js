export default function ProjectTiming({
  projectTiming,
  setProjectTiming,
  nextStep,
}) {
  return (
    <div>
      <h1>Website Redesign</h1>
      <p>Alright, let's talk timing...</p>
      <form>
        <select
          onChange={(e) => setProjectTiming(e.target.value)}
          value={projectTiming}
        >
          <option value="">When do you want to start?</option>
          <option>ASAP</option>
          <option>In two weeks</option>
          <option>In a month</option>
          <option>Six weeks from now</option>
          <option>Three months from now</option>
          <option>I'm not sure.</option>
        </select>
        <select>
          <option>When do you need to launch something?</option>
          <option>ASAP</option>
          <option>In four weeks</option>
          <option>In six weeks</option>
          <option>In eight weeks</option>
          <option>Three months from now</option>
          <option>However long it takes.</option>
        </select>
      </form>
      <button onClick={() => nextStep("ProjectBudget")}>Next</button>
      <button>I'm not sure.</button>
    </div>
  );
}
