import "./Check-in.css"

import logo_trans from '../images/logo_trans.png';

const CheckIn = () => {
    return (
        <div class="Check-in">
            <div class="contents-container">
                <div>Please enter a good name for you :)</div>
                <input class="username-input" type="text" placeholder="Your name..."></input>
                <div>Please enter your flight number</div>
                <input class="username-input" type="text" placeholder="For example AA1234..."></input>
                <a href="/home">
                    <button className="button-main">
                        <div class="go-button">
                            <div>Go</div>
                            <div><img src={logo_trans} class="go-image" style={{display: "inline-block"}}/></div>
                        </div>
                    </button>
                </a>
            </div>
          </div>
    )
}

export default CheckIn;