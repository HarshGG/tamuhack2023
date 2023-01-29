import React, { useState } from 'react'
import Tile from '../../components/Tile';

function Recs({params}) {

    // temporary tiles for debugging
    var tiles = [
        {
            id: 0,
            name: "Vinay Mannem",
            date: {
                day: 28,
                month: 1,
                year: 2023,
            },
            type: "activity",
            length: 180,
            insideSecurity: false,
            price: 30,
            location: "StoneCo Climbing",
            msg: "I went climbing at a local gym called StoneCo during my layover. Try it out!",
        },
        {
            id: 1,
            name: "Harsh Gangaramani",
            date: {
                day: 14,
                month: 1,
                year: 2023,
            },
            type: "food",
            length: 90,
            price: 5,
            insideSecurity: true,
            location: "Starbucks",
            msg: "Starbucks near gate 11 has great latte art!"
        },
        {
            id: 2,
            name: "Rahul Ayanampudi",
            date: {
                day: 26,
                month: 1,
                year: 2023,
            },
            type: "activity",
            length: 240,
            location: "outside",
            insideSecurity: false,
            location: "Aggie Park",
            msg: "Aggie Park is a great place to kill time during a long layover!",
        }

    ]

    function compare(data, params) {

        for (const [key, _] of Object.entries(params)){
            if (!data.hasOwnProperty(key) || data[key] != params[key])
                return false;
        }

        return true;

        // if (params.hasOwnProperty("type") && params["type"] != data.type)
        //     return false;

        // if (params.hasOwnProperty("insideSecurity") && params.insideSecurity != data.insideSecurity)
        //     return false;

        // if (params.hasOwnProperty("insideSecurity") && params.insideSecurity != data.insideSecurity)
        //     return false;

        // return true;
    }

    const tileList = tiles.map(tile =>
        (compare(tile, params)) && <Tile key={tile.id} tileData={tile} />
    );

    return (
        <div>
            <h2>Posts</h2>
            {tileList}
            {/* <Tile tileData={tiles[2]}/> */}
        </div>
    );
}

export default Recs;