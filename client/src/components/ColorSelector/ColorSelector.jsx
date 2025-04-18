import { useState } from "react";
import PhoneDetail from "../PhoneDetail/PhoneDetail";

import "./ColorSelector.scss";

function ColorSelector( {colorOptions, selectedColor, onColorChange} ) {
    
    const [HoveredColor, SetHoveredColor] = useState(null);
    const selectedColorData = colorOptions.find(c => c.hexCode === selectedColor);
    const displayedColorName = HoveredColor || selectedColorData?.name || " ";    

    return (
        <>
            <>
            <p className="storage_text to_upper">color. pick your favourite.</p>
            <ul className="color_selector_wrapper">
                {colorOptions?.map((color) => (
                    <div className={`color_selector_border ${selectedColor === color.hexCode ? "selected" : ""}`}
                        key={color.hexCode}
                    >
                        <li
                            className="color_selector_option"
                            style={{ backgroundColor: color.hexCode }}
                            onClick={() => onColorChange(color.hexCode)}
                            onMouseEnter={() => SetHoveredColor(color.name)}
                            onMouseLeave={() => SetHoveredColor(null)}
                        >
                        </li>
                    </div>
                ))}
            </ul>
            <p className="color_selector_name animated_color" key={displayedColorName}>{displayedColorName}</p> 
            </>
        </>
    );
}

export default ColorSelector;