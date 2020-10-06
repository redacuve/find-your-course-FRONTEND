import React from 'react';
import { NavLink } from 'react-router-dom';
import PropType from 'prop-types';

function PublicMenu(props) {
  const { sidebarRef } = props;
  return (
    <div className="offcanvas w-auto bg-gray-600 p-3" ref={sidebarRef}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/signup">Signup</NavLink>
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
