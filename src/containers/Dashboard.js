import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { getUser } from '../Utils/Common';
import { setLogout } from '../actions/UserLogin';

function Dashboard(props) {
  const user = getUser();
  const dispatch = useDispatch();

  return (
    <div>
      {`Welcome ${user}`}
      <br />
      <br />
      <button
        type="button"
        onClick={() => dispatch(setLogout(props.history))}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Logout
      </button>
    </div>
  );
}

Dashboard.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Dashboard;
