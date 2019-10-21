import { AD_FETCH, AD_SUCCESS, AD_FAILURE} from '../actions/index'

const initialState = {
    ad : [],
    isFetching: false,
    error: ''
}

const AdReducer = (state = initialState, action) => {
    switch (action.type) {
        case AD_FETCHING:
          return {
            ...state,
            isFetching: true,
            error: ''
          };
        case AD_SUCCESS:
          return {
            ...state,
            isFetching: false,
            error: '',
            catFacts: action.payload
          };
        case AD_FAILURE:
          return {
            ...state,
            error: action.payload,
            isFetching: false
          };
        default:
          return state;
      }
    };
 
export default AdReducer;