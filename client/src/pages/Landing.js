import "./Landing.css";
import logo_anim from '../images/animated_logo_trans.gif';

const Landing = () => {
    return (
        <div class="landing">
            <div className="contents-container">
                <h1 className="home-heading">Project Name</h1> 
                <div>
                <img src={logo_anim} class="center"/>
                </div>
                <a href='/check-in'>
                    <button className="button-main">Get Started</button>
                </a>
            </div>
        </div>
    )
}

export default Landing;