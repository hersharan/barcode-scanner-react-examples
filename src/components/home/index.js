import React from 'react';
import { Link } from 'react-router-dom';
// import Banner from '../../assets/images/qr.png';
import './home.scss';

const Home = () => {
  return (
    <div className="scan-container">
      <div className="scan-instructions">
        <p style={{ padding: '10px' }}>
          Instructions
          <br />
        </p>
        <ul>
          <li> Point toward a code and wait till barcode is captured</li>
          <li> In case of no results, Please try again</li>
          <li> TIP: keep the camera lens clean while capturing </li>
        </ul>
      </div>
      {/* <Link to="/scanner1">
        <img src={Banner} alt="scanner" />
      </Link> */}
      <div className="scan-button">
        <Link className="button" to="/scanner1">
          quaggaJS Scanner
        </Link>
      </div>
      <div className="scan-button">
        <Link className="button" to="/scanner2">
          quaggaJS@2 Scanner
        </Link>
      </div>
      <div className="scan-button">
        <Link className="button" to="/barcode">
          react-barcode-reader
        </Link>
      </div>
    </div>
  );
};

export default Home;
