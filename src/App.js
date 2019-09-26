import React from 'react';

//Components
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Homepage';
import Navbar from './Components/Navbar';

class App extends React.Component {

  state = {
    showLogin: true,
    showRegister: false,
    showHome: false,

    // usr: {}

  }

  renderRegister = () => {
    this.setState({
      showRegister: true,
      showLogin: false
    })
  }

  renderLogin = () =>{
    this.setState({
      showLogin: true,
      showRegister: false,
    })
  }

  renderHome = () => {
    this.setState({
      showHome: true,
      showLogin: false
    })
  }

  render() {

    const { showHome, showLogin, showRegister } = this.state;

    return (
      <React.Fragment>
        <Navbar/>
        <div className="first-div">
          {
            showLogin && <Login reg={this.renderRegister} home={this.renderHome} />
          }
        </div>
        {
          showRegister && <Register login={this.renderLogin} />
        }
        {
          showHome && <Home />
        }
      </React.Fragment>
    );
  }
}

export default App;
