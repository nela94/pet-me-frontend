import React from 'react';
import Navbar from './components/Navbar';
import Routes from './router/Routes';
import './App.css';
import { getCurrentUser } from './actions/allActions';
import {connect} from 'react-redux'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    // console.log(this.props)
    return (
      <div className="App">
        <div className="container">
          <header>
            <Navbar />

            </header>
          <section>
            <div id="container_demo" >
              <div id="wrapper">
                <Routes />

              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({ user })

const mapDispatchToProps = dispatch => ({
  getCurrentUser: () => dispatch(getCurrentUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
