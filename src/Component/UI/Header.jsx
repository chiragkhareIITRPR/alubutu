export const Header = () => {
  return (
  <header className="alubutu-header">
  <nav className="alubutu-nav">
    <div className="alubutu-logo">
      <a href="/">
        <img src="/cropped-alubutu-logo-gray.jpg" alt="Alubutu Logo" />
      </a>
    </div>

    <input type="checkbox" id="alubutu-menu-toggle"/>
    <label htmlFor="alubutu-menu-toggle" className="alubutu-menu-icon">&#9776;</label>


    <ul className="alubutu-menu">
      <li><a id="alubutu-nav-home" href="/">Home</a></li>
      <li><a id="alubutu-nav-about" href="/about">Service</a></li>
      <li><a id="alubutu-nav-contact" href="/portfolio">Portfolio</a></li>
      <li><a id="alubutu-nav-contact" href="/contact">Contact</a></li>
    </ul>
  </nav>
</header>
  );
}





