import React, { Component } from 'react';
import ColorDisplay from '../components/colors/ColorDisplay';
import ColorPicker from '../components/colors/ColorPicker';

export default class ColorContainer extends Component {

  state = {
    backgroundColor: 'black'
  };

  selectColor = backgroundColor => {
    this.setState({ backgroundColor });
  }

  render() {
    const { backgroundColor } = this.state;
    const colors = ['red', 'green', 'black', 'yellow'];

    return (
      <>
        <ColorDisplay backgroundColor={backgroundColor} />
        <ColorPicker
          selectColor={this.selectColor}
          colors={colors} />
      </>
    );
  }
  
}
