import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderLinkProps {
  path: string;
  title: string;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({
  path,
  title
}: HeaderLinkProps) => {
  const location = useLocation();
  return (
    <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
      <Link className={location.pathname === path ? 'nav-link active' : 'nav-link'} to={path}>{title}</Link>
    </li>
  );
}

const Header: React.FC = () => {
  const location = useLocation();
  return (
    <nav className={location.pathname === '/' ? 'navbar navbar-expand-lg navbar-dark fixed-top' : 'navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink'} id="mainNav">
      <div className="container">
        <Link className="navbar-brand" to={'/'}>
          <span className="fa-stack">
            <i className="fas fa-circle fa-stack-2x text-primary"></i>
            <i className="fas fa-paw fa-stack-1x fa-inverse"></i>
          </span>
        </Link>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ml-auto">
            <HeaderLink path="/services" title="Services" />
            <HeaderLink path="/about" title="About" />
            <HeaderLink path="/team" title="Team" />
            <HeaderLink path="/contact" title="Contact" />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;