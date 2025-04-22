import "./ContinueShopping.scss";
import { Link} from "react-router";

function ContinueShopping(){

    
    
   
    return (
        <Link to={'/'}>
            <div 
                className={"continue-shopping_button"}
            >            
                continue shopping
            </div>
        </Link>
        
    );
}

export default ContinueShopping;