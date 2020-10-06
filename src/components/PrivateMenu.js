import React from 'react';
import { NavLink } from 'react-router-dom';
import PropType from 'prop-types';
import { useDispatch } from 'react-redux';
import { setLogout } from '../actions/UserLogin';

function PrivateMenu(props) {
  const { sidebarRef, history } = props;
  const dispatch = useDispatch();
  return (
    <div className="offcanvas w-auto bg-gray-600 p-3" ref={sidebarRef}>
      <div>
        <div>User Image</div>
        <h4>User Name</h4>
      </div>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <button type="button" onClick={() => dispatch(setLogout(history))}>
        Logout
      </button>
    </div>
  );
}

PrivateMenu.propTypes = {
  sidebarRef: PropType.shape({ current: PropType.instanceOf(Element) }).isRequired,
  history: PropType.shape({ push: PropType.func.isRequired }).isRequired,
};

export default PrivateMenu;
