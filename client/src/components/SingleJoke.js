import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner'

import { fetchingJoke } from '../actions';


const SingleJoke = (props) => {
    

    return(
        <div>
            <h1>Dad Jokes</h1>
            {!props.jokes && !props.isLoading && !props.error && <h2>Press the button to get a joke or ten jokes</h2>}

            {props.isLoading && (
                <Loader
                  type="Puff"
                  color="#00BFFF"
                  height={100}
                  width={100}
                  timeout={30000} //3 secs
                />
              )}
            {props.jokes && !props.loading &&
                <div className="joke">
                    <p> {props.jokes.setup}</p>
                    <p>Answer: {props.jokes.punchline}</p>
                </div> }
            
            {props.error && !props.jokes &&
                <div>
                    <p>{props.error + ' No Jokes Found'}</p>
                </div>
            }


            <button onClick={props.fetchingJoke}>Get Joke</button>
            <Link to="/joke"><button> Ten Jokes</button></Link>

        </div>
    )
};

const mapStateToProps = state => {
    
    return {
        isLoading:state.singleReducer.isLoading, 
        jokes: state.singleReducer.jokes,
        error: state.singleReducer.error
    }
}

export default connect(mapStateToProps, { fetchingJoke })(SingleJoke);
