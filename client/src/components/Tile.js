import React, { useState } from 'react'
import "./Tile.css"

export default function Tile({tileData}) {
  const [upvotes, setUpvotes] = useState(0);
  const [downvotes, setDownvotes] = useState(0);
  const [votes, setVotes] = useState(tileData.votes);

  const [upvotePressed, setUpvotePressed] = useState(false);
  const [downvotePressed, setDownvotePressed] = useState(false);


  function upvoteHandler(){
    if (upvotePressed){
      setUpvotePressed(false);
      setVotes(votes - 1);
    }
    else{
      // only allow one at a time
      if (downvotePressed){
        setDownvotePressed(false);
        setVotes(votes + 2);
        // setDownvotes(downvotes - 1);
      }
      else{
        setVotes(votes + 1);
      }
      setUpvotePressed(true);
      // setUpvotes(upvotes + 1);
    }
  }

  function downvoteHandler(){
    if (downvotePressed){
      setDownvotePressed(false);
      setDownvotes(downvotes - 1);
      setVotes(votes + 1);
    }
    else{
      // only allow one at a time
      if (upvotePressed){
        setUpvotePressed(false);
        setVotes(votes - 2);
      }
      else{
        setVotes(votes - 1);
      }
      setDownvotePressed(true);
    }
  }

  return (
    <div className="tileBox">
      <div className="upperWrapper">

        <div className="headingWrapper">
          <div className="name">{tileData.name}</div>
          <div className="dateLocWrapper">
            <div className="content date">{tileData.date.month + "/" + tileData.date.day + "/" + tileData.date.year}</div>
            <div className="content">-</div>
            <div className="content">{tileData.location}</div>
          </div>
        </div>

        <div className="tagWrapper">
          <div className="tagRow">
            <div className="content">{tileData.type}</div>
            <div className="content">{(tileData.length) && tileData.length}</div>
          </div>
          <div className="tagRow">
            <div className="content">{tileData.insideSecurity ? ("airport") : ("outside")}</div>
            <div className="content">{
              ((tileData.price) && tileData.price)
            }</div>
          </div>
        </div>
      </div>

      <div className="postBody">
        {tileData.msg}
      </div>


        {/* Upvote / Downvote */}
      <div className="voteWrapper">
        <div className="voteCounter">{
          (votes >= 0) ?
             "+" + votes 
            : "-" + Math.abs(votes) 
        }</div>
        {upvotePressed ? (
          <button className="voteButton upvote pressed" onClick={upvoteHandler}>⬆</button>
          ) : (
            <button className="voteButton upvote" onClick={upvoteHandler}>⬆</button>
          )
        }
        {downvotePressed ? (
          <button className="voteButton downvote pressed" onClick={downvoteHandler}>⬇</button>
          ) : (
            <button className="voteButton downvote" onClick={downvoteHandler}>⬇</button>
          )
        }
      </div>
    </div>
  )
}
