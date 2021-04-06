import ProjectTiming from "../components/ProjectTiming";

export default function ProjectType({
  projectType,
  setProjectType,
  setProjectStep,
}) {
  return (
    <div>
      <h1>Website Redesign</h1>
      <p>You’ve named your project now...what sorta project is it?</p>
      <form>
        <select onChange={(e) => setProjectType(e.target.value)}>
          <option>Choose your project type</option>
          <option value="website">Website</option>
          <option value="marketing">Marketing Campaign</option>
          <option value="launch">Product Launch</option>
          <option value="planning">Strategic Planning</option>
          <option value="ecommerce">eCommerce Site</option>
          <option value="automation">Marketing Automation Build</option>
          <option value="seo">SEO / SEM Work</option>
          <option value="ux">UX Optimization</option>
        </select>
        <select>
          <option>Sub-type (choose a project type first)</option>
          <option>Brand Site</option>
          <option>Catalog Site</option>
          <option>Blog Site</option>
          <option>Combination Site</option>
          <option>eCommerce Site</option>
          <option>Campaign Site</option>
          <option>Contest Site</option>
          <option>Interactive Site</option>
        </select>
      </form>
      <button
        onClick={() =>
          setProjectStep(
            <ProjectTiming
              setProjectTiming={setProjectTiming}
              setProjectStep={setProjectStep}
            />
          )
        }
      >
        Next
      </button>
      <button>I'm not sure.</button>
    </div>
  );
}
