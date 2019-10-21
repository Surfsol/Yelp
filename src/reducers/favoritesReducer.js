import { FAVORITE_SAVE, FAVORITE_REMOVE} from '../actions'

const initialState = (
    state = []
)

const favoriteReducer = (state = initialState, action) => {
    switch(action.type){
        case "FAVORITE_SAVE":
            return[
            ...state, action.payload
            ]  
            
        case "FAVORITE_REMOVE":
                return[
                ...state, 
                state.filter(e => e.action.payload)
                ]  
        }
}
