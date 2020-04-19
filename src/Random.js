import React from 'react';
import {Button} from './Button';

class Random extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      color: [92, 132, 50]
      };
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({
      color: this.chooseColor()
    });
  }
  componentDidMount() {
    this.applyColor();
  }

  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }

  formatColor(ary) {
    return 'rgb(' + ary.join(', ') + ')';
  }

  isLight() {
    const rgb = this.state.color;
    return rgb.reduce((a,b) => a+b) < 127 * 3;
  }

  applyColor() {
    const color = this.formatColor(this.state.color);
    document.body.style.background = color;
  }

  chooseColor() {
    const random = [];
    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random()*256));
    }
    return random;
  }
    
  convertSingleCode(color){
        let hexCode = color.toString(16);

        return (hexCode.length === 1) ? ('0' + hexCode) : hexCode;
    }
rgbToHex(ary){
    return 'Hex: #' + this.convertSingleCode(ary[0]) + this.convertSingleCode(ary[1]) + this.convertSingleCode(ary[2]);  
}
   

  render() {
    return (
      <div>
        <p id="title" className={this.isLight() ? 'white' : 'black'}>Random Color Picker</p>
        <h1 className={this.isLight() ? 'white' : 'black'}>
          Your color is <br />{this.formatColor(this.state.color)} <br /> {this.rgbToHex(this.state.color)}
        </h1>
        <Button light={this.isLight()} onClick={this.handleClick} />
      </div>
    );
  }
}

export default Random;