import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar_contant">
        <div className="navbar_logo">
          <img src="https://wedsites.com/assets/public/logo-66b6a6248638bc4529643b9f465a1b0b5c8524692e22c04903ea7e5564404d0f.svg" alt="Logo" />
        </div>
        <div className="navbar_side">
          <ul className="navbar_ul1">
            {['Features', 'How it works', 'Templates', 'Pricing', 'Blog'].map((item) => (
              <li className="navbar_item" key={item}><a href="#">{item}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="navbar_ul2">
            <li className="navbar_section"><a href="#">Log in</a></li>
            <li className="navbar_section"><a href="#">Get started</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
