import React from 'react';
import {
  FaHome, FaPhoneAlt, FaAddressCard, FaRegWindowRestore,
} from 'react-icons/fa';

class Aside extends React.Component {
  render() {
    return (
      <div id="aside">
        <nav>
          <a href="#info-text">
            <FaHome size='30px'/>
          </a>
          <a href="#info-text">
            <FaAddressCard size='30px'/>
          </a>
          <a href="#info-text">
            <FaRegWindowRestore size='30px'/>
          </a>
          <a href="#info-text">
            <FaPhoneAlt size='30px'/>
          </a>
        </nav>
      </div>
    );
  }
}
export default Aside;