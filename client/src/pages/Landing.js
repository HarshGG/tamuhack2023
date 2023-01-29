import "./Landing.css";
import logo_anim from '../images/animated_logo_trans.gif';
import logo_trans from '../images/logo_trans.png';

const Landing = ({userame, setUsername, flightNum, setFlightNum}) => {
    const onEnterUsername = (event) => {
        setUsername(event.target.value);
    }
    const onEnterFlightNum = (event) => {
        setFlightNum(event.target.value);
    }
    return (
        <div class="landing">
            <div className="contents-container">
                <h1 className="home-heading">Project Name</h1> 
                <div>
                <img src={logo_anim} class="center"/>
                </div>
                <div>Please enter a good name for you :)</div>
                <input class="username-input" type="text" placeholder="Your name..." onChange={onEnterUsername}></input>
                <div>Please enter your flight number</div>
                <input class="username-input" type="text" placeholder="For example AA1234..." onChange={onEnterFlightNum}></input>
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

export default Landing;