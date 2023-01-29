import "./Forum.css"
import Recs from "./Recs"
import Menu from "../../components/Menu"
import Dropbtn from "../../components/Dropbtn"
import Discussion from "./Discussion"
import { useEffect, useState } from "react";


const Forum = () => {
    const [window, setWindow] = useState("rec");
    const [typeFilter, setTypeFilter] = useState("all");
    const menuOptions = ["Home", "Flight Info", "Forum", "Chat"];
    const typeOptions = ["all", "food", "activity", "general"];
    const params = {
        type: "food",
        insideSecurity: true,

    };

    return (
        <>
            <Dropbtn heading={"Type"} currOpt={typeFilter} setCurrOpt={setTypeFilter} options={typeOptions}/>
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