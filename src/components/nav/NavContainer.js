import React, { Component } from 'react';
import {NavDisplay} from './NavDisplay';
import './Nav.css';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {logoutAction} from '../../redux/actions/userAction';

class NavContainer extends Component {
  componentWillMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    if(window.scrollY > 700){
      var elemento = document.getElementById("navbar");
      elemento.className += " color";
    }
  };

  state = {
    isLogged:false,
    user: null
  };

  signOut  = () => {
    localStorage.removeItem("user");
    this.props.logoutAction();
    window.location.reload();
    this.props.history.push("/");
  };

  componentWillMount() {
    let user = localStorage.getItem("user");
    // user = JSON.parse(user);
    if (user) {
      // console.log("si")
      this.setState({isLogged:true, user})
    }else{
      this.setState({isLogged:false})
    }
  }

  render() {
    return (
      <div>
        <NavDisplay
          isLogged={this.props.isLogged}
          signOut={this.signOut}
          {...this.props.user}
        />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  // console.log(state);
  return {
    user:state.user.userObject,
    isLogged:Object.keys(state.user.userObject).length > 0
  }
}

export default NavContainer = connect(mapStateToProps, {logoutAction})(withRouter(NavContainer));
