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
    const [msg, setMsg] = useState("none");
    const [loc, setLoc] = useState("none");


    function handleLocChange(event){
        setLoc(event.target.value);
    }

    function handleMsgChange(event){
        setMsg(event.target.value);
    }

    function buildPost(){
        var post = {
            name: username,
            date: currDate,

            type: typeFilter,
            length: lengthFilter,
            price: priceFilter,
            insideSecurity: securityFilter,
            location: loc,
            msg: msg,
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
            <div class="selectWrapper">
                <div class="selectElement">
                    <div class="selectHeading">Type:</div>
                    <Menu window={typeFilter} setWindow={setTypeFilter} menuItems={typeOptions}/>
                </div>
                <div class="selectElement">
                    <div class="selectHeading">Length:</div>
                    <Menu window={lengthFilter} setWindow={setLengthFilter} menuItems={lengthOptions}/>
                </div>
                <div class="selectElement">
                    <div class="selectHeading">Price:</div>
                    <Menu window={priceFilter} setWindow={setPriceFilter} menuItems={priceOptions}/>
                </div>
                <div class="selectElement">
                    <div class="selectHeading">Security:</div>
                    <Menu window={securityFilter} setWindow={setSecurityFilter} menuItems={securityOptions}/>
                </div>

                <div class="selectElement">
                    <div class="selectHeading">Location:</div>
                    <textarea onChange={handleLocChange}></textarea>
                </div>
                <div class="selectHeading">Message:</div>
                <textarea class="msgText" onChange={handleMsgChange}></textarea>

            </div>
        </div>
    )
}

export default WritePost
