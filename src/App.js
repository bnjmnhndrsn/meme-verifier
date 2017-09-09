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
          <div className="app">
              <h1 className="page-title">Verify your meme!</h1>
              <div className="content">
                  {
                      this.state.image ? 
                      <Canvas image={this.state.image} maxWidth={500} maxHeight={500} /> :
                      <FileUpload onAddImage={this.onAddImage} />
                  }
              </div>
          </div>
      );
    }
}

export default App;
