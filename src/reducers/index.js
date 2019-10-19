//to consume all reducer files
import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE, NEW_REVIEW_FETCH, NEW_REVIEW_SUCCESS, NEW_REVIEW_FAILURE} from '../actions/index'

const initialState = {
    restaurants : [],
    isFetching: false,
    error: ''
}

const reducer = (state = initialState, action) => {

 
        return state;
}
export default reducer