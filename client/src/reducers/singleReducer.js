import { FETCHING_JOKE_START, FETCHING_JOKE_SUCCESS, FETCHING_JOKE_FAILURE } from '../actions'

const initialState = {
    isLoading: false,
    jokes: null,
    error: ''
}


export const singleReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCHING_JOKE_START:
            return {
                ...state, 
                isLoading: true
            };
        case FETCHING_JOKE_SUCCESS: 
            return{
                ...state, 
                isLoading: false,
                jokes: action.payload
            }
        case FETCHING_JOKE_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
                
            }

        default:
            return state
    }
}