export default function ProjectInfo() {
  return (
    <div>
      <h1>Your Project</h1>
      <form>
        <div>
          <input placeholder={"Your Project Name"}></input>
          <select>
            <option>Rough Project Duration</option>
          </select>
          <select>
            <option>Size of YOUR team working on this project</option>
          </select>
        </div>
        <textarea placeholder="Hi"></textarea>
      </form>
      <button>Next</button>
    </div>
  )
}