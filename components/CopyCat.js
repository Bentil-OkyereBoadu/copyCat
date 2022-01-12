import React from 'react';
import {styles} from '../styles';
import PropTypes from 'prop-types';

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};


class CopyCat extends React.Component {
   
  render() {
    
    return (
      <div style={styles.divStyles}>
        <h1 style={{marginBottom: 80}}>Copy Cat {this.props.name}</h1>
        <input 
          type='text' 
          value={this.props.input} 
          onChange={this.props.handleChange} />
        <img 
          style={styles.imgStyles}
          alt='cat'
          src={ this.props.copy? images.copycat : images.quietcat}
          onClick={this.props.toggle}
        />
        <p>
          {this.props.copy? this.props.input : ''}  
        </p>
      </div>
    );
  };
}

//create default prop for name
CopyCat.defaultProps = {name: 'Tom'}

CopyCat.propTypes = {
  input: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  copy: PropTypes.bool.isRequired,
  toggle: PropTypes.bool.isRequired,
  name: PropTypes.string
}

export default CopyCat;
