import { CHANGE_TITLE } from '../actions/Title';

const initialState = {
  title: 'Find Your Courses',
};

function TitleReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TITLE:
      return {
        title: action.payload,
      };
    default:
      return { ...state };
  }
}

export default TitleReducer;
