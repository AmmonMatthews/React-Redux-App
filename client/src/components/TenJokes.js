import React from 'react';
import { connect } from 'react-redux';

import { fetchingJokes } from '../actions'


const TenJokes = props => {


    return(
        <div>
            <h1>multiples jokes</h1>
            <button onClick={props.fetchingJokes}>Get Jokes</button>
        </div>
    )
}


const mapStateToProps= state => {
    
    return{
        isLoading: state.isLoading,
        jokes: state.jokes,
        error: state.error
    }
}


export default connect(mapStateToProps, { fetchingJokes })(TenJokes);