
import { FETCHING_JOKES_START, FETCHING_JOKES_SUCCESS, FETCHING_JOKES_FAILURE } from '../actions'

const initialState = {
    isLoading: false,
    jokes: null,
    error: ''
}


export const tenReducer = (state = initialState, action) => {
    switch(action.type){
    case FETCHING_JOKES_START:
        return {
            ...state, 
            isLoading: true
        }
    
    case FETCHING_JOKES_SUCCESS:
        return{
            ...state,
            isLoading: false,
            jokes: action.payload

        }
    case FETCHING_JOKES_FAILURE:
         return {
            ...state,
            error: action.payload,
            isLoading: false
                
            }
    default:
        return state
    }
}