import React from 'react';
import { NavLink } from 'react-router-dom';
import PropType from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setLogout } from '../actions/UserLogin';

function PrivateMenu(props) {
  const { sidebarRef, history } = props;
  const dispatch = useDispatch();
  const username = useSelector(state => state.UserLogin.username);
  return (
    <div
      className="offcanvas w-auto bg-gray-200 shadow flex flex-col items-end p-3 w-1/2 h-screen text-lg"
      ref={sidebarRef}
    >
      <div className="flex flex-col items-end mb-8">
        <div>User Image</div>
        <h4>{username}</h4>
      </div>
      <NavLink to="/dashboard" className="mb-6">
        Dashboard
      </NavLink>
      <NavLink to="/courses" className="mb-6">
        All Courses
      </NavLink>
      <button
        type="button"
        onClick={() => dispatch(setLogout(history))}
        className="mb-6"
      >
        Logout
      </button>
    </div>
  );
}

PrivateMenu.propTypes = {
  sidebarRef: PropType.shape({ current: PropType.instanceOf(Element) })
    .isRequired,
  history: PropType.shape({ push: PropType.func.isRequired }).isRequired,
};

export default PrivateMenu;
