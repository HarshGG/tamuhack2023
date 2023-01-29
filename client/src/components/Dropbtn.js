import React from 'react'
import "./Dropbtn.css"

function Dropbtn({heading, currOpt, setCurrOpt, options}) {

    console.log("options:", options);
    return (
        <div class="dropdown">
            <button class="dropbtn titleButton" id={heading + "-dropdown"}>{heading + ": " + currOpt}</button>
            <div class="dropdown-content">
                {options.map(opt =>
                    <button 
                        id={opt}
                        class="dropdown-element"
                        onClick={() => setCurrOpt(opt)}
                    >
                        {opt}
                    </button>
                )}
            </div>
        </div>
    )
}

export default Dropbtn
