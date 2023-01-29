import React, { useState } from 'react'
import Tile from '../../components/Tile';
import Dropbtn from '../../components/Dropbtn';
import "./Recs.css"

function Recs({tiles, setWritingPost}) {

    // sorting parameters
    const [params, setParams] = useState({});

    // filters to sort
    const [typeFilter, setTypeFilter] = useState("any");
    const typeOptions = ["any", "food", "activity", "general"];
    const [securityFilter, setSecurityFilter] = useState("any");
    const securityOptions = ["any", "inside", "outside"];
    const [priceFilter, setPriceFilter] = useState("any");
    const priceOptions = ["any", "Free", "<$20", "$20-$40", ">$40"];
    const [lengthFilter, setLengthFilter] = useState("any");
    const lengthOptions = ["any", "<.5 hr", ".5-1 hr", "1-2 hr", ">2 hr"];

    function setTypeParam(newParam){
        const paramsCopy = params;
        setTypeFilter(newParam);
        if (newParam === "any"){
            delete paramsCopy["type"];
        }
        else {
            paramsCopy["type"] = newParam;
        }
        setParams(paramsCopy);

        console.log("setting params to", paramsCopy);
    }

    function setSecurityParam(newParam){
        const paramsCopy = params;
        setSecurityFilter(newParam);
        if (newParam === "any"){
            delete paramsCopy["insideSecurity"];
        }
        else {
            if (newParam == "inside")
                paramsCopy["insideSecurity"] = true;
            else
                paramsCopy["insideSecurity"] = false;
        }
        setParams(paramsCopy);

        console.log("setting params to", paramsCopy);
    }

    function setPriceParam(newParam){
        const paramsCopy = params;
        setPriceFilter(newParam);
        if (newParam === "any"){
            delete paramsCopy["price"];
        }
        else {
            paramsCopy["price"] = newParam;
        }
        setParams(paramsCopy);

        console.log("setting params to", paramsCopy);
    }

    function setLengthParam(newParam){
        const paramsCopy = params;
        setLengthFilter(newParam);
        if (newParam === "any"){
            delete paramsCopy["length"];
        }
        else {
            paramsCopy["length"] = newParam;
        }
        setParams(paramsCopy);

        console.log("setting params to", paramsCopy);
    }

    

    
    function compare(data, params) {
        console.log("comparing ", data, " with ", params);

        for (const [key, _] of Object.entries(params)){
            if (!data.hasOwnProperty(key) || data[key] != params[key])
                return false;
        }

        return true;
    }

    const tileList = tiles.map(tile =>
        (compare(tile, params)) && <Tile key={tile.id} tileData={tile} />
    );

    return (
        <div>
            <h2>Filter</h2>
            <Dropbtn heading={"Type"} currOpt={typeFilter} setCurrOpt={setTypeParam} options={typeOptions}/>
            <Dropbtn heading={"Security"} currOpt={securityFilter} setCurrOpt={setSecurityParam} options={securityOptions}/>
            <Dropbtn heading={"Price"} currOpt={priceFilter} setCurrOpt={setPriceParam} options={priceOptions}/>
            <Dropbtn heading={"Length"} currOpt={lengthFilter} setCurrOpt={setLengthParam} options={lengthOptions}/>


            <h2>Posts</h2>
            <div class="newTile" onClick={() => setWritingPost(true)}>add an experience</div>
            {tileList}
        </div>
    );
}

export default Recs;