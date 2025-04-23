import './PayButton.scss';

import { Link } from 'react-router';

function PayButton() {
  return (
    <>
      <Link to={'/'}>
        <div className={'pay_button'}>pay</div>
      </Link>
    </>
  );
}

export default PayButton;
