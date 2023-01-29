import './App.css';
import React, { useState } from 'react'
import Tile from './Tile';

function App() {

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
            class: "activity",
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
            class: "dining",
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
            class: "activity",
            length: 240,
            insideSecurity: false,
            location: "Aggie Park",
            msg: "Aggie Park is a great place to kill time during a long layover!",
        }

    ]

    // const [tileData, setTileData] = useState({
    //     name: "Vinay Mannem",
    //     date: {
    //         day: 28,
    //         month: 1,
    //         year: 2023,
    //     },
    //     class: "activity",
    //     length: 180,
    //     insideSecurity: false,
    //     price: 30,
    //     location: "StoneCo Climbing",
    //     msg: "I went climbing at a local gym called StoneCo during my layover. Try it out!",
    // });

    const tileList = tiles.map(tile =>
        <Tile key={tile.id} tileData={tile} />
    );

    return (
        <div>
            <h1>Posts</h1>
            {tileList}
            {/* <Tile tileData={tiles[2]}/> */}
        </div>
    );
}

export default App;