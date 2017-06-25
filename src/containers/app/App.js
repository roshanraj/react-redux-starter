import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import './app.scss';

class App extends Component {

  render() {
    const { user } = this.props;
    console.log("printing")
    return (
      <div className="container">
        <div className="container appContent">
          {this.props.children}
        </div>
      </div>
    );
  }
}
App.propTypes = {
  user: PropTypes.string,
  children: PropTypes.node.isRequired,
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
};
App.contextTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => {
  const { auth } = state;
  return {
    user: auth ? auth.user : null,
  };
};
export default connect(
  mapStateToProps
)(App);
