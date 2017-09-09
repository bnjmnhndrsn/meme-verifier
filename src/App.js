import React, { Component } from 'react';
import FileUpload from './components/FileUpload';
import Canvas from './components/Canvas';
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            image: null
        };
        
        this.onAddImage = this.onAddImage.bind(this);
    }
    
    onAddImage(image){
        this.setState({image});
    }
    
    render() {
      return (
          <div>
              {
                  this.state.image ? 
                  <Canvas image={this.state.image} /> :
                  <FileUpload onAddImage={this.onAddImage} />
              }
          </div>
      );
    }
}

export default App;
