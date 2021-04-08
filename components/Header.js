export default function Header() {
  return (
    <header className="mainheader">
      <link rel="preconnect" href="https://fonts.gstatic.com" /> 
      <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap" rel="stylesheet" />
        <div className="topbar">
            <div className="logo"><a href="/"><img src="/img/logo.png" height="40px" /></a></div>
            <div className="logo-text"><a href="/">ASSEMBLY</a></div>
            <div className="menuitem"><a href="/about">About Us</a></div>
            <div className="menuitem"><a href="/services">Services</a></div>
            <div className="menuitem"><a href="/portfolio">Portfolio</a></div>
            <div className="menuitem"><a href="/contact">Contact Us</a></div>
            <div className="menulogin"><a href="/login">Login</a></div>
        </div>
    </header>
  )
}