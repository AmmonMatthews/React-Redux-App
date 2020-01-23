import React from "react";

const Joke = ({ item }) => {

    return(
     <div key={item.id} className="tenJokes">
        <p>{item.setup}</p>
        <p>{item.punchline}</p>
    </div>)

}

export default Joke;