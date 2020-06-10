import React from 'react';
import Scanner from './Scanner';
import Result from './Result';

export default class Q1Scanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scanning: false,
      results: []
    }
    this.scan = this.scan.bind(this);
    this.onDetected = this.onDetected.bind(this);
  }
  scan() {
    this.setState({ scanning: !this.state.scanning });
  }

  onDetected(result) {
    this.setState({ results: this.state.results.concat([result]) });
  }

  render() {
    return (
      <div>
        <button onClick={this.scan}>{this.state.scanning ? 'Stop' : 'Start'}</button>
        <ul className="results">
          {this.state.results.map((result) => (<Result key={result.codeResult.code} result={result} />))}
        </ul>
        {this.state.scanning ? <Scanner onDetected={this.onDetected} /> : null}
      </div>
    );
  }
};