import React, { Component } from 'react';

export default class RandomColor extends Component {

  componentDidMount() {
    const colors = ['red', 'green', 'black', 'yellow', 'orange', 'purple', 'indigo'];
    window.setInterval(() => this.randomColor(colors), 1000);
  }

  state = {
    color: 'grey',
    backgroundImage: ''
  }
  
  randomColor(colors) {
    let display = colors[Math.floor(Math.random() * colors.length)];
    if(display === this.state.backgroundColor) {
      this.setState({ backgroundImage: 'url(https://i.dailymail.co.uk/i/pix/2016/03/18/15/324D202500000578-3498922-image-a-33_1458315465874.jpg)' });
    } else {
      this.setState({ backgroundColor: display, backgroundImage: '' });
    }
  }
  
  render() {
    return (
      <div style={{
        backgroundColor: this.state.backgroundColor,
        backgroundImage: this.state.backgroundImage,
        width: '1420px',
        height: '1420px'
      }}></div>
    );
  }

}
