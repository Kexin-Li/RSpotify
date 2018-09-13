import React, { Component } from 'react';

class VolumeController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: 80
    };
  }

  updateVolume = (e) => {
    this.setState({
      volume: e.target.value
    });
    this.props.volumeControl(Math.ceil(e.target.value / 10) * 10);
  };

  render() {
    return (
      <div className="volume-control">
        <i className="fa fa-volume-up" aria-hidden="true"/>
        <input 
          className='volume' 
          type="range" 
          min={0} max={100}
          value={ this.state.volume }
          onChange={ this.updateVolume }
        />
      </div>
    );
  }
};

export default VolumeController;
