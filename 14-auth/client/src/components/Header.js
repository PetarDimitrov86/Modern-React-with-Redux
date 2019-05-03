import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './HeaderStyle.css';

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <div>
          <Link to='/signout'>Sign Out</Link>
          <Link to='/feature'>Feature</Link>
        </div>
      );
    }
    return (
      <div>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/signin'>Sign In</Link>
      </div>
    );
  }

  render() {
    return (
      <div className='header'>
        <Link to='/'>Redux Auth</Link>
        {this.renderLinks()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);
