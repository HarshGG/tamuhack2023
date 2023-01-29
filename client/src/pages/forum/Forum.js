import "./Forum.css"
import Recs from "./Recs"
import Menu from "../../components/Menu"
import Discussion from "./Discussion"
import { useEffect, useState } from "react";


const Forum = () => {
    const [window, setWindow] = useState("rec");
    const menuOptions = ["Home", "Flight Info", "Forum", "Chat"];
    const params = {
        type: "food",

    };

    return (
        <>
            <Menu window={window} setWindow={setWindow} menuItems={menuOptions}/>
            <div class="mainBody">
                <div>{
                    (window === "Forum") 
                        ? <Recs params={params}></Recs>
                        : <Discussion></Discussion>
                }</div>
            </div>
        </>
    )
}

export default Forum;