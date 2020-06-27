
  import {FETCHING_DATA_SUCCESS} from './actions';

  const initialState = {
    smurfs: []
  };
  
  export const appReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCHING_DATA_SUCCESS:
        return {
          ...state,
          smurfs: action.payload,
        };
      default:
        return state;
    }
  };
  