import { padding } from "@mui/system";
import logo_trans from '../images/logo_trans.png';
import user_icon from '../images/user-icon.png';
import logout from '../images/logout.svg';
import "./Home.css";

const Home = () => {
    return (
        <div class="Home">
            <div class="app-nav-header">
                <img class="navbar-image" src={logo_trans}></img>
                <img class="navbar-image" src={user_icon}></img>
                <img class="navbar-image" src={logout}></img>
            </div>
            <div class="title-text">
                <h1>Welcome, NAME</h1>
                <h2>AA1234</h2>
            </div>
            <div style={{flex: 1, height: '1px', backgroundColor: 'black', margin: '15px'}} />
            <div class="tabs">
                <div class="navtab-row">
                    <div class="navtab">
                        <div>FLIGHT INFO</div>
                    </div>
                    <div class="navtab">
                        <div>RECOMMENDATIONS</div>
                    </div>
                </div>
                <div class="navtab-row">
                    <div class="navtab">
                        <div>FORUMS</div>
                    </div>
                    <div class="navtab">
                        <div>LOL</div>
                    </div>
                </div>
                <a href="/chat">
                    <div class="chat-window">
                        CHAT
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Home;