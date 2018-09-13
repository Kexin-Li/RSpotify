import React from 'react';
import { connect } from 'react-redux';

const Avatar = (props) => {
  const renderAvator = () => {
    const user = props.user;
    if (user) {
      return (
        <div className="avatar">
          <img alt="user" src={ user.images[0].url } />
          <p>{ user.display_name }</p>
        </div>
      );
    }
  };

  return (
    <div className="avator-wrapper">
      { renderAvator() }
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user
  };
}

export default connect(mapStateToProps)(Avatar);
