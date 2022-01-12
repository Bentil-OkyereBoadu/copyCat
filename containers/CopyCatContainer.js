import React from 'react';
import ReactDOM from 'react-dom';
import CopyCat from '../components/CopyCat';

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};


class CopyCatContainer extends React.Component {
    constructor(props) {
    super(props);

    this.state = { 
      copying: true,
      input: ''
    };

    //binding methods to this
    this.toggleTape = this.toggleTape.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  //handle changes in input textbox
  handleChange(e){
    this.setState({input: e.target.value})
  }

  //toggling copying from true to false
  toggleTape() {
    this.setState({copying: !this.state.copying})
  }
  
  render() {
    const copying = this.state.copying;
    const toggleTape = this.toggleTape;
    
    return (
     <CopyCat  
        copy={copying} 
        toggle={toggleTape} 
        input={this.state.input}
        handleChange = {this.handleChange}/>
    );
  };
}


ReactDOM.render(<CopyCatContainer />, document.getElementById('app'));