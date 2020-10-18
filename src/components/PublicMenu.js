import React from 'react';
import { NavLink } from 'react-router-dom';
import PropType from 'prop-types';

function PublicMenu(props) {
  const { sidebarRef, clickHandler } = props;
  return (
    <div
      className="offcanvas w-auto bg-gray-200 shadow flex flex-col items-start p-3 w-1/2 h-screen text-lg z-10"
      ref={sidebarRef}
      onClick={clickHandler}
      role="button"
      tabIndex={0}
      onKeyPress={(e => {
        if (e.key === 'Enter') {
          clickHandler();
        }
      })}
    >
      <NavLink className="mb-6" to="/">
        Home
      </NavLink>
      <NavLink className="mb-6" to="/login">
        Login
      </NavLink>
      <NavLink className="mb-6" to="/signup">
        Signup
      </NavLink>
    </div>
  );
}

PublicMenu.propTypes = {
  sidebarRef: PropType.shape({ current: PropType.instanceOf(Element) })
    .isRequired,
  clickHandler: PropType.func.isRequired,
};

export default PublicMenu;
