const INITIAL_STATE = {
  jobTypes: [],
  skills: []
};

function homeReducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'GET_JOB_TYPES':
      return { ...state, jobTypes: action.jobTypes };
    default: return state;
  }
}

export default homeReducer;