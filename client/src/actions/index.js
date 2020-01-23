// ACTIONS
import axios from 'axios';

export const FETCHING_JOKE_START = 'FETCHING_JOKE_START';
export const FETCHING_JOKE_SUCCESS = 'FETCHING_JOKE_SUCCESS';
export const FETCHING_JOKE_FAILURE = 'FETCHING_JOKE_FAILURE';

export const FETCHING_JOKES_START = 'FETCHING_JOKES_START';
export const FETCHING_JOKES_SUCCESS = 'FETCHING_JOKES_SUCCESS';
export const FETCHING_JOKES_FAILURE = 'FETCHING_JOKES_FAILURE';


export const fetchingJoke = () => dispatch => {
    dispatch({ type: FETCHING_JOKE_START });
    axios
        .get('https://official-joke-api.appspot.com/jokes/random')
        .then(res => {
            // console.log(res.data)
            dispatch({ type: FETCHING_JOKE_SUCCESS, payload: res.data })
        })
        .catch(err => {console.log('error', err.response)
    
            dispatch({ type: FETCHING_JOKE_FAILURE, payload:err.response.status })
        })

}

export const fetchingJokes = () => dispatch =>{
    dispatch({type: FETCHING_JOKES_START});
    axios
        .get('')
        .then(res => {
            console.log(res)
        } )
        .err(err => {
            dispatch({type: FETCHING_JOKES_FAILURE, payload: err.response.status})
        })

}


