import React from 'react';
import { connect } from 'react-redux';

const Avatar = (props) => {
  const renderAvator = () => {
    const user = props.user;
    if (user) {
      return (
        <div>
          <img alt="user" src={user.images[0]} />
          <p>{user.display_name}</p>
        </div>
      );
    }
  };

  return (
    <div className="avator">
      { renderAvator() }
    </div>
  )
};

function mapStateToProps(state) {
  return {
    user: state.userReducer.user
  };
}

export default connect(mapStateToProps)(Avatar);
