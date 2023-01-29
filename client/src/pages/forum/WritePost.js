import React, {useState} from 'react'
import Menu from '../../components/Menu';
import "./WritePost.css"

function WritePost({username, setWritingPost, addPost}) {

    const dateObj = new Date();
    const currDate = {
        month: dateObj.getUTCMonth() + 1,
        day: dateObj.getUTCDate(),
        year: dateObj.getUTCFullYear(),
    };

    const [post, setPost] = useState({
        name: username,
        date: currDate,
    });

    const [typeFilter, setTypeFilter] = useState("food");
    const typeOptions = ["food", "activity", "general"];
    const [securityFilter, setSecurityFilter] = useState("inside");
    const securityOptions = ["inside", "outside"];
    const [priceFilter, setPriceFilter] = useState("Free");
    const priceOptions = ["Free", "<$20", "$20-$40", ">$40"];
    const [lengthFilter, setLengthFilter] = useState("<.5 hr");
    const lengthOptions = ["<.5 hr", ".5-1 hr", "1-2 hr", ">2 hr"];

    function buildPost(){
        var post = {
            name: username,
            date: currDate,

            type: typeFilter,
            length: lengthFilter,
            price: priceFilter,
            insideSecurity: securityFilter,
            location: "none",
            msg: "none",
        }

        addPost(post);
    }

    return (
        <div>
            <div class="navWrapper">
                <div class="navLeft">
                    <div class="navButton" onClick={() => setWritingPost(false)}>Return</div>
                </div>
                <div class="navRight">
                    <div class="navButton" onClick={() => buildPost()}>Let it Fly!</div>
                </div>

            </div>
            <div class="selectElement">
                <div class="selectHeading">Type:</div>
                <Menu window={typeFilter} setWindow={setTypeFilter} menuItems={typeOptions}/>
            </div>
            Write Post
        </div>
    )
}

export default WritePost
