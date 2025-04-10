import PhoneDetail from "../PhoneDetail/PhoneDetail";

import "./StorageSelector.scss";

function StorageSelector( {storageOptions, selectedStorage, onStorageChange}){

    return (
        <ul className="storage_selector_wrapper">
            {storageOptions.map((storage) => (
                <li className={`storage_selector_option ${ 
                    selectedStorage === storage.capacity ? "selected" : ""
                }`}
                    key={storage.capacity}
                    onClick={() => onStorageChange(storage)}
                    >
                    {storage.capacity}
                </li>
            ))}
        </ul>
    );
}

export default StorageSelector;