import React from 'react';
import { connect } from 'react-redux';

const Artwork = () => {
  return (
    <div className="artwork">
      <img />
    </div>
  );
};

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps)(Artwork);
