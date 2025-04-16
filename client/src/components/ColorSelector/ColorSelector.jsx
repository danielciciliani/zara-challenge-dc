import PhoneDetail from "../PhoneDetail/PhoneDetail";

import "./ColorSelector.scss";

function ColorSelector( {colorOptions, selectedColor, onColorChange} ) {

    return (
        <>
            <p className="storage_text to_upper">color. pick your favourite.</p>
            <ul className="color_selector_wrapper">
                {colorOptions?.map((color) => (
                <div className={`color_selector_border ${
                    selectedColor === color.hexCode ? "selected" : ""
                }`}
                key={color.hexCode}
                >
                    <li 
                        className="color_selector_option"
                        style={{backgroundColor: color.hexCode}}
                        onClick={() => onColorChange(color.hexCode)}
                    >

                    </li>
                </div> 
                ))}
            </ul>
        </>
    );
}

export default ColorSelector;