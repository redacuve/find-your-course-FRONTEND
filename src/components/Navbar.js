import React, { useRef } from 'react';

function Navbar() {
  const sidebarRef = useRef();

  const toggleMenu = () => {
    sidebarRef.current.classList.toggle('open');
  };

  return (
    <>
      <div className="offcanvas w-auto bg-gray-600 p-3" ref={sidebarRef}>
        <div>
          <div>User Image</div>
          <h4>User Name</h4>
        </div>
        <div>Dashboard</div>
        <div>Logout</div>
      </div>

      <nav className="flex justify-between p-2 items-center">
        <div
          className="md:hidden"
          onClick={toggleMenu}
          role="button"
          tabIndex="0"
          aria-label="open sidebar"
          onKeyDown={toggleMenu}
        >
          <i className="fas fa-bars" />
        </div>
        <h2>Title</h2>
        <div>
          <i className="fal fa-search" />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
