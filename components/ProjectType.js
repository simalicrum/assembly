export default function ProjectType({ projectType, setProjectType, nextStep }) {
  return (
    <div>
      <h1>Website Redesign</h1>
      <p>You’ve named your project now...what sorta project is it?</p>
      <form>
        <select
          onChange={(e) => setProjectType(e.target.value)}
          value={projectType}
        >
          <option value="">Choose your project type</option>
          <option>Website</option>
          <option>Marketing Campaign</option>
          <option>Product Launch</option>
          <option>Strategic Planning</option>
          <option>eCommerce Site</option>
          <option>Marketing Automation Build</option>
          <option>SEO / SEM Work</option>
          <option>UX Optimization</option>
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
      <button onClick={() => nextStep("ProjectTiming")}>Next</button>
      <button>I'm not sure.</button>
    </div>
  );
}
