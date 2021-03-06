//to consume all reducer files
import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE, NEW_REVIEW_FETCH, NEW_REVIEW_SUCCESS, NEW_REVIEW_FAILURE} from '../actions/index'

const initialState = {
    catFacts : [],
    isFetching: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case START_FETCHING:
          return {
            ...state,
            isFetching: true,
            error: ''
          };
        case FETCH_SUCCESS:
          return {
            ...state,
            isFetching: false,
            error: '',
            catFacts: action.payload
          };
        case FETCH_FAILURE:
          return {
            ...state,
            error: action.payload,
            isFetching: false
          };
        default:
          return state;
      }
    };
 
export default reducer