import React, { Component } from 'react';
import FileUpload from './components/FileUpload';
import Canvas from './components/Canvas';

import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            file: null
        };
        
        this.onAddFile = this.onAddFile.bind(this);
    }
    
    onAddFile(file){
      this.setState({file});
    }
    
    render() {
      return (
          <div>
              {
                  this.state.file ? 
                  <Canvas file={this.state.file} /> :
                  <FileUpload onAddFile={this.onAddFile} />
              }
          </div>
      );
    }
}

export default App;
