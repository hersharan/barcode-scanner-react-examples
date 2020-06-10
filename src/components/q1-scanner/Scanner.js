import React from 'react';
import Quagga from 'quagga';
import PropTypes from 'prop-types';

export default class QuaggaJSScanner extends React.Component {
  constructor(props) {
    super(props);
    this._onDetected = this._onDetected.bind(this);
  }

  componentDidMount() {
    Quagga.init({
      inputStream: {
        type: "LiveStream",
        constraints: {
          width: 640,
          height: 480,
          facingMode: "environment" // or user
        }
      },
      locator: {
        patchSize: "medium",
        halfSample: true
      },
      numOfWorkers: 2,
      decoder: {
        readers: ["upc_reader"]
        // code_128_reader
        // ean_reader
        // ean_8_reader
        // code_39_reader
        // code_39_vin_reader
        // codabar_reader
        // upc_reader
        // upc_e_reader
        // i2of5_reader
        // 2of5_reader
        // code_93_reader
      },
      locate: true
    }, function (err) {
      if (err) {
        return console.log(err);
      }
      Quagga.start();
    });
    Quagga.onDetected(this._onDetected);
  }

  componentWillUnmount() {
    Quagga.offDetected(this._onDetected);
  }

  _onDetected(result) {
    this.props.onDetected(result);
  }
  render() {
    return (
      <div id="interactive" className="viewport" />
    );
  }
};

QuaggaJSScanner.propTypes = {
  onDetected: PropTypes.func.isRequired
};