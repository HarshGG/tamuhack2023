import "./Forum.css"
import Recs from "./Recs"
import Discussion from "./Discussion"
import { useEffect, useState } from "react";


const Forum = () => {
    const [window, setWindow] = useState("rec");

    return (
        <>
            <div class="header">
                <button class="titleButton returnButton">Return</button>
                <button id="recButton" class={"titleButton recButton " + ((window === "rec") ? "selected" : "")} onClick={() => setWindow("rec")}>Recommendations</button>
                <button id="discButton" class={"titleButton discButton " + ((window === "disc") ? "selected" : "")} onClick={() => setWindow("disc")}>Discussion</button>
            </div>
            <div class="mainBody">
                <div>{
                    (window === "rec") 
                        ? <Recs></Recs>
                        : <Discussion></Discussion>
                }</div>
            </div>
        </>
    )
}

export default Forum;