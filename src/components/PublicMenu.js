import React from 'react';
import { NavLink } from 'react-router-dom';
import PropType from 'prop-types';

function PublicMenu(props) {
  const { sidebarRef } = props;
  return (
    <div
      className="offcanvas w-auto bg-gray-200 shadow flex flex-col items-end p-3 w-1/2 h-screen text-lg"
      ref={sidebarRef}
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
  sidebarRef: PropType.shape({ current: PropType.instanceOf(Element) }),
};

PublicMenu.defaultProps = {
  sidebarRef: PropType.shape({ current: undefined }),
};

export default PublicMenu;
