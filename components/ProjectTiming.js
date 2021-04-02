export default function ProjectTiming() {
  return (
    <div>
      <h1>Website Redesign</h1>
      <p>Alright, let's talk timing...</p>
      <form>
        <select>
          <option>When do you want to start?</option>
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
      <button>Next</button>
      <button>I'm not sure.</button>
    </div>
  )
}