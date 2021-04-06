export default function Header() {
  return (
    <header class="mainheader">
      <link rel="preconnect" href="https://fonts.gstatic.com" /> 
      <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap" rel="stylesheet" />
        <div class="topbar">
            <div class="logo"><a href="/"><img src="/img/logo.png" height="40px" /></a></div>
            <div class="logo-text"><a href="/">ASSEMBLY</a></div>
            <div class="menuitem"><a href="/about">About Us</a></div>
            <div class="menuitem"><a href="/services">Services</a></div>
            <div class="menuitem"><a href="/portfolio">Portfolio</a></div>
            <div class="menuitem"><a href="/contact">Contact Us</a></div>
            <div class="menulogin"><a href="/login">Login</a></div>
        </div>
    </header>
  )
}