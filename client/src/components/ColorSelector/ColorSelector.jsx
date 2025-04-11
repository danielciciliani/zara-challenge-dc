import PhoneDetail from "../PhoneDetail/PhoneDetail";

import "./ColorSelector.scss";

function ColorSelector( {colorOptions} ) {

    return (
        <ul className="color_selector_wrapper">
            {colorOptions?.map((color) => (
            <div 
                className="color_selector_option" 
                style={{backgroundColor: color.hexCode}}
                key={color.hexCode}>
            </div>
            ))}
        </ul>
    );
}

export default ColorSelector;