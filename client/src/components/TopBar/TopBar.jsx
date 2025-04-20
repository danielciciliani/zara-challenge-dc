import {Link} from "react-router";
import "./TopBar.scss";

function TopBar(){
    const logo = "./../public/logo_MBST.svg";
    const bagIcon = "./../public/bag_icon.svg";
    

    return (
        <>
            <div className="topbar">
                <Link to={'/'}>
                    <div className="topbar_logo">
                        <img src={logo} alt="logo MTSB" />
                    </div>
                </Link>
                <Link to={'/'}>
                    <div className="topbar_bag">
                        <img className="topbar_bag_image" src={bagIcon} alt="bag icon" />
                        <p className="topbar_bag_number">0</p>
                    </div>
                </ Link>
            </div>
        </>
    );
}

export default TopBar;