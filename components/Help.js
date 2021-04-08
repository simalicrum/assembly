export default function Help() {
  return (
    <div>
      <h1>Need some help?</h1>
      <div>
        <div>
          <h2>Email</h2>
          <form>
            <input placeholder="Your email Address"></input>
            <br />
            <select>
              <option>Website</option>
              <option>Marketing Campaign</option>
              <option>Product Launch</option>
              <option>Strategic Planning</option>
              <option>eCommerce Site</option>
              <option>Marketing Automation Build</option>
              <option>SEO / SEM Work</option>
              <option>UX Optimization</option>
            </select>
            <br />
            <button type="submit">Email Us!</button>
          </form>
        </div>
        <div>
          <h2>Chat</h2>
          <a href="#">Chat Now!</a>
        </div>
        <div>
          <h2>Phone</h2>
          <div>Give us a shout:</div>
          <div>206-523-4152</div>
        </div>
      </div>
    </div>
  );
}
