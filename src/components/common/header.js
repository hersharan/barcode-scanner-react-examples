/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react';
import { withRouter, NavLink, Link } from 'react-router-dom';
import './header.scss';
import LeftArrow from '../../assets/images/left-arrow.svg';
import Hemburger from '../../assets/images/hemburger.svg';

const HeaderComponent = () => {
  return (
    <Fragment>
      <header className="header">
        <div className="page__container">
          <div className="left-section">
            <Link to="/">
              <img src={LeftArrow} alt="" />
            </Link>
            <Link to="/scanner1"> QuaggaJS </Link>
            <Link to="/scanner2"> QuaggaJS@2 </Link>
            <Link to="/barcode"> react-barcode-reader </Link>
          </div>
          <div className="right-section">
            <img src={Hemburger} alt="" />
          </div>
        </div>
      </header>

      <header className="header header-mobile">
        <div className="page__container">
          <div className="left-section">
            <Link to="/">
              <img src={LeftArrow} alt="" />
            </Link>
            <Link to="/scanner1"> QuaggaJS </Link>
            <Link to="/scanner2"> QuaggaJS@2 </Link>
            <Link to="/barcode"> react-barcode-reader </Link>
          </div>
          <div className="right-section">
            <img src={Hemburger} alt="" />
          </div>
        </div>
      </header>
    </Fragment>
  );
};
export default HeaderComponent;
