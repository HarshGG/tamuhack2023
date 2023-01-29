import "./Forum.css"
import Recs from "./Recs"
import Menu from "../../components/Menu"
import Dropbtn from "../../components/Dropbtn"
import Discussion from "./Discussion"
import WritePost from "./WritePost"
import { useEffect, useState } from "react";


const Forum = () => {
    const [writingPost, setWritingPost] = useState(false);

    return (
        <>
            <div class="mainBody">
                <div>{
                    (writingPost)
                        ? <WritePost />
                        : <Recs/>
                }</div>
            </div>
        </>
    )
}

export default Forum;