import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom';

import { fetchingJokes } from '../actions'


const TenJokes = props => {


    return(
        <div>
           <button onClick={props.fetchingJokes}>Get Jokes</button>
           <Link to="/"><button>Single Joke</button></Link>
            {!props.isLoading && !props.jokes && !props.error &&
                <h2> Press me to get multiple jokes  </h2>
            }

            {props.isLoading &&
                <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={30000} //30 secs
                />
            }

            {!props.isLoading && props.jokes && 
                props.jokes.map(item => {
                   return( <div key={item.id} className="tenJokes">
                        <p>{item.setup}</p>
                        <p>{item.punchline}</p>
                    </div>)
                })}


           
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