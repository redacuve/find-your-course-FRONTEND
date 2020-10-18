import React from 'react';
import { NavLink } from 'react-router-dom';
import PropType from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setLogout } from '../actions/UserLogin';

function PrivateMenu(props) {
  const { sidebarRef, history, clickHandler } = props;
  const dispatch = useDispatch();
  const username = useSelector(state => state.UserLogin.username);
  const email = useSelector(state => state.UserLogin.user);
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
      <div className="flex flex-col items-start mb-8">
        <h4>{username.toUpperCase()}</h4>
        <h6 className="text-sm text-gray-600">{email}</h6>
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
  clickHandler: PropType.func.isRequired,
};

export default PrivateMenu;
