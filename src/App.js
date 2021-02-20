import './App.css';
import {connect} from "react-redux";
import AuthPage from './components/pages/AuthPage';
import AirportPage from './components/pages/AirportPage';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

function App({isLogIn}) {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            {isLogIn ? <Redirect to="/airport" />: <AuthPage/>}
          </Route>
          {isLogIn ? 
            <Route path="/airport">
              <AirportPage/>
            </Route> : 
            <AuthPage/>}
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = (state)=>{
  return {
    isLogIn: state.isLogIn
  }
}

export default connect(mapStateToProps, null)(App);
