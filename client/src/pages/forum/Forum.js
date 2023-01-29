import "./Forum.css"
import Recs from "./Recs"
import Menu from "../../components/Menu"
import Dropbtn from "../../components/Dropbtn"
import Discussion from "./Discussion"
import WritePost from "./WritePost"
import { useEffect, useState } from "react";


function Forum({username}) {
    
    const [writingPost, setWritingPost] = useState(false);
    const [tiles, setTiles] = useState([
        {
            id: 0,
            name: "Vinay Mannem",
            date: {
                day: 28,
                month: 1,
                year: 2023,
            },
            type: "activity",
            length: ">2 hr",
            insideSecurity: false,
            price: "$20-$40",
            location: "StoneCo Climbing",
            msg: "I went climbing at a local gym called StoneCo during my layover. Try it out!",
            votes: 5,
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
            length: "1-2 hr",
            price: "<$20",
            insideSecurity: true,
            location: "Starbucks",
            msg: "Starbucks near gate 11 has great latte art!",
            votes: 8,
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
            length: ">2 hr",
            price: "Free",
            location: "outside",
            insideSecurity: false,
            location: "Aggie Park",
            msg: "Aggie Park is a great place to kill time during a long layover!",
            votes: 1,
        },
        {
            id: 3,
            name: "Jerry Kurtin",
            date: {
                day: 29,
                month: 1,
                year: 2023,
            },
            type: "general",
            length: ">2 hr",
            price: "Free",
            insideSecurity: true,
            location: "Bathrooms",
            msg: "I love the stalls in this airport",
            votes: -3,
        }
    ])

    function addPost(post){
        console.log("adding post")
        var currTiles = tiles;
        post.id = currTiles.length;
        currTiles.push(post);

        setTiles(currTiles);

        setWritingPost(false);
    }

    return (
        <>
            <div class="mainBody">
                <div class="forumContents">{
                    (writingPost)
                        ? <WritePost username={username} setWritingPost={setWritingPost} addPost={addPost}/>
                        : <Recs tiles={tiles} setWritingPost={setWritingPost}/>
                }</div>
            </div>
        </>
    )
}

export default Forum;