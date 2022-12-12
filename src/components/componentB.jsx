import React, { useState } from "react";
import PropTypes from "prop-types";

function componentB(state){
    const [online, setOnline] = useState(state);
    return(
        <div>
            <h5>
                {online === false ? "Conect" : "Disconected"}
            </h5>
            <button onClick={() => setOnline(!online)}>
                {online === false ? "Conect" : "Disconected"}
            </button>
        </div>
    );
}

componentB.PropTypes = {
    state: PropTypes.bool,
};

export default componentB;