import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner'

import { fetchingJoke } from '../actions';


const SingleJoke = (props) => {
    console.log("props", props)

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
                <div>
                    <p> {props.jokes.setup}</p>
                    <p>Answer: {props.jokes.punchline}</p>
                </div> }
            
            {props.error && !props.jokes &&
                <div>
                    <p>{props.error + ' No Jokes Found'}</p>
                </div>
            }


            <button onClick={props.fetchingJoke}>Get Joke</button>
            <Link to="/joke"><button>Get Ten Jokes</button></Link>

        </div>
    )
};

const mapStateToProps = state => {
    return {
        isLoading:state.isLoading, 
        jokes: state.jokes,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchingJoke })(SingleJoke);
