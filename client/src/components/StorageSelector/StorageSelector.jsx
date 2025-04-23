import PhoneDetail from '../PhoneDetail/PhoneDetail';

import './StorageSelector.scss';

function StorageSelector({ storageOptions, selectedStorage, onStorageChange }) {
  return (
    <>
      <p className="storage_text to_upper">
        Storage ¿hOW MUCH SPACE DO YOU NEED?
      </p>
      <ul className="storage_selector_wrapper">
        {storageOptions.map(storage => (
          <li
            key={storage.capacity}
            className={`storage_selector_option ${
              selectedStorage === storage.capacity ? 'selected' : ''
            }`}
            onClick={() => onStorageChange(storage)}
          >
            {storage.capacity}
          </li>
        ))}
      </ul>
    </>
  );
}

export default StorageSelector;
