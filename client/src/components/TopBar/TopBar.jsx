import {Link} from "react-router";
import "./TopBar.scss";
import "./../PhoneDetail/PhoneDetail"
import { useCartContext } from "../../context/CartContext";

const logo = "./../public/logo_MBST.svg";
const bagIcon = "./../public/bag_icon.svg";

function TopBar(){
    const {addedProducts} = useCartContext();
        
    return (
        <>
            <div className="topbar">
                <div className="topbar_wrapper">
                    <Link to={'/'}>
                        <div className="topbar_wrapper_logo">
                            <img src={logo} alt="logo MTSB" />
                        </div>
                    </Link>
                    <Link to={'/cart'}>
                        <div className="topbar_wrapper_bag">
                            <img className="topbar_wrapper_bag_image" src={bagIcon} alt="bag icon" />
                            <p key={addedProducts} className="topbar_wrapper_bag_number animated_number">{addedProducts}</p>
                        </div>
                    </ Link>
                </div>
            </div>
        </>
    );
}

export default TopBar;