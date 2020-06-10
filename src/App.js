import React from 'react';
import { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  withRouter,
  Route,
} from 'react-router-dom';
import './App.css';
import Header from './components/common/header';
import Footer from './components/common/footer';
import Home from './components/home';
import Scanner1 from './components/q1-scanner';
import Scanner2 from './components/q2-scanner';
import Barcode from './components/react-barcode-reader';

const RouterChangeCallBack = withRouter(({ callback }) => {
  callback('');
  return '';
});

function App() {
  function callback(status) { }
  return (
    <div className="App body-container">
      <Suspense fallback={<span>Loading</span>}>
        <Router>
          <Header />
          <Switch>
            <React.Fragment>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/scanner1" component={Scanner1} />
              <Route exact path="/scanner2" component={Scanner2} />
              <Route exact path="/barcode" component={Barcode} />
            </React.Fragment>
          </Switch>
          <RouterChangeCallBack callback={callback} />
          <Footer />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
